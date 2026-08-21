import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import meta from './aug20-meta.json';

const SITE = 'https://outsourcedservice.com';
const PUBLISHED = '2026-08-20';
const DISPLAY_DATE = 'August 20, 2026';

type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string };

function item(family: Family, slug: string): Item {
  const value = (meta as Record<string, Item>)[slug];
  if (!value || value.family !== family) throw new Error(`Unknown August 20 ${family} article: ${slug}`);
  return value;
}

function source(family: Family, slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8');
  return raw
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^#[^\n]+\n+/, '')
    .replace(/^\*August 20, 2026\*\s*/, '');
}

function inlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    return match
      ? <a href={match[2]} rel="noopener noreferrer" key={index}>{match[1]}</a>
      : part;
  });
}

function blocks(text: string) {
  return text.split(/\n\n+/).filter(Boolean).map((part, index) => {
    if (part.startsWith('## ')) return <h2 key={index}>{part.slice(3)}</h2>;
    if (part.startsWith('- ')) {
      return <ul key={index}>{part.split('\n').map((line, lineIndex) => <li key={lineIndex}>{inlineLinks(line.replace(/^- /, ''))}</li>)}</ul>;
    }
    return <p key={index}>{inlineLinks(part)}</p>;
  });
}

export function getAug20Metadata(family: Family, slug: string): Metadata {
  const value = item(family, slug);
  const canonical = `${SITE}/${family}/${slug}`;
  return {
    title: value.title,
    description: value.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: value.title,
      description: value.description,
      url: canonical,
      publishedTime: PUBLISHED,
      modifiedTime: PUBLISHED,
    },
  };
}

export function renderAug20Article(family: Family, slug: string) {
  const value = item(family, slug);
  const canonical = `${SITE}/${family}/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: value.title,
    description: value.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: canonical,
    url: canonical,
    author: { '@type': 'Organization', name: 'Outsourced Service Editorial Team' },
  };

  return <><Header/><main className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/><p className="eyebrow">{family === 'research' ? 'Research' : 'Blog'}</p><h1>{value.title}</h1><p><time dateTime={PUBLISHED}>{DISPLAY_DATE}</time></p><div className="article-body">{blocks(source(family, slug))}</div></article><CTA/></main><Footer/></>;
}
