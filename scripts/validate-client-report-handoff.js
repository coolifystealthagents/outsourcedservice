const fs = require('node:fs');
const path = require('node:path');

const fail = (message) => { throw new Error(message); };
const requireText = (text, needle, context) => {
  if (!text.includes(needle)) fail(`${context}: missing ${JSON.stringify(needle)}`);
};

const source = fs.readFileSync(path.join(process.cwd(), 'app/fleet-content.ts'), 'utf8');
const start = source.indexOf("slug: 'philippines-client-report-source-research'");
const end = source.indexOf("slug: 'philippines-web-content-accessibility-research'", start);
if (start < 0 || end < 0 || end <= start) fail('client-report source record boundaries are invalid');
const record = source.slice(start, end);
requireText(record, "updated: '2026-09-13'", 'client-report record');
requireText(record, "serviceHandoff: {slug: 'reporting-and-qa'", 'client-report record');
requireText(record, "label: 'Philippines reporting and QA service'", 'client-report record');
requireText(record, 'The client owner still approves the interpretation and release.', 'client-report record');
if (/specialist[^.]{0,100}(approves|releases)\b/i.test(record)) {
  fail('client-report record assigns interpretation or release authority to the specialist');
}

if (process.env.CHECK_BUILT_ARTIFACTS !== '1') {
  console.log('PASS: client-report source handoff and owner boundary');
  process.exit(0);
}

const artifact = path.join(process.cwd(), '.next/server/app/research/philippines-client-report-source-research.html');
if (!fs.existsSync(artifact)) fail(`missing built route artifact: ${artifact}`);
const html = fs.readFileSync(artifact, 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1];
if (!main) fail('built client-report artifact has no route-local main');
requireText(main, '<h1>Philippines client reporting: source-to-summary controls</h1>', 'built client-report main');
requireText(main, '<h2>Plan this support lane</h2>', 'built client-report main');
requireText(main, 'href="/services/reporting-and-qa"', 'built client-report main');
requireText(main, 'The client owner still approves the interpretation and release.', 'built client-report main');
const hrefCount = (main.match(/href="\/services\/reporting-and-qa"/g) || []).length;
if (hrefCount !== 1) fail(`built client-report main has ${hrefCount} reporting-and-qa handoffs; expected one`);

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
const article = scripts.flatMap((script) => flatten(script)).find((node) => node['@type'] === 'Article' && node['@id'] === 'https://outsourcedservice.com/research/philippines-client-report-source-research#article');
if (!article) fail('built client-report artifact has no route-owned Article JSON-LD node');
if (article.datePublished !== '2026-08-12' || article.dateModified !== '2026-09-13') fail('built client-report Article dates do not preserve publication and refresh modification');
if (!html.includes('<meta property="article:modified_time" content="2026-09-13"')) fail('built client-report artifact lacks refreshed Open Graph modified time');
console.log('PASS: client-report source handoff, route-local artifact, Article dates, and Open Graph freshness');
