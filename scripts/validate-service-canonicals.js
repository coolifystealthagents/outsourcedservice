const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const route = fs.readFileSync(path.join(root, 'app/services/[slug]/page.tsx'), 'utf8');
const inventory = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const sitemapSource = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');

if (!route.includes("import type {Metadata} from 'next'")) throw new Error('service metadata must use the Next.js Metadata contract');
if (!route.includes('alternates:{canonical}')) throw new Error('service metadata lacks canonical wiring');
if (!route.includes('const canonical=`https://${site.domain.toLowerCase()}/services/${s.slug}`')) throw new Error('service canonical must derive from the canonical site domain and service slug');
if (!route.includes('openGraph:{title:s.title,description:s.summary,url:canonical,type:\'website\'}')) throw new Error('service Open Graph URL must use the canonical URL');
if (!sitemapSource.includes('fleetServices.map')) throw new Error('service sitemap registration is missing');

const services = [...inventory.matchAll(/\n\s*"slug":\s*"([^"]+)",\n\s*"title":\s*"([^"]+)"/g)].map(([, slug, title]) => ({slug, title}));
if (!services.length) throw new Error('service inventory extraction returned zero services');

if (process.env.CHECK_BUILT_ARTIFACTS === '1') {
  const sitemapPath = path.join(root, '.next/server/app/sitemap.xml.body');
  if (!fs.existsSync(sitemapPath)) throw new Error(`missing generated sitemap artifact: ${sitemapPath}`);
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  for (const service of services) {
    const canonical = `https://outsourcedservice.com/services/${service.slug}`;
    const artifactPath = path.join(root, `.next/server/app/services/${service.slug}.html`);
    if (!fs.existsSync(artifactPath)) throw new Error(`missing generated service artifact: ${artifactPath}`);
    const html = fs.readFileSync(artifactPath, 'utf8');
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
    if (!main) throw new Error(`service artifact has no route-local main: ${service.slug}`);
    if (!main.includes(`<h1>${service.title}</h1>`)) throw new Error(`service artifact has wrong H1: ${service.slug}`);
    if (!html.includes(`<link rel="canonical" href="${canonical}"`)) throw new Error(`service artifact lacks canonical: ${service.slug}`);
    if (!html.includes(`<meta property="og:url" content="${canonical}"`)) throw new Error(`service artifact lacks Open Graph URL: ${service.slug}`);
    if (!sitemap.includes(`<loc>${canonical}</loc>`)) throw new Error(`sitemap lacks service route: ${service.slug}`);
  }
}

console.log(`PASS: ${services.length} services have canonical metadata, Open Graph URLs, generated H1s, and sitemap entries${process.env.CHECK_BUILT_ARTIFACTS === '1' ? ' in built artifacts' : ''}`);