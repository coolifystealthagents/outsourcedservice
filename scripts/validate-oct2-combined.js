const fs=require('fs'),crypto=require('crypto');
const root=process.cwd();
const manifest=JSON.parse(fs.readFileSync(root+'/publishing/2026-10-02-blog-manifest.json','utf8'));
const fail=(m)=>{throw new Error(m)};
if(manifest.requiredCount!==12||manifest.stagedCount!==12||manifest.articles.length!==12)fail('Blog count must be exactly 12');
const slugs=new Set(),hashes=new Set();
for(const a of manifest.articles){
 if(slugs.has(a.slug))fail('duplicate slug '+a.slug);slugs.add(a.slug);
 if(hashes.has(a.contentHash))fail('duplicate content hash '+a.slug);hashes.add(a.contentHash);
 if(a.bodyWordCount<900)fail('short article '+a.slug);
 if(a.actualPublicationDate!==null||a.verificationTime!==null)fail('unverified article marked live '+a.slug);
 if(a.plannedPublicationDate!=='2026-10-02')fail('UTC source date mismatch '+a.slug);
 const md=fs.readFileSync(root+'/content/blog-drafts/'+a.slug+'.md','utf8').split('---\n').slice(2).join('---\n').trim();
 const h='sha256:'+crypto.createHash('sha256').update(md).digest('hex');if(h!==a.contentHash)fail('hash mismatch '+a.slug);
}
const data=fs.readFileSync(root+'/app/data.ts','utf8'),route=fs.readFileSync(root+'/app/blog/[slug]/page.tsx','utf8'),listing=fs.readFileSync(root+'/app/blog/blog-listing.tsx','utf8'),sitemap=fs.readFileSync(root+'/app/sitemap.xml/route.ts','utf8');
if(!data.includes('...october2BlogPosts'))fail('registry missing');if(!route.includes('October2BlogArticle'))fail('route missing');if(!listing.includes('...october2Posts'))fail('listing missing');if(!sitemap.includes('...blogPosts'))fail('sitemap registry missing');
function shingles(text){const w=text.toLowerCase().match(/[a-z0-9]+/g)||[],s=new Set();for(let i=0;i+4<w.length;i++)s.add(w.slice(i,i+5).join(' '));return s}
let max=0,pair='';for(let i=0;i<manifest.articles.length;i++)for(let j=i+1;j<manifest.articles.length;j++){const a=manifest.articles[i],b=manifest.articles[j],sa=shingles(fs.readFileSync(root+'/content/blog-drafts/'+a.slug+'.md','utf8')),sb=shingles(fs.readFileSync(root+'/content/blog-drafts/'+b.slug+'.md','utf8')),shared=[...sa].filter(x=>sb.has(x)).length,score=shared/Math.min(sa.size,sb.size);if(score>max){max=score;pair=a.slug+' / '+b.slug}}
if(max>=.5)fail('five-word shingle overlap >=50%: '+pair+' '+max);
console.log(JSON.stringify({blogCount:12,minWords:Math.min(...manifest.articles.map(a=>a.bodyWordCount)),maxFiveWordShingleOverlap:Number((max*100).toFixed(2)),maxPair:pair,hashes:'pass',registry:'pass',route:'pass',listing:'pass',sitemap:'pass'},null,2));
