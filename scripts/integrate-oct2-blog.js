const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const root = path.resolve(__dirname, '..');
const workplan = JSON.parse(fs.readFileSync(path.join(root, 'publishing/2026-10-02-blog-workplan.json'), 'utf8'));
const publicationDate = '2026-10-02';

function parseDraft(slug) {
  const source = fs.readFileSync(path.join(root, `content/blog-drafts/${slug}.md`), 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n\n([\s\S]*)$/);
  if (!match) throw new Error(`Invalid draft: ${slug}`);
  const meta = Object.fromEntries(match[1].split('\n').map((line) => {
    const i = line.indexOf(':');
    return [line.slice(0, i), line.slice(i + 1).trim().replace(/^['"]|['"]$/g, '')];
  }));
  const markdown = match[2].trim();
  const plain = markdown
    .replace(/^#+\s+/gm, '')
    .replace(/^[-*]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '');
  return {
    slug,
    title: meta.title,
    published: publicationDate,
    image: meta.image,
    conversionPath: meta.conversionPath,
    minutes: Math.max(7, Math.ceil(plain.trim().split(/\s+/).length / 220)),
    excerpt: markdown.split(/\n\n/)[0].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
    markdown,
    wordCount: plain.trim().split(/\s+/).length,
    contentHash: `sha256:${crypto.createHash('sha256').update(markdown).digest('hex')}`,
  };
}

const posts = workplan.topics.map((topic) => ({ ...parseDraft(topic.slug), sources: topic.sources }));
const moduleSource = `export const october2BlogPosts = ${JSON.stringify(posts.map(({wordCount, contentHash, ...post}) => post), null, 2)} as const;\n`;
fs.writeFileSync(path.join(root, 'app/oct2-blog-content.ts'), moduleSource);

const manifest = {
  run: 'OUTAA-83',
  cycleLabel: '2026-10-02',
  family: 'blog',
  requiredCount: 12,
  stagedCount: posts.length,
  siteTimezone: 'UTC',
  publicationDateRule: 'The source date is the planned UTC release date; actualPublicationDate remains null until first successful public verification.',
  repository: 'coolifystealthagents/outsourcedservice',
  productionBranch: 'main',
  integrationBranch: 'integrate/outaa-83-20261002',
  baseProductionSha: workplan.baseProductionSha,
  status: 'staged-awaiting-combined-release',
  articles: posts.map((post) => ({
    family: 'blog', topic: post.title, slug: post.slug, sources: post.sources,
    contentHash: post.contentHash, bodyWordCount: post.wordCount,
    plannedPublicationDate: publicationDate, actualPublicationDate: null,
    articleCommitSha: null,
    deploymentEvidence: { provider: 'Coolify3', applicationUuid: 'lae47vl3vogpnilfjamakc9n', configuredBranch: 'main', status: 'not-deployed-awaiting-browser-operator' },
    liveUrl: `https://outsourcedservice.com/blog/${post.slug}`, verificationTime: null,
    status: 'staged-awaiting-combined-release',
  })),
};
fs.writeFileSync(path.join(root, 'publishing/2026-10-02-blog-manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

function replaceOnce(file, before, after) {
  const target = path.join(root, file);
  const value = fs.readFileSync(target, 'utf8');
  if (value.includes(after)) return;
  if (!value.includes(before)) throw new Error(`Integration anchor missing in ${file}`);
  fs.writeFileSync(target, value.replace(before, after));
}

replaceOnce('app/data.ts', "import { september28BlogPosts } from './sep28-blog-content';", "import { september28BlogPosts } from './sep28-blog-content';\nimport { october2BlogPosts } from './oct2-blog-content';");
replaceOnce('app/data.ts', 'export const blogPosts = [\n  ...september28BlogPosts,', 'export const blogPosts = [\n  ...october2BlogPosts,\n  ...september28BlogPosts,');

replaceOnce('app/blog/blog-listing.tsx', "import { august23BlogPosts } from '../aug23-content';", "import { august23BlogPosts } from '../aug23-content';\nimport { october2BlogPosts } from '../oct2-blog-content';");
replaceOnce('app/blog/blog-listing.tsx', "  const september28Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-28');", "  const october2Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-10-02');\n  const september28Posts = blogPosts.filter((item) => 'published' in item && item.published === '2026-09-28');");
replaceOnce('app/blog/blog-listing.tsx', '  const earlierBlogPosts = blogPosts.filter((item) => !("published" in item && (item.published === "2026-09-01"', '  const earlierBlogPosts = blogPosts.filter((item) => !("published" in item && (item.published === "2026-10-02" || item.published === "2026-09-01"');
replaceOnce('app/blog/blog-listing.tsx', '  const posts = [\n    ...september28Posts,', '  const posts = [\n    ...october2Posts,\n    ...september28Posts,');

replaceOnce('app/blog/[slug]/page.tsx', "import { august23BlogPosts } from '../../aug23-content';", "import { august23BlogPosts } from '../../aug23-content';\nimport { october2BlogPosts } from '../../oct2-blog-content';\nimport { October2BlogArticle } from '../oct2-blog-article';");
replaceOnce('app/blog/[slug]/page.tsx', "  const publicationDate = 'published' in post ? post.published : undefined;", "  const october2 = october2BlogPosts.find((item) => item.slug === slug);\n  if (october2) return <><Header/><main className=\"section content-page\"><article className=\"container\" style={{maxWidth:880}}><October2BlogArticle post={october2}/></article><CTA/></main><Footer/></>;\n  const publicationDate = 'published' in post ? post.published : undefined;");

const validator = `const fs=require('fs'),crypto=require('crypto');\nconst root=process.cwd();\nconst manifest=JSON.parse(fs.readFileSync(root+'/publishing/2026-10-02-blog-manifest.json','utf8'));\nconst fail=(m)=>{throw new Error(m)};\nif(manifest.requiredCount!==12||manifest.stagedCount!==12||manifest.articles.length!==12)fail('Blog count must be exactly 12');\nconst slugs=new Set(),hashes=new Set();\nfor(const a of manifest.articles){\n+ if(slugs.has(a.slug))fail('duplicate slug '+a.slug);slugs.add(a.slug);\n+ if(hashes.has(a.contentHash))fail('duplicate content hash '+a.slug);hashes.add(a.contentHash);\n+ if(a.bodyWordCount<900)fail('short article '+a.slug);\n+ if(a.actualPublicationDate!==null||a.verificationTime!==null)fail('unverified article marked live '+a.slug);\n+ if(a.plannedPublicationDate!=='2026-10-02')fail('UTC source date mismatch '+a.slug);\n+ const md=fs.readFileSync(root+'/content/blog-drafts/'+a.slug+'.md','utf8').split('---\\n').slice(2).join('---\\n').trim();\n+ const h='sha256:'+crypto.createHash('sha256').update(md).digest('hex');if(h!==a.contentHash)fail('hash mismatch '+a.slug);\n+}\nconst data=fs.readFileSync(root+'/app/data.ts','utf8'),route=fs.readFileSync(root+'/app/blog/[slug]/page.tsx','utf8'),listing=fs.readFileSync(root+'/app/blog/blog-listing.tsx','utf8'),sitemap=fs.readFileSync(root+'/app/sitemap.xml/route.ts','utf8');\nif(!data.includes('...october2BlogPosts'))fail('registry missing');if(!route.includes('October2BlogArticle'))fail('route missing');if(!listing.includes('...october2Posts'))fail('listing missing');if(!sitemap.includes('...blogPosts'))fail('sitemap registry missing');\nfunction shingles(text){const w=text.toLowerCase().match(/[a-z0-9]+/g)||[],s=new Set();for(let i=0;i+4<w.length;i++)s.add(w.slice(i,i+5).join(' '));return s}\nlet max=0,pair='';for(let i=0;i<manifest.articles.length;i++)for(let j=i+1;j<manifest.articles.length;j++){const a=manifest.articles[i],b=manifest.articles[j],sa=shingles(fs.readFileSync(root+'/content/blog-drafts/'+a.slug+'.md','utf8')),sb=shingles(fs.readFileSync(root+'/content/blog-drafts/'+b.slug+'.md','utf8')),shared=[...sa].filter(x=>sb.has(x)).length,score=shared/Math.min(sa.size,sb.size);if(score>max){max=score;pair=a.slug+' / '+b.slug}}\nif(max>=.5)fail('five-word shingle overlap >=50%: '+pair+' '+max);\nconsole.log(JSON.stringify({blogCount:12,minWords:Math.min(...manifest.articles.map(a=>a.bodyWordCount)),maxFiveWordShingleOverlap:Number((max*100).toFixed(2)),maxPair:pair,hashes:'pass',registry:'pass',route:'pass',listing:'pass',sitemap:'pass'},null,2));\n`;
fs.writeFileSync(path.join(root, 'scripts/validate-oct2-combined.js'), validator.replace(/^\+/gm, ''));
console.log(`Integrated ${posts.length} October 2 Blog articles.`);
