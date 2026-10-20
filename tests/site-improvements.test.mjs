import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../app/contact-us/page.tsx', import.meta.url), 'utf8');
const contactCss = readFileSync(new URL('../app/contact-us/mobile-containment.css', import.meta.url), 'utf8');
const reviews = readFileSync(new URL('../app/booking-components.tsx', import.meta.url), 'utf8');
const globalCss = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const sitemap = readFileSync(new URL('../app/sitemap.xml/route.ts', import.meta.url), 'utf8');
const services = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const enhancer = readFileSync(new URL('../app/experience-enhancer.tsx', import.meta.url), 'utf8');
const pagination = readFileSync(new URL('../app/blog/page/[page]/page.tsx', import.meta.url), 'utf8');
const legalPages = ['privacy','terms','cancellation-policy'].map((slug) => readFileSync(new URL(`../app/${slug}/page.tsx`, import.meta.url), 'utf8'));

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

test('homepage renders the approved 12-review rail without duplicate DOM copies', () => {
  assert.match(home, /<TestimonialsRail\s*\/>/);
  assert.equal((reviews.match(/\{id:/g) || []).length, 12);
  assert.match(reviews, /reviews\.map/);
  assert.doesNotMatch(reviews, /\.\.\.reviews|concat\(reviews|stealthAgentsReviews\.map[\s\S]*stealthAgentsReviews\.map/);
});

test('review motion pauses for interaction and honors reduced motion', () => {
  assert.match(reviews, /onMouseEnter=\{\(\)=>setPaused\(true\)\}/);
  assert.match(reviews, /onFocus=\{\(\)=>setPaused\(true\)\}/);
  assert.match(reviews, /prefers-reduced-motion: reduce/);
  assert.match(globalCss, /\.review-rail-track\.is-sliding/);
});

test('sitewide release includes global organization schema and sitemap deduplication', () => {
  assert.match(layout, /'@type':'Organization'/);
  assert.match(layout, /parentOrganization/);
  assert.match(sitemap, /Array\.from\(new Set\(/);
});

test('every generic service seed has a route-specific content override', () => {
  const expected = ['ticket-queue-management','order-status-support','returns-administration','customer-onboarding-support','knowledge-base-maintenance','service-quality-audits','appointment-coordination','crm-case-administration','subscription-support','escalation-coordination'];
  for (const slug of expected) assert.match(services, new RegExp(`'${slug}': \\{summary:`));
  assert.match(services, /fleetServiceSeed\.map/);
});

test('article sidebar is sticky on desktop and collapsible on smaller screens', () => {
  assert.match(enhancer, /matchMedia\('\(min-width:1101px\)'\)/);
  assert.match(enhancer, /<details open=\{tocOpen\}/);
  assert.match(globalCss, /\.editorial-tools\{position:fixed/);
});

test('all sitemap index families declare route-specific canonical metadata', () => {
  for (const page of legalPages) assert.match(page, /alternates:\s*\{\s*canonical:/);
  assert.match(pagination, /generateMetadata/);
  assert.match(pagination, /Blog - Page \$\{n\}/);
  assert.match(pagination, /n === 1 \? 'https:\/\/outsourcedservice\.com\/blog'/);
  assert.match(pagination, /`https:\/\/outsourcedservice\.com\/blog\/page\/\$\{n\}`/);
});
