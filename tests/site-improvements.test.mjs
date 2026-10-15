import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../app/contact-us/page.tsx', import.meta.url), 'utf8');
const contactCss = readFileSync(new URL('../app/contact-us/mobile-containment.css', import.meta.url), 'utf8');

const poweredLink = /Powered by\s*<a[^>]+href=["']https:\/\/stealthagents\.com\/["'][^>]*>StealthAgents<\/a>/g;

test('global chrome displays linked StealthAgents attribution below the logo and in the footer', () => {
  assert.match(chrome, /className=["']brand-lockup["'][\s\S]*?<LogoMark\s*\/>[\s\S]*?Powered by/);
  assert.ok((chrome.match(poweredLink) || []).length >= 2);
});

test('homepage includes a prominent non-numerical five-star trust treatment', () => {
  assert.match(home, /aria-label=["']Five-star trust signal["']/);
  assert.match(home, /\[0,\s*1,\s*2,\s*3,\s*4\]\.map/);
  assert.match(home, /className=["']hero-star-icon["']/);
  assert.doesNotMatch(home, /★★★★★/);
  assert.doesNotMatch(home, /className=["']service-number["']/);
  assert.match(home, /<ol className=["']process-list["']/);
  assert.match(home, /<li key=\{item\.step\}>/);
  assert.match(home, /serviceIcons\[index\][\s\S]*?handoff illustration/);
});

test('new contact relationship controls preserve WCAG AA text contrast colors', () => {
  assert.match(contactCss, /color:\s*#06657a\s*!important/);
  assert.match(contactCss, /background:\s*#0b667a/);
});

test('contact page has the complete Stealth Agents relationship section without unsupported claims', () => {
  assert.match(contact, /<h2[^>]*>About Stealth Agents<\/h2>/);
  assert.match(contact, poweredLink);
  assert.match(contact, /Outsourced Service is a subsidiary of Stealth Agents\./);
  assert.match(contact, /className=["']tc-about-cta["']/);
  assert.match(contact, /<img[\s\S]*?alt=["'][^"']+["']/);
  assert.doesNotMatch(contact, /over 35\+ different industries/i);
  assert.doesNotMatch(contact, /featured on Forbes/i);
});
