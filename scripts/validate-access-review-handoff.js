const fs = require('node:fs');
const path = require('node:path');

const fail = (message) => { throw new Error(message); };
const requireText = (text, needle, context) => {
  if (!text.includes(needle)) fail(`${context}: missing ${JSON.stringify(needle)}`);
};

const source = fs.readFileSync(path.join(process.cwd(), 'app/fleet-content.ts'), 'utf8');
const start = source.indexOf("slug: 'philippines-access-review-support-research'");
const end = source.indexOf("slug: 'philippines-client-report-source-research'", start);
if (start < 0 || end < 0 || end <= start) fail('access-review source record boundaries are invalid');
const record = source.slice(start, end);
requireText(record, "updated: '2026-09-08'", 'access-review record');
requireText(record, "serviceHandoff: {slug: 'operations-support'", 'access-review record');
requireText(record, "label: 'Philippines operations support service guide'", 'access-review record');
requireText(record, 'The account owner still decides who keeps, changes, or loses access.', 'access-review record');
if (/support specialist can[^.]{0,100}(approve|change|remove) access/i.test(record)) {
  fail('access-review record assigns an access decision to the support specialist');
}

if (process.env.CHECK_BUILT_ARTIFACTS !== '1') {
  console.log('PASS: access-review source handoff and owner boundary');
  process.exit(0);
}

const artifact = path.join(process.cwd(), '.next/server/app/research/philippines-access-review-support-research.html');
if (!fs.existsSync(artifact)) fail(`missing built route artifact: ${artifact}`);
const html = fs.readFileSync(artifact, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
if (!main) fail('built access-review artifact has no route-local main');
requireText(main, '<h1>Philippines operations support: access-review evidence</h1>', 'built access-review main');
requireText(main, '<h2>Plan this support lane</h2>', 'built access-review main');
requireText(main, 'href="/services/operations-support"', 'built access-review main');
requireText(main, 'The account owner still decides who keeps, changes, or loses access.', 'built access-review main');
const hrefCount = (main.match(/href="\/services\/operations-support"/g) || []).length;
if (hrefCount !== 1) fail(`built access-review main has ${hrefCount} operations-support handoffs; expected one`);

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
const article = scripts.flatMap((script) => flatten(script)).find((node) => node['@type'] === 'Article' && node['@id'] === 'https://outsourcedservice.com/research/philippines-access-review-support-research#article');
if (!article) fail('built access-review artifact has no route-owned Article JSON-LD node');
if (article.datePublished !== '2026-08-12' || article.dateModified !== '2026-09-08') fail('built access-review Article dates do not preserve publication and refresh modification');
if (!html.includes('<meta property="article:modified_time" content="2026-09-08"')) fail('built access-review artifact lacks refreshed Open Graph modified time');
console.log('PASS: access-review source handoff, route-local artifact, Article dates, and Open Graph freshness');
