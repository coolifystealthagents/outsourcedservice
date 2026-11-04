import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/sep25-research.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("{slug:'crm-duplicate-contact-merge-authority-study'");
const end = source.indexOf("\n{slug:'contact-suppression-propagation-evidence-study'", start);
assert.ok(start >= 0 && end > start, 'CRM duplicate study must remain a distinct September 25 record');
const record = source.slice(start, end);
assert.match(record, /updated:'2026-11-04'/, 'the changed CRM study must own its modified date');
assert.match(record, /serviceHandoff:\{slug:'crm-case-administration'/, 'the CRM duplicate study must direct readers to the matching CRM case service');
assert.match(record, /label:'Philippines CRM case administration service'/, 'the handoff must name the specific service');
assert.match(record, /Identity resolution, consent interpretation, retention exceptions, legal holds, deletion, and the merge remain with authorized owners\./, 'the CRM decision boundary must remain explicit');
assert.doesNotMatch(record, /serviceHandoff:\{slug:'operations-support'/, 'the generic operations service must not remain as the CRM study handoff');
assert.match(renderer, /href=\{`\/services\/\$\{post\.serviceHandoff\.slug\}`\}/, 'the research renderer must emit typed handoff destinations');
assert.match(renderer, /dateModified:updated/, 'the research renderer must emit the record modified date');
console.log('PASS: CRM duplicate-study handoff targets the matching service and preserves its owner boundary');
