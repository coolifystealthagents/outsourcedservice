const fs = require('fs');
const cp = require('child_process');
const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const rendered = fs.readFileSync('app/blog/generated-article.tsx', 'utf8');
const listing = fs.readFileSync('app/blog/blog-listing.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const introducingCommit = '7a9162186868cd23c9877b5ddb9da33e67dbccb3';
const before = cp.execFileSync('git', ['show', `${introducingCommit}^:app/data.ts`], { encoding: 'utf8' });
const after = cp.execFileSync('git', ['show', `${introducingCommit}:app/data.ts`], { encoding: 'utf8' });
if (manifest.entries.length < manifest.minimum) throw new Error('accepted count below minimum');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== manifest.entries.length) throw new Error('duplicate slug');
for (const entry of manifest.entries) {
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) throw new Error(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || !source.includes(`slug: '${entry.slug}'`)) throw new Error(`missing source: ${entry.slug}`);
  if (before.includes(`slug: '${entry.slug}'`) || !after.includes(`slug: '${entry.slug}'`)) throw new Error(`bad absent-before/present-after provenance: ${entry.slug}`);
  if (entry.sourceDate !== '2026-08-10' || entry.sourceDateField !== 'blogPublicationDate') throw new Error(`bad source date: ${entry.slug}`);
  if (entry.renderedDate !== '2026-08-10' || !entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`bad rendered date: ${entry.slug}`);
  if (entry.provenance !== 'original-aug10-batch' || entry.introducedByCommit !== '7a9162186868cd23c9877b5ddb9da33e67dbccb3') throw new Error(`bad provenance: ${entry.slug}`);
}
if (!source.includes("export const blogPublicationDate = '2026-08-10'")) throw new Error('authoritative date missing');
if (!rendered.includes('datePublished: batch ? blogPublicationDate')) throw new Error('JSON-LD date missing');
if (!rendered.includes('<time dateTime={blogPublicationDate}>')) throw new Error('visible date missing');
if (!listing.includes('...batchBlogPosts.map')) throw new Error('index is not newest-first');
if (!sitemap.includes('...batchBlogPosts.map')) throw new Error('batch is not sitemap-eligible');
console.log(`PASS: ${manifest.entries.length} blog entries, routes, source dates, rendered dates, provenance, and newest-first index`);
