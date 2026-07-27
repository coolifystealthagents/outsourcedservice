#!/usr/bin/env python3
from pathlib import Path
from html import unescape
import json
import re
import sys

SLUG = 'customer-service-outsourcing-philippines-queue-escalation-guide'
TITLE = 'Customer service outsourcing Philippines: a queue and escalation guide'
html = Path(f'.next/server/app/blog/{SLUG}.html').read_text()
match = re.search(r'<article class="container"[^>]*>(.*?)</article>', html, re.S)
if not match:
    raise SystemExit('AUDIT_SELECTOR_MISMATCH: article.container')
article = match.group(1)

def visible(fragment: str) -> str:
    fragment = re.sub(r'<(?:script|style|noscript)\b.*?</(?:script|style|noscript)>', ' ', fragment, flags=re.I | re.S)
    return re.sub(r'\s+', ' ', unescape(re.sub(r'<[^>]+>', ' ', fragment))).strip()

text = visible(article)
page_text = visible(html)
words = re.findall(r"\b[\w’'-]+\b", text)
body = re.search(r'<div class="article-body accounting-guide customer-queue-guide">(.*)</div>', article, re.S)
if not body:
    raise SystemExit('AUDIT_SELECTOR_MISMATCH: customer article body')
body_html = body.group(1)
paragraphs = []
for paragraph in re.finditer(r'<p(?:\s[^>]*)?>(.*?)</p>', body_html, re.I | re.S):
    value = visible(paragraph.group(1))
    normalized = re.sub(r'\b(?:No|Rev|U\.S|I\.L\.O)\.', lambda m: m.group(0).replace('.', '§'), value)
    parts = [part for part in re.split(r'(?<=[.!?])[\"”\']?\s+', normalized) if part.strip()]
    paragraphs.append({'text': value[:90], 'sentences': len(parts)})
bad_paragraphs = [item for item in paragraphs if not 2 <= item['sentences'] <= 3]
hrefs = [unescape(value) for value in re.findall(r'<a\b[^>]*href="([^"]+)"', article, re.I)]
page_hrefs = [unescape(value) for value in re.findall(r'<a\b[^>]*href="([^"]+)"', html, re.I)]
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
forbidden_words = re.findall(r'(?i)\b(?:pricing|rates|tiers)\b', page_text)
forbidden_hrefs = [value for value in page_hrefs if '/pricing' in value.lower()]
h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', article, re.S)
h1_text = visible(h1_match.group(1)) if h1_match else ''
checks = {
    'word_count': len(words),
    'h1_count': len(re.findall(r'<h1\b', article, re.I)),
    'h1_exact': f'<h1>{TITLE}</h1>' in article,
    'h1_keyword_prefix': h1_text.lower().startswith('customer service outsourcing philippines'),
    'title_exact': bool(re.search(rf'<title>[^<]*{re.escape(TITLE)}', html)),
    'canonical': f'<link rel="canonical" href="https://outsourcedservice.com/blog/{SLUG}"' in html,
    'unique_marker': 'data-article-marker="ph-customer-queue-20260727"' in article,
    'narrative_paragraph_count': len(paragraphs),
    'bad_paragraphs': bad_paragraphs,
    'banner_count': len(re.findall(r'class="[^"]*\barticle-banner\b', article)),
    'banner_variants': all(f'banner-{name}' in article for name in ['one', 'two', 'three']),
    'svg_count': len(re.findall(r'<svg\b', article)),
    'chart_present': 'class="evidence-chart"' in article and 'service-chart-title' in article,
    'graphic_present': 'class="review-graphic"' in article and 'escalation-graphic-title' in article,
    'methods_note_present': 'Methods note:' in text,
    'table_count': len(re.findall(r'<table class="article-table"', article)),
    'keyboard_scroll_regions': len(re.findall(r'class="[^"]*\barticle-scroll\b[^>]*tabindex="0"', article)),
    'scroll_cues': len(re.findall(r'class="scroll-cue"', article)),
    'internal_links': len(internal),
    'external_links': len(external),
    'unique_external_links': len(set(external)),
    'numbered_sources': len(re.findall(r'<li><a href="https?://', sources_html)),
    'exact_quote': 'Developed by working closely with stakeholders and reflecting the most recent cybersecurity challenges and management practices' in text and 'Kevin Stine' in text,
    'dated_statistics': all(value in text for value in ['52,204,133', '44,699,749', '59.548%', '56.810%', '67.263%', '77.867%', '2025', '2024', '2023', '2021']),
    'forbidden_words_full_document': forbidden_words,
    'forbidden_hrefs_full_document': forbidden_hrefs,
    'schema_types': schema_types,
    'sitemap_entry': f'https://outsourcedservice.com/blog/{SLUG}' in Path('.next/server/app/sitemap.xml.body').read_text(),
}
checks['passed'] = (
    1500 <= checks['word_count'] <= 2000
    and checks['h1_count'] == 1 and checks['h1_exact'] and checks['h1_keyword_prefix'] and checks['title_exact']
    and checks['canonical'] and checks['unique_marker'] and not bad_paragraphs
    and checks['banner_count'] == 3 and checks['banner_variants'] and checks['svg_count'] == 2
    and checks['chart_present'] and checks['graphic_present'] and checks['methods_note_present']
    and checks['table_count'] == 1 and checks['keyboard_scroll_regions'] == 3 and checks['scroll_cues'] == 3
    and checks['internal_links'] >= 3 and checks['unique_external_links'] >= 4 and checks['numbered_sources'] >= 4
    and checks['exact_quote'] and checks['dated_statistics'] and not forbidden_words and not forbidden_hrefs
    and checks['sitemap_entry'] and {'BlogPosting', 'FAQPage', 'BreadcrumbList'}.issubset(set(schema_types))
)
print(json.dumps(checks, indent=2))
sys.exit(0 if checks['passed'] else 2)
