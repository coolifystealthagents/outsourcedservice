const fs=require('node:fs');
const cp=require('node:child_process');
const source=fs.readFileSync('app/sep24-research.ts','utf8');
const fleet=fs.readFileSync('app/fleet-content.ts','utf8');
const route=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const slugs=["customer-address-change-verification-evidence-study","inventory-discrepancy-recount-evidence-study","product-catalog-source-conflict-study","customer-support-macro-policy-lineage-study","customer-complaint-taxonomy-reviewer-agreement-study"];
if(slugs.length!==5||new Set(slugs).size!==5)throw new Error('batch must contain exactly five unique slugs');
if(!source.includes("const published='2026-09-24'"))throw new Error('publication date missing');
if(!fleet.includes('...september24ResearchPosts'))throw new Error('batch missing from Research index');
if(!route.includes('datePublished:post.published')||!route.includes('dateTime={post.published}')||!route.includes('alternates:{canonical:'))throw new Error('date or canonical route wiring missing');
if(!sitemap.includes('researchPosts.map'))throw new Error('sitemap wiring missing');
for(const slug of slugs){if(!source.includes(slug))throw new Error('missing '+slug);}
if(process.env.CHECK_BUILT_ARTIFACTS==='1'){for(const slug of slugs){const p='.next/server/app/research/'+slug+'.html';const h=fs.readFileSync(p,'utf8');if(!h.includes('2026-09-24')||!h.includes('https://outsourcedservice.com/research/'+slug)||!h.includes('application/ld+json'))throw new Error('invalid built artifact '+slug);const text=h.replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');if(text.trim().split(/\s+/).length<1200)throw new Error('under 1200 rendered words '+slug);}}
console.log('PASS: 5 unique September 24 Research articles, date, canonical, index, sitemap, structured data, and substantive length validated'+(process.env.CHECK_BUILT_ARTIFACTS==='1'?' with built artifacts':''));
