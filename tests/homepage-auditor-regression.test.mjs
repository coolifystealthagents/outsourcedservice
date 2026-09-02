import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const formatterUrl = new URL('../app/homepage-copy.ts', import.meta.url);

test('homepage images have useful alt text and one H1', () => {
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(page, /alt=["']\s*["']/);
  assert.doesNotMatch(chrome, /alt=["']\s*["']/);
});

test('homepage field-guide titles use a readable separator instead of long dashes', async () => {
  assert.ok(existsSync(formatterUrl), 'missing homepage title formatter');
  const { formatHomepageArticleTitle } = await import(formatterUrl.href);
  const result = formatHomepageArticleTitle('A Monday Priority Brief — September 1 Field Guide');
  assert.equal(result, 'A Monday Priority Brief: September 1 Field Guide');
  assert.doesNotMatch(result, /—/);
  assert.equal(formatHomepageArticleTitle('A title without a long dash'), 'A title without a long dash');
});
