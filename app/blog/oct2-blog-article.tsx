import type { october2BlogPosts } from '../oct2-blog-content';

type Post = (typeof october2BlogPosts)[number];

function inline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return match ? <a key={index} href={match[2]}>{match[1]}</a> : part;
  });
}

function render(markdown: string) {
  const blocks = markdown.split(/\n\n+/);
  return blocks.map((block, index) => {
    if (block.startsWith('## ')) return <h2 key={index}>{block.slice(3)}</h2>;
    const lines = block.split('\n');
    if (lines.every((line) => /^- /.test(line))) {
      return <ul key={index}>{lines.map((line) => <li key={line}>{inline(line.slice(2))}</li>)}</ul>;
    }
    if (lines.every((line) => /^\d+\. /.test(line))) {
      return <ol key={index}>{lines.map((line) => <li key={line}>{inline(line.replace(/^\d+\. /, ''))}</li>)}</ol>;
    }
    return <p key={index}>{inline(block.replace(/\n/g, ' '))}</p>;
  });
}

export function October2BlogArticle({ post }: { post: Post }) {
  const canonical = `https://outsourcedservice.com/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title,
    description: post.excerpt, datePublished: post.published, mainEntityOfPage: canonical,
    image: `https://outsourcedservice.com${post.image}`,
    author: {'@type':'Organization', name:'OutsourcedService.com'},
    publisher: {'@type':'Organization', name:'OutsourcedService.com'}, citation: post.sources,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <p className="eyebrow">Outsourced Service field note</p>
    <h1>{post.title}</h1>
    <p className="lead">{post.excerpt}</p>
    <img src={post.image} alt="Two specialists reviewing a service workflow board" width="1200" height="675" style={{width:'100%',height:'auto'}} />
    <p className="article-date">Published <time dateTime={post.published}>October 2, 2026</time> - {post.minutes} minute read</p>
    <div className="article-body">{render(post.markdown)}</div>
  </>;
}
