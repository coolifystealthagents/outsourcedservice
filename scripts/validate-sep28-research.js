const fs=require('node:fs');
const slugs=['ticket-priority-override-traceability-study','support-attachment-safe-routing-study','recurring-task-omission-detection-study','spreadsheet-formula-change-lineage-study','cross-time-zone-handoff-boundary-study'];
const source=fs.readFileSync('app/sep28-research.ts','utf8');
const fleet=fs.readFileSync('app/fleet-content.ts','utf8');
const route=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
if(slugs.length!==5||new Set(slugs).size!==5)throw new Error('batch must contain exactly five unique slugs');
if(!source.includes("const published='2026-09-28'"))throw new Error('cycle publication date missing');
if(!fleet.includes('...september28ResearchPosts'))throw new Error('September 28 batch missing from Research index');
if(!route.includes('datePublished:post.published')||!route.includes('dateTime={post.published}')||!route.includes('alternates:{canonical:'))throw new Error('date or canonical route wiring missing');
if(!sitemap.includes('researchPosts.map'))throw new Error('sitemap wiring missing');
for(const slug of slugs){if(!source.includes(`slug:'${slug}'`))throw new Error('missing '+slug);}
const words=text=>text.toLowerCase().replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z#0-9]+;/g,' ').replace(/[^a-z0-9'-]+/g,' ').trim().split(/\s+/).filter(Boolean);
const shingles=tokens=>{const out=new Set();for(let i=0;i<=tokens.length-5;i++)out.add(tokens.slice(i,i+5).join(' '));return out};
const overlap=(a,b)=>{let n=0;for(const x of a)if(b.has(x))n++;return n/(a.size+b.size-n)};
if(process.env.CHECK_BUILT_ARTIFACTS==='1'){
 const audits=[];
 for(const slug of slugs){
  const p=`.next/server/app/research/${slug}.html`;const html=fs.readFileSync(p,'utf8');
  if(!html.includes('2026-09-28')||!html.includes(`https://outsourcedservice.com/research/${slug}`)||!html.includes('application/ld+json'))throw new Error('invalid built artifact '+slug);
  const start=html.indexOf('<p><strong>Headline metric:</strong>');const end=html.indexOf('<section aria-label="Plan this support lane">',start);
  if(start<0||end<0)throw new Error('cannot isolate rendered substantive body '+slug);
  const tokens=words(html.slice(start,end));if(tokens.length<1200)throw new Error(`under 1200 body-only words ${slug}: ${tokens.length}`);
  audits.push({slug,words:tokens.length,shingles:shingles(tokens)});
 }
 let maximum={value:0,pair:''};
 for(let i=0;i<audits.length;i++)for(let j=i+1;j<audits.length;j++){const value=overlap(audits[i].shingles,audits[j].shingles);if(value>maximum.value)maximum={value,pair:`${audits[i].slug} <> ${audits[j].slug}`};}
 for(const a of audits)console.log(`BODY_WORDS ${a.slug} ${a.words}`);
 console.log(`MAX_5_SHINGLE_JACCARD ${(maximum.value*100).toFixed(2)}% ${maximum.pair}`);
 if(maximum.value>=0.5)throw new Error('pairwise five-word-shingle overlap must remain below 50%');
}
console.log('PASS: exactly 5 unique September 28 Research articles; index, sitemap, dates, canonicals, and structured data wired'+(process.env.CHECK_BUILT_ARTIFACTS==='1'?' with body-only depth and overlap audited':''));
