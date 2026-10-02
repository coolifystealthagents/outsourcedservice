const fs = require('node:fs');
const path = require('node:path');

const fail = (message) => { throw new Error(message); };
const requireText = (text, needle, context) => {
  if (!text.includes(needle)) fail(`${context}: missing ${JSON.stringify(needle)}`);
};

const source = fs.readFileSync(path.join(process.cwd(), 'app/august14-research.ts'), 'utf8');
const start = source.indexOf("make('philippines-order-status-evidence-research'");
const end = source.indexOf("make('philippines-onboarding-readiness-evidence-research'", start);
if (start < 0 || end < 0 || end <= start) fail('order-status source record boundaries are invalid');
const record = source.slice(start, end);
requireText(record, "updated:'2026-10-02'", 'order-status record');
requireText(record, "serviceHandoff:{slug:'order-status-support'", 'order-status record');
requireText(record, "label:'Philippines order-status support service'", 'order-status record');
requireText(record, 'The order owner still decides commitments, compensation, and exceptions', 'order-status record');
if (/support (?:lane|specialist)[^.]{0,120}\b(approves|decides|commits|compensates)\b/i.test(record)) {
  fail('order-status record assigns an owner decision to the support lane');
}

if (process.env.CHECK_BUILT_ARTIFACTS !== '1') {
  console.log('PASS: order-status source handoff and owner boundary');
  process.exit(0);
}

const artifact = path.join(process.cwd(), '.next/server/app/research/philippines-order-status-evidence-research.html');
if (!fs.existsSync(artifact)) fail(`missing built route artifact: ${artifact}`);
const html = fs.readFileSync(artifact, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
if (!main) fail('built order-status artifact has no route-local main');
requireText(main, '<h1>Philippines order-status support: evidence and aging research</h1>', 'built order-status main');
requireText(main, '<h2>Plan this support lane</h2>', 'built order-status main');
requireText(main, 'href="/services/order-status-support"', 'built order-status main');
requireText(main, 'The order owner still decides commitments, compensation, and exceptions', 'built order-status main');
const hrefCount = (main.match(/href="\/services\/order-status-support"/g) || []).length;
if (hrefCount !== 1) fail(`built order-status main has ${hrefCount} order-status handoffs; expected one`);

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
const url = 'https://outsourcedservice.com/research/philippines-order-status-evidence-research';
const article = scripts.flatMap((script) => flatten(script)).find((node) => node['@type'] === 'Article' && node['@id'] === `${url}#article`);
if (!article) fail('built order-status artifact has no route-owned Article JSON-LD node');
if (article.datePublished !== '2026-08-14' || article.dateModified !== '2026-10-02') fail('built order-status Article dates do not preserve publication and refresh modification');
if (!html.includes('<link rel="canonical" href="https://outsourcedservice.com/research/philippines-order-status-evidence-research"')) fail('built order-status artifact lacks the self-canonical link');
if (!html.includes('<meta property="article:modified_time" content="2026-10-02"')) fail('built order-status artifact lacks refreshed Open Graph modified time');
const sitemap = path.join(process.cwd(), '.next/server/app/sitemap.xml.body');
if (!fs.existsSync(sitemap)) fail(`missing built sitemap artifact: ${sitemap}`);
requireText(fs.readFileSync(sitemap, 'utf8'), `<loc>${url}</loc>`, 'built sitemap');
console.log('PASS: order-status source handoff, route-local artifact, Article dates, Open Graph freshness, and sitemap location');
