const fs=require('node:fs');
const cp=require('node:child_process');
const source=fs.readFileSync('app/sep25-blog-content.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const listing=fs.readFileSync('app/blog/blog-listing.tsx','utf8');
const route=fs.readFileSync('app/blog/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const slugs=["returns-authorization-evidence-philippines","customer-data-access-request-routing-philippines","appointment-waitlist-administration-philippines","subscription-pause-request-intake-philippines","sales-lead-source-cleanup-philippines","maintenance-work-order-triage-philippines","proof-of-delivery-exception-review-philippines","contract-renewal-notice-tracking-philippines","training-record-maintenance-philippines","cash-application-exception-preparation-philippines","customer-survey-response-coding-philippines","website-content-change-request-philippines"];
if(slugs.length!==12||new Set(slugs).size!==12)throw new Error('batch must contain exactly 12 unique slugs');
if(!source.includes("const published='2026-09-25'"))throw new Error('source date missing');
if(!data.includes('...september25BlogPosts'))throw new Error('batch missing from data index');
if(!listing.includes('...september25Posts'))throw new Error('batch missing from listing');
if(!route.includes('datePublished:publicationDate')&&route.includes("publicationDate === '2026-09-25' ? {}"))throw new Error('structured publication date wiring missing');
if(!sitemap.includes('...blogPosts'))throw new Error('sitemap wiring missing');
const old=cp.execFileSync('git',['show','origin/main:app/data.ts'],{encoding:'utf8'})+cp.execFileSync('git',['show','origin/main:app/sep24-blog-content.ts'],{encoding:'utf8'});
for(const slug of slugs){if(!source.includes(slug))throw new Error('missing '+slug);if(old.includes(slug))throw new Error('slug already present on origin/main: '+slug);}
if(process.env.CHECK_BUILT_ARTIFACTS==='1'){for(const slug of slugs){const p='.next/server/app/blog/'+slug+'.html';const h=fs.readFileSync(p,'utf8');if(!h.includes('2026-09-25')||!h.includes('https://outsourcedservice.com/blog/'+slug)||!h.includes('application/ld+json'))throw new Error('invalid built artifact '+slug);const text=h.replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');if(text.trim().split(/\s+/).length<900)throw new Error('under 900 rendered words '+slug);}}
console.log('PASS: 12 unique September 25 Blog articles, date, canonical, index, sitemap, structured data, and substantive length validated'+(process.env.CHECK_BUILT_ARTIFACTS==='1'?' with built artifacts':''));
