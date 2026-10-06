import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const route = readFileSync(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');

test('October 5 blog records are generated and receive record-owned metadata', () => {
  assert.match(route, /generateStaticParams\(\)[\s\S]*october5BlogDrafts\.map\(\(item\) => \(\{ slug: item\.slug \}\)\)/);
  assert.match(route, /const october5 = october5BlogDrafts\.find\(\(item\) => item\.slug === slug\);/);
  assert.match(route, /october5\?\.title/);
  assert.match(route, /october5\?\.excerpt/);
});