const fs = require('node:fs');
const cp = require('node:child_process');

const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
if (manifest.entries.length < manifest.minimum) throw new Error('manifest count below minimum');
if (manifest.entries.length !== 12) throw new Error('frozen batch count changed');
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug) || !entry.route.startsWith('/research/')) throw new Error(`invalid route or duplicate: ${entry.slug}`);
  seen.add(entry.slug);
  if (!fs.existsSync(entry.sourcePath) || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`invalid source record/date: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`)) throw new Error(`missing source slug: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}': '2026-08-10'`)) throw new Error(`missing explicit source date: ${entry.slug}`);
  const parent = cp.execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], {encoding:'utf8'});
  const introduced = cp.execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], {encoding:'utf8'});
  if (parent.includes(`'${entry.slug}'`) || !introduced.includes(`'${entry.slug}'`)) throw new Error(`provenance failed: ${entry.slug}`);
  if (!route.includes('datePublished:post.published') || !route.includes('post.published') || !route.includes('Philippines staffing research · {post.published}')) throw new Error(`render route date wiring missing: ${entry.slug}`);
  if (!route.includes('alternates:{canonical:`https://outsourcedservice.com/research/${post.slug}`}')) throw new Error(`canonical wiring missing: ${entry.slug}`);
  if (!sitemap.includes('researchPosts.map')) throw new Error('research sitemap wiring missing');
}
if (!source.includes(')).sort((a, b) => b.published.localeCompare(a.published))')) throw new Error('research index is not newest-first');
const builtRoot = '.next/server/app/research';
for (const entry of manifest.entries) {
  const files = fs.existsSync(builtRoot) ? cp.execFileSync('find', [builtRoot, '-type', 'f', '-name', '*.html'], {encoding:'utf8'}).trim().split('\n').filter(Boolean) : [];
  const html = files.map((file) => fs.readFileSync(file, 'utf8')).find((text) => text.includes(entry.slug));
  if (!html || !html.includes('2026-08-10') || !html.includes(`https://outsourcedservice.com${entry.route}`) || !html.includes(`canonical" href="https://outsourcedservice.com${entry.route}`) || !html.includes('application/ld+json')) throw new Error(`built date/canonical missing: ${entry.slug}`);
}
console.log(`PASS: ${manifest.entries.length} research entries, provenance, source/rendered dates, canonical sitemap wiring, and newest-first index validated`);
