import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import ts from 'typescript';import {execFileSync} from 'node:child_process';
const root=process.cwd(),source=fs.readFileSync(path.join(root,'app/oct8-content.ts'),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,module={exports:{}};
vm.runInNewContext(`(function(exports,module){${js}\n})(module.exports,module)`,{module});
const {october8BlogPosts:blogs,october8Research:research}=module.exports;
const assert=(x,m)=>{if(!x)throw new Error(m)},words=x=>x.trim().split(/\s+/).filter(Boolean).length;
assert(blogs.length===12,`Blog count ${blogs.length}`);assert(research.length===5,`Research count ${research.length}`);
const slugs=[...blogs,...research].map(x=>x.slug);assert(new Set(slugs).size===17,'duplicate October 8 slug');
for(const p of blogs){assert(p.published==='2026-10-08',`${p.slug}: date`);assert(words(p.body.join(' '))>=1100,`${p.slug}: ${words(p.body.join(' '))} words`);assert(p.sources.length>=3,`${p.slug}: sources`);execFileSync('git',['cat-file','-e',`HEAD:public/${p.image.replace(/^\//,'')}`],{stdio:'ignore'});}
for(const p of research){assert(p.published==='2026-10-08',`${p.slug}: date`);assert(words(p.body.join(' '))>=1100,`${p.slug}: ${words(p.body.join(' '))} words`);assert(p.sources.length>=3&&p.sources.every(s=>/^https:\/\//.test(s.url)),`${p.slug}: citations`);execFileSync('git',['cat-file','-e',`HEAD:public/${p.thumbnail.replace(/^\//,'')}`],{stdio:'ignore'});}
for(const file of ['app/blog/blog-listing.tsx','app/research/page.tsx']){const text=fs.readFileSync(path.join(root,file),'utf8');assert(text.includes('<time')&&text.includes('Published '),`${file}: visible listing date`)}
for(const file of ['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx']){const text=fs.readFileSync(path.join(root,file),'utf8');assert(text.includes('<time')&&text.includes('Published'),`${file}: visible detail date`)}
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8'),fleet=fs.readFileSync(path.join(root,'app/fleet-content.ts'),'utf8');assert(data.includes('...october8BlogPosts'),'Blog registry');assert(fleet.includes('...october8Research'),'Research registry');
for(const [kind,count] of [['blog',12],['research',5]]){const m=JSON.parse(fs.readFileSync(path.join(root,`.paperclip/daily-content/2026-10-08/${kind}.json`),'utf8'));assert(m.date==='2026-10-08'&&m.count===count&&m.articles.length===count,`${kind} manifest`)}
console.log(`October 8 validation passed: Blog 12 (min ${Math.min(...blogs.map(p=>words(p.body.join(' '))))} words), Research 5 (min ${Math.min(...research.map(p=>words(p.body.join(' '))))} words).`);
