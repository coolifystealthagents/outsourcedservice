import aug19Meta from '../aug19-meta.json';import aug20Meta from '../aug20-meta.json';
import aug21Meta from '../aug21-meta.json';import { fleetServices, researchPosts } from '../fleet-content';
import { blogPosts, generatedBlogPosts, batchBlogPosts, august13BlogPosts, august14BlogPosts, august17BlogPosts } from '../data';

const base = 'https://outsourcedservice.com';

export async function GET() {
  const pages = ['/', '/services', '/blog', '/blog/top-50-outsourced-service-companies', '/research', '/contact', '/privacy', '/terms', '/cancellation-policy'];
    const aug21Entries = Object.entries(aug21Meta).sort(([slugA], [slugB]) => slugA.localeCompare(slugB));
  const aug21Blog = aug21Entries.filter(([, item]) => item.family === 'blog').map(([slug]) => ({ slug }));
  const aug21Research = aug21Entries.filter(([, item]) => item.family === 'research').map(([slug]) => ({ slug }));
  const aug20Entries = Object.entries(aug20Meta).sort(([slugA], [slugB]) => slugA.localeCompare(slugB));
  const aug20Blog = aug20Entries.filter(([, item]) => item.family === 'blog').map(([slug]) => ({ slug }));
  const aug20Research = aug20Entries.filter(([, item]) => item.family === 'research').map(([slug]) => ({ slug }));
  const allBlog = [...aug21Blog, ...aug20Blog, ...august17BlogPosts, ...august14BlogPosts, ...august13BlogPosts, ...blogPosts, ...generatedBlogPosts.map((item) => ({ slug: item[0] })), ...batchBlogPosts.map((item) => ({ slug: item.slug }))];
  const blogPages = Array.from({ length: Math.max(1, Math.ceil(allBlog.length / 20)) }, (_, i) => i + 1).filter((n) => n > 1).map((n) => `/blog/page/${n}`);
  const aug19Paths = Object.entries(aug19Meta).map(([slug, value]) => `/${(value as { family: string }).family}/${slug}`);
  const urls = [...pages, ...fleetServices.map((s) => `/services/${s.slug}`), ...allBlog.map((p) => `/blog/${p.slug}`), ...blogPages, ...aug21Research.map((p) => `/research/${p.slug}`), ...aug20Research.map((p) => `/research/${p.slug}`), ...researchPosts.map((p) => `/research/${p.slug}`), ...aug19Paths];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((x) => `<url><loc>${x === '/' ? base : `${base}${x}`}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
