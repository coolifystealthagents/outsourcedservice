import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const handoffs = source.slice(
  source.indexOf('const legacyResearchServiceHandoffs'),
  source.indexOf('const researchSources'),
);
const updatedDates = source.slice(
  source.indexOf('const legacyResearchUpdatedDates'),
  source.indexOf('// August 11, 2026'),
);

assert.match(handoffs, /'philippines-appointment-scheduling-research': \{[\s\S]*slug: 'appointment-coordination'/, 'appointment scheduling has a typed service handoff');
assert.match(handoffs, /label: 'Philippines appointment coordination service'/, 'uses a specific reader-facing destination');
assert.match(handoffs, /keeps time zones, approved availability, and change notes clear/, 'states the planning use');
assert.match(updatedDates, /'philippines-appointment-scheduling-research': '2026-10-16'/, 'refreshes only the changed record');
assert.doesNotMatch(handoffs.match(/'philippines-appointment-scheduling-research':[\s\S]*?\n  \},/)?.[0] ?? '', /customer-support|admin-support|operations-support/, 'does not send calendar planning to a generic service');

console.log('PASS: appointment-scheduling research handoff uses the specific service and preserves owner boundaries');
