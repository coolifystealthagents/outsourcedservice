const fs = require('node:fs');
const path = require('node:path');

const fail = (message) => { throw new Error(message); };
const requireText = (text, needle, context) => {
  if (!text.includes(needle)) fail(`${context}: missing ${JSON.stringify(needle)}`);
};

const source = fs.readFileSync(path.join(process.cwd(), 'app/fleet-content.ts'), 'utf8');
const start = source.indexOf("slug: 'philippines-document-version-research'");
const end = source.indexOf('\n  },\n];', start);
if (start < 0 || end < 0 || end <= start) fail('document-version source record boundaries are invalid');
const record = source.slice(start, end);
requireText(record, "updated: '2026-09-18'", 'document-version record');
requireText(record, "serviceHandoff: {slug: 'admin-support'", 'document-version record');
requireText(record, "label: 'Philippines admin support service guide'", 'document-version record');
requireText(record, 'The owner still approves document wording, retention exceptions, and release.', 'document-version record');
if (/specialist[^.]{0,100}(approves|releases|decides)\b/i.test(record)) {
  fail('document-version record assigns an owner decision to the specialist');
}

if (process.env.CHECK_BUILT_ARTIFACTS !== '1') {
  console.log('PASS: document-version source handoff and owner boundary');
  process.exit(0);
}

const artifact = path.join(process.cwd(), '.next/server/app/research/philippines-document-version-research.html');
if (!fs.existsSync(artifact)) fail(`missing built route artifact: ${artifact}`);
const html = fs.readFileSync(artifact, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
if (!main) fail('built document-version artifact has no route-local main');
requireText(main, '<h1>Philippines document support: version and approval controls</h1>', 'built document-version main');
requireText(main, '<h2>Plan this support lane</h2>', 'built document-version main');
requireText(main, 'href="/services/admin-support"', 'built document-version main');
requireText(main, 'The owner still approves document wording, retention exceptions, and release.', 'built document-version main');
const hrefCount = (main.match(/href="\/services\/admin-support"/g) || []).length;
if (hrefCount !== 1) fail(`built document-version main has ${hrefCount} admin-support handoffs; expected one`);

const decode = (value) => value.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(decode(match[1])));
const flatten = (node, output = []) => {
  if (Array.isArray(node)) node.forEach((item) => flatten(item, output));
  else if (node && typeof node === 'object') {
    output.push(node);
    if (node['@graph']) flatten(node['@graph'], output);
    if (node.mainEntity) flatten(node.mainEntity, output);
  }
  return output;
};
const article = scripts.flatMap((script) => flatten(script)).find((node) => node['@type'] === 'Article' && node['@id'] === 'https://outsourcedservice.com/research/philippines-document-version-research#article');
if (!article) fail('built document-version artifact has no route-owned Article JSON-LD node');
if (article.datePublished !== '2026-08-12' || article.dateModified !== '2026-09-18') fail('built document-version Article dates do not preserve publication and refresh modification');
if (!html.includes('<meta property="article:modified_time" content="2026-09-18"')) fail('built document-version artifact lacks refreshed Open Graph modified time');
console.log('PASS: document-version source handoff, route-local artifact, Article dates, and Open Graph freshness');
