import { Header, Footer } from '../components';
import { researchPosts } from '../fleet-content';
import aug20Meta from '../aug20-meta.json';

export const metadata = { title: 'Research', description: 'Research notes about Philippines-based staffing and operations.' };

export default function Research() {
  const august20ResearchPosts = Object.entries(aug20Meta)
    .filter(([, item]) => item.family === 'research')
    .map(([slug, item]) => ({ slug, title: item.title, excerpt: item.description }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const posts = [...august20ResearchPosts, ...researchPosts];

  return <><Header/><main className="fleet-main"><section className="fleet-hero"><div className="container"><p className="eyebrow">Research library</p><h1>Research for planning Philippines-based teams</h1><p className="lead">Sourced articles about role design, operating controls, and staffing decisions. Each brief names its method, sources, review questions, and related research.</p></div></section><section className="section"><div className="container fleet-card-grid">{posts.map((post) => <a className="fleet-card" href={`/research/${post.slug}`} key={post.slug}><h2>{post.title}</h2><p>{post.excerpt}</p></a>)}</div></section></main><Footer/></>;
}
