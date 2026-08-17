import { fleetServices, researchPosts } from '../fleet-content';
import { blogPosts, generatedBlogPosts, batchBlogPosts, august13BlogPosts, august14BlogPosts, august17BlogPosts } from '../data';

const base = 'https://outsourcedservice.com';

export async function GET() {
  const pages = ['/', '/services', '/blog', '/blog/top-50-outsourced-service-companies', '/research', '/contact', '/privacy', '/terms', '/cancellation-policy'];
  const allBlog = [...august17BlogPosts, ...august14BlogPosts, ...august13BlogPosts, ...blogPosts, ...generatedBlogPosts.map((item) => ({ slug: item[0] })), ...batchBlogPosts.map((item) => ({ slug: item.slug }))];
  const blogPages = Array.from({ length: Math.max(1, Math.ceil(allBlog.length / 20)) }, (_, i) => i + 1).filter((n) => n > 1).map((n) => `/blog/page/${n}`);
  const urls = [...pages, ...fleetServices.map((s) => `/services/${s.slug}`), ...allBlog.map((p) => `/blog/${p.slug}`), ...blogPages, ...researchPosts.map((p) => `/research/${p.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((x) => `<url><loc>${x === '/' ? base : `${base}${x}`}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
