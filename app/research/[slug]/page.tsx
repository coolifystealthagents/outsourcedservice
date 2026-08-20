import {notFound} from 'next/navigation';
import {Header,Footer,JsonLd} from '../../components';
import {researchPosts} from '../../fleet-content';

const publicationDateFormatter=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const formatPublicationDate=(value:string)=>publicationDateFormatter.format(new Date(`${value}T00:00:00Z`));

export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const post=researchPosts.find(p=>p.slug===slug);
  return post?{title:post.title,description:post.excerpt,alternates:{canonical:`https://outsourcedservice.com/research/${post.slug}`},openGraph:{title:post.title,description:post.excerpt,type:'article',url:`https://outsourcedservice.com/research/${post.slug}`,images:[`https://outsourcedservice.com${post.thumbnail}`]}}:{}
}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const post=researchPosts.find(p=>p.slug===slug); if(!post)notFound();
  const url=`https://outsourcedservice.com/research/${post.slug}`;
  return <><Header/><main className="fleet-main"><JsonLd data={{'@context':'https://schema.org','@type':'Article','@id':`${url}#article`,headline:post.title,description:post.excerpt,datePublished:post.published,dateModified:post.published,mainEntityOfPage:url,image:`https://outsourcedservice.com${post.thumbnail}`,citation:post.sources.map(source=>source.url)}}/><article className="section article-shell"><p className="eyebrow">Philippines staffing research · <time dateTime={post.published}>{formatPublicationDate(post.published)}</time></p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p><strong>Headline metric:</strong> {post.headlineStat}</p>{post.body.map((x,i)=><p key={i}>{x}</p>)}{post.serviceHandoff&&<section aria-label="Plan this support lane"><h2>Plan this support lane</h2><p>{post.serviceHandoff.lead} <a href={`/services/${post.serviceHandoff.slug}`}>{post.serviceHandoff.label}</a>.</p></section>}<h2>Key stats and source notes</h2><p>{post.methodology}</p><ol>{post.sources.map((source,i)=><li key={source.url}><a href={source.url} rel="noreferrer">{i+1}. {source.label}</a></li>)}</ol><h2>FAQs</h2>{post.faq.map(item=><section key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></section>)}<h2>Related Research</h2><div className="fleet-card-grid">{post.related.map(related=>{const item=researchPosts.find(candidate=>candidate.slug===related);return item?<a className="fleet-card" href={`/research/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.excerpt}</p></a>:null})}</div></article></main><Footer/></>
}
