import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const source = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("['philippines-crm-case-administration-research'");
const end = source.indexOf('\n  ],', start);
assert.ok(start >= 0 && end > start, 'CRM research record must remain in the route-owned topic inventory');
const record = source.slice(start, end);
assert.match(record, /slug:'crm-case-administration'/, 'CRM research must use the matching service pillar');
assert.match(record, /label:'Philippines CRM case administration service'/, 'CRM handoff needs a specific reader-facing destination');
assert.match(record, /The account owner keeps access, customer-change, policy-exception, and final case-outcome decisions\./, 'CRM handoff must retain the owner boundary');
assert.match(source, /'philippines-crm-case-administration-research': '2026-10-24'/, 'CRM research must own its refreshed modified date');
assert.match(source, /serviceHandoff: serviceHandoff \?\? legacyResearchServiceHandoffs\[slug\]/, 'route-owned handoffs must precede legacy fallback data');
assert.match(renderer, /href=\{`\/services\/\$\{post\.serviceHandoff\.slug\}`\}/, 'generic renderer must emit the typed handoff href');
assert.match(renderer, /dateModified:updated/, 'generic renderer must emit the selected modified date');
console.log('PASS: CRM case administration research handoff is typed, bounded, and freshness-owned');