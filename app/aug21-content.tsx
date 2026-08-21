import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import meta from './aug21-meta.json';

const SITE = 'https://outsourcedservice.com';
const PUBLISHED = '2026-08-21';
const DISPLAY_DATE = 'August 21, 2026';

type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };

function item(slug: string): Item {
  const value = (meta as Record<string, Item>)[slug];
  if (!value) throw new Error(`Unknown August 21 article: ${slug}`);
  return value;
}

function source(family: Family, slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8');
  return raw
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^#[^\n]+\n+/, '')
    .replace(/^\*August 21, 2026\*\s*/, '');
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
    if (part.startsWith('- ')) return <ul key={index}>{part.split('\n').map((x, j) => <li key={j}>{inlineLinks(x.replace(/^- /, ''))}</li>)}</ul>;
    return <p key={index}>{inlineLinks(part)}</p>;
  });
}

export function getAug21Metadata(family: Family, slug: string): Metadata {
  const x = item(slug);
  return {
    title: x.title,
    description: x.description,
    alternates: { canonical: `/${family}/${slug}` },
    openGraph: {
      title: x.title,
      description: x.description,
      url: `${SITE}/${family}/${slug}`,
      images: [x.hero],
    },
  };
}

export function renderAug21Article(family: Family, slug: string) {
  const x = item(slug);
  const canonical = `${SITE}/${family}/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    headline: x.title,
    description: x.description,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: canonical,
    image: `${SITE}${x.hero}`,
    author: { '@type': 'Organization', name: 'OutsourcedService.com', url: SITE },
    publisher: { '@type': 'Organization', name: 'OutsourcedService.com', url: SITE }
  };
  return (
    <>
      <Header />
      <main className="article-shell">
        <article>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          <p className="eyebrow">{family === 'research' ? 'Research' : 'Blog'}</p>
          <h1>{x.title}</h1>
          <p><time dateTime={PUBLISHED}>{DISPLAY_DATE}</time></p>
          <img src={x.hero} alt={`${x.title} editorial illustration`} width="1536" height="1024" style={{ width: '100%', height: 'auto', borderRadius: '18px' }} />
          <div className="article-body">{blocks(source(family, slug))}</div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
