import { Header, Footer, CTA } from './components';
import type { october22BlogPosts } from './oct22-content';

type Post = (typeof october22BlogPosts)[number];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'section';
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
}

const HEADINGS = ['Define the operating boundary', 'Preserve evidence and authority', 'Route exceptions and verify acceptance', 'Measure and improve the control'];
function chunk(body: readonly string[]) {
  const size = Math.ceil(body.length / HEADINGS.length);
  return HEADINGS.map((heading, index) => ({ heading, paragraphs: body.slice(index * size, (index + 1) * size) })).filter((group) => group.paragraphs.length);
}

export function October22BlogArticle({ post }: { post: Post }) {
  return <><Header/><main className="article-shell"><article data-article-body>
    <p className="eyebrow">Philippines service guide · <time dateTime={post.published}>{formatDate(post.published)}</time></p>
    <h1>{post.title}</h1>
    <p className="lead">{post.excerpt}</p>
    <img src={post.image.replace(/\.png$/, '.webp')} alt={`${post.title} editorial illustration`} width="1200" height="630" style={{width:'100%',height:'auto',borderRadius:18,margin:'1.5rem 0'}}/>
    <details className="oct22-toc-mobile"><summary>On this page</summary><ol>{HEADINGS.map((h,i)=><li key={h}><a href={`#${slugify(h)}`}>{h}</a></li>)}</ol></details><aside className="oct22-toc"><strong>On this page</strong><ol>{HEADINGS.map((h,i)=><li key={h}><a href={`#${slugify(h)}`}>{h}</a></li>)}</ol></aside>
    <div className="article-body">{chunk(post.body).map((group, index) => <section key={index}><h2 id={slugify(group.heading)}>{group.heading}</h2>{group.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}</section>)}</div>
  </article><CTA/></main><Footer/></>;
}
