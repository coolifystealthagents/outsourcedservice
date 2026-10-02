const fs=require('fs'),crypto=require('crypto'),root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(root+'/.paperclip/daily-content/2026-10-02/research.json','utf8'));
const fail=m=>{throw new Error(m)},read=p=>fs.readFileSync(root+'/'+p,'utf8');
const words=t=>t.match(/[A-Za-z0-9][A-Za-z0-9'’-]*/g)||[];
const shingles=t=>{const w=words(t.toLowerCase()),s=new Set();for(let i=0;i+4<w.length;i++)s.add(w.slice(i,i+5).join(' '));return s};
const bodyFrom=(source,slug)=>{const match=source.match(/body:\[([\s\S]*?)\],\nfaq:/);if(!match)fail('body not found: '+slug);return [...match[1].matchAll(/`([\s\S]*?)`/g)].map(item=>item[1])};
if(manifest.requiredCount!==5||manifest.entries.length!==5)fail('Research count must be exactly five');
if(manifest.siteTimezone!=='UTC'||manifest.plannedPublicationDate!=='2026-10-02')fail('publication timing is not reconciled to repository UTC');
if(manifest.publicationDatePending!==true||manifest.status!=='staged-local-handoff')fail('handoff must remain pending live publication');
const fleet=read('app/fleet-content.ts'),route=read('app/research/[slug]/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
const seen=new Set(),bodies=[];let minimumWords=Infinity;
for(const entry of manifest.entries){
 if(seen.has(entry.slug))fail('duplicate slug: '+entry.slug);seen.add(entry.slug);
 if(!fs.existsSync(root+'/'+entry.sourcePath))fail('missing source: '+entry.sourcePath);
 const source=read(entry.sourcePath),hash=crypto.createHash('sha256').update(source).digest('hex');
 if(hash!==entry.sourceHash)fail('source hash mismatch: '+entry.slug);
 if(!source.includes('slug:"'+entry.slug+'"')||!source.includes('const published="2026-10-02"'))fail('slug/date mismatch: '+entry.slug);
 const body=bodyFrom(source,entry.slug),count=words(body.join(' ')).length;
 if(entry.bodyWordCount<1200||count<1200)fail('body below 1200 words: '+entry.slug);minimumWords=Math.min(minimumWords,count);
 const normalized=body.map(p=>p.toLowerCase().replace(/\s+/g,' ').trim());if(new Set(normalized).size!==normalized.length)fail('repeated paragraph: '+entry.slug);
 const urls=[...source.matchAll(/url:"(https:\/\/[^"]+)"/g)].map(m=>m[1]);if(urls.length<5||new Set(urls).size!==urls.length)fail('source links invalid: '+entry.slug);
 const image=source.match(/const thumbnail="([^"]+)"/)?.[1];if(!image||!fs.existsSync(root+'/public'+image))fail('image missing: '+entry.slug);
 const modulePath=entry.sourcePath.replace(/^app\//,'').replace(/\.ts$/,'');if(!fleet.includes("from './"+modulePath+"'"))fail('fleet import missing: '+entry.slug);
 bodies.push({slug:entry.slug,text:body.join(' ')});
}
if(!route.includes('datePublished:post.published')||!route.includes('alternates:{canonical:'))fail('canonical/date wiring missing');
if(!sitemap.includes('...researchPosts.map'))fail('research sitemap wiring missing');
let max=0,pair='';
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const a=shingles(bodies[i].text),b=shingles(bodies[j].text),overlap=[...a].filter(x=>b.has(x)).length/Math.min(a.size,b.size);if(overlap>max){max=overlap;pair=bodies[i].slug+' / '+bodies[j].slug}}
if(max>=.5)fail('five-word shingle overlap >=50%: '+pair);
if(process.env.CHECK_BUILT_ARTIFACTS==='1'){
 for(const entry of manifest.entries){const path=root+'/.next/server/app/research/'+entry.slug+'.html';if(!fs.existsSync(path))fail('built page missing: '+entry.slug);const html=fs.readFileSync(path,'utf8'),canonical='https://outsourcedservice.com/research/'+entry.slug;if(!html.includes(canonical)||!html.includes('"datePublished":"2026-10-02"'))fail('built canonical/date missing: '+entry.slug)}
 const path=root+'/.next/server/app/sitemap.xml.body';if(!fs.existsSync(path))fail('built sitemap missing');const xml=fs.readFileSync(path,'utf8');for(const entry of manifest.entries)if(!xml.includes('/research/'+entry.slug))fail('built sitemap missing: '+entry.slug);
}
console.log(JSON.stringify({researchCount:5,minimumBodyWords:minimumWords,repeatedParagraphs:'none',maximumFiveWordShingleOverlapPercent:Number((max*100).toFixed(2)),maximumPair:pair,sourceHashes:'pass',sourceLinks:'pass',images:'pass',fleet:'pass',canonicalDateAndSitemap:'pass',builtArtifacts:process.env.CHECK_BUILT_ARTIFACTS==='1'?'pass':'not-requested'},null,2));
