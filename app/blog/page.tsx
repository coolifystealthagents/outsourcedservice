import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';

export default function Blog() {
  return <>
    <Header />
    <main className="section content-page">
      <div className="container">
        <p className="eyebrow">{site.brand} field notes</p>
        <h1>Guides for building a Filipino service team</h1>
        <p className="lead">Short, practical notes on role scope, onboarding, provider questions, and the first work you should hand off.</p>
        <div className="cards">
          {blogPosts.map((post) => <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
            <span className="pill">{post.minutes} min read</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </a>)}
        </div>
      </div>
    </main>
    <Footer />
  </>;
}
