import { FeaturedComparison } from './FeaturedComparison';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../components';
import { blogPosts, generatedBlogPosts, batchBlogPosts, august13BlogPosts, august14BlogPosts, august17BlogPosts } from '../data';
import aug20Meta from '../aug20-meta.json';
import aug21Meta from '../aug21-meta.json';
import { august23BlogPosts } from '../aug23-content';

const PAGE_SIZE = 20;

export function BlogListing({ page = 1 }: { page?: number }) {
  
  const august21BlogPosts = Object.entries(aug21Meta)
    .filter(([, item]) => item.family === 'blog')
    .map(([slug, item]) => ({ slug, title: item.title, excerpt: item.description, minutes: 11 }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const august20BlogPosts = Object.entries(aug20Meta)
    .filter(([, item]) => item.family === 'blog')
    .map(([slug, item]) => ({ slug, title: item.title, excerpt: item.description, minutes: 11 }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const datedBatchPosts = batchBlogPosts.filter((item) => 'date' in item).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  const legacyBatchPosts = batchBlogPosts.filter((item) => !('date' in item));
  const september8Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-08');
  const september10Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-10');
  const september11Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-11');
  const september9Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-09');
  const september7Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-07');
  const september4Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-04');
  const september3Posts = blogPosts.filter((item) => "published" in item && item.published === "2026-09-03");
  const september2Posts = blogPosts.filter((item) => "published" in item && item.published === "2026-09-02");
  const september1Posts = blogPosts.filter((item) => "published" in item && item.published === "2026-09-01");
  const earlierBlogPosts = blogPosts.filter((item) => !("published" in item && (item.published === "2026-09-01" || item.published === "2026-09-02" || item.published === "2026-09-03" || item.published === "2026-09-04" || item.published === "2026-09-07" || item.published === "2026-09-08" || item.published === "2026-09-09" || item.published === "2026-09-10" || item.published === "2026-09-11")));
  const posts = [
    ...september11Posts,
    ...september10Posts,
    ...september9Posts,
    ...september8Posts,
    ...september7Posts,
    ...september4Posts,
    ...september3Posts,
    ...september2Posts,
    ...september1Posts,
    ...august23BlogPosts,
    ...august21BlogPosts,
    ...august20BlogPosts,
    ...august17BlogPosts.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, minutes: 11 })),
    ...august14BlogPosts.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, minutes: 11 })),
    ...august13BlogPosts.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, minutes: 11 })),
    ...datedBatchPosts.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, minutes: 10 })),
    ...legacyBatchPosts.map((item) => ({ slug: item.slug, title: item.title, excerpt: item.excerpt, minutes: 10 })),
    ...generatedBlogPosts.map((item) => ({ slug: item[0], title: item[1], excerpt: item[2], minutes: item[3] })),
    ...earlierBlogPosts,
  ];
  const total = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  if (page < 1 || page > total) notFound();
  const visible = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  return <><Header/><main className="fleet-main"><section className="fleet-hero"><div className="container"><p className="eyebrow">Blog</p><h1>Practical guides for Philippines-based staffing</h1><p className="lead">Browse role-planning, onboarding, access, and operating guides for teams working with specialists in the Philippines.</p></div></section><section className="section"><div className="container"><div className="fleet-card-grid">{visible.map((p) => <a className="fleet-card" href={`/blog/${p.slug}`} key={p.slug}><h2>{p.title}</h2><p>{p.excerpt}</p><b>{p.minutes} min read</b></a>)}</div><nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, i) => i + 1).map((n) => <a className={n === page ? 'active' : ''} aria-current={n === page ? 'page' : undefined} href={n === 1 ? '/blog' : `/blog/page/${n}`} key={n}>{n}</a>)}</nav></div></section>{page === 2 && <FeaturedComparison />}</main><Footer/></>;
}

export { PAGE_SIZE };
