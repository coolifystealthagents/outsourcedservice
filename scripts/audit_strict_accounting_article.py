#!/usr/bin/env python3
from pathlib import Path
from html import unescape
import json
import re
import sys

SLUG = 'outsourced-accounting-services-philippines-control-guide'
TITLE = 'Outsourced accounting services Philippines: a buyer control guide'
html = Path(f'.next/server/app/blog/{SLUG}.html').read_text()
match = re.search(r'<article class="container"[^>]*>(.*?)</article>', html, re.S)
if not match:
    raise SystemExit('AUDIT_SELECTOR_MISMATCH: article.container')
article = match.group(1)

def visible(fragment: str) -> str:
    fragment = re.sub(r'<(?:script|style|noscript)\b.*?</(?:script|style|noscript)>', ' ', fragment, flags=re.I | re.S)
    return re.sub(r'\s+', ' ', unescape(re.sub(r'<[^>]+>', ' ', fragment))).strip()

text = visible(article)
words = re.findall(r"\b[\w’'-]+\b", text)
body = re.search(r'<div class="article-body accounting-guide">(.*)</div>', article, re.S)
body_html = body.group(1) if body else ''
paragraphs = []
for paragraph in re.finditer(r'<p(?:\s[^>]*)?>(.*?)</p>', body_html, re.I | re.S):
    value = visible(paragraph.group(1))
    normalized = re.sub(r'\b(?:No|Rev|U\.S)\.', lambda m: m.group(0).replace('.', '§'), value)
    parts = [part for part in re.split(r'(?<=[.!?])[\"”\']?\s+', normalized) if part.strip()]
    paragraphs.append({'text': value[:72], 'sentences': len(parts)})
bad_paragraphs = [item for item in paragraphs if not 2 <= item['sentences'] <= 3]
hrefs = [unescape(value) for value in re.findall(r'<a\b[^>]*href="([^"]+)"', article, re.I)]
external = [value for value in hrefs if value.startswith('http')]
internal = [value for value in hrefs if value.startswith('/')]
jsonlds = []
for payload in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
    try:
        jsonlds.append(json.loads(unescape(payload)))
    except json.JSONDecodeError:
        pass
schema_types = [item.get('@type') for item in jsonlds if isinstance(item, dict)]
sources_match = re.search(r'<ol class="source-list numbered-sources">(.*?)</ol>', article, re.S)
sources_html = sources_match.group(1) if sources_match else ''
forbidden_words = re.findall(r'(?i)\b(?:pricing|rates|tiers)\b', text)
forbidden_hrefs = [value for value in hrefs if '/pricing' in value.lower()]
checks = {
    'word_count': len(words),
    'h1_count': len(re.findall(r'<h1\b', article, re.I)),
    'h1_exact': f'<h1>{TITLE}</h1>' in article,
    'title_exact': bool(re.search(rf'<title>[^<]*{re.escape(TITLE)}', html)),
    'canonical': f'<link rel="canonical" href="https://outsourcedservice.com/blog/{SLUG}"' in html,
    'unique_marker': 'data-article-marker="ph-accounting-control-2026"' in article,
    'narrative_paragraph_count': len(paragraphs),
    'bad_paragraphs': bad_paragraphs,
    'banner_count': len(re.findall(r'class="[^"]*\barticle-banner\b', article)),
    'svg_count': len(re.findall(r'<svg\b', article)),
    'chart_present': 'class="evidence-chart"' in article,
    'graphic_present': 'class="review-graphic"' in article,
    'methods_note_present': 'Methods note:' in text,
    'table_count': len(re.findall(r'<table class="article-table"', article)),
    'keyboard_scroll_regions': len(re.findall(r'class="[^"]*\barticle-scroll\b[^>]*tabindex="0"', article)),
    'scroll_cues': len(re.findall(r'class="scroll-cue"', article)),
    'internal_links': len(internal),
    'external_links': len(external),
    'unique_external_links': len(set(external)),
    'numbered_sources': len(re.findall(r'<li><a href="https?://', sources_html)),
    'exact_quote': 'The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats' in text and 'Laurie E. Locascio' in text,
    'dated_statistics': all(value in text for value in ['1,002', 'April 2023', 'February 2024', '51.3', '83.6', '49.3']),
    'forbidden_words': forbidden_words,
    'forbidden_hrefs': forbidden_hrefs,
    'schema_types': schema_types,
}
checks['passed'] = (
    1500 <= checks['word_count'] <= 2000
    and checks['h1_count'] == 1 and checks['h1_exact'] and checks['title_exact']
    and checks['canonical'] and checks['unique_marker'] and not bad_paragraphs
    and checks['banner_count'] == 3 and checks['svg_count'] == 2
    and checks['chart_present'] and checks['graphic_present'] and checks['methods_note_present']
    and checks['table_count'] == 1 and checks['keyboard_scroll_regions'] == 3 and checks['scroll_cues'] == 3
    and checks['internal_links'] >= 3 and checks['unique_external_links'] >= 4 and checks['numbered_sources'] >= 4
    and checks['exact_quote'] and checks['dated_statistics'] and not forbidden_words and not forbidden_hrefs
    and {'BlogPosting', 'FAQPage', 'BreadcrumbList'}.issubset(set(schema_types))
)
print(json.dumps(checks, indent=2))
sys.exit(0 if checks['passed'] else 2)
