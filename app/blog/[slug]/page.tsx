import { Header, Footer, CTA } from '../../components';
import { blogPosts, site } from '../../data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  return <>
    <Header />
    <main className="section content-page">
      <article className="container" style={{ maxWidth: 880 }}>
        <p className="eyebrow">{site.brand} field note</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="card">
          <h2>The short version</h2>
          <p>Start with one role, a short task list, and one person who checks the work. Filipino talent should not have to reverse-engineer a process that nobody on your team can explain.</p>
          <h2>What to prepare</h2>
          <ul>
            <li>Examples of finished work and approved replies</li>
            <li>Tool permissions and access limits</li>
            <li>The daily output you expect</li>
            <li>Escalation rules for sensitive decisions</li>
          </ul>
          <h2>Questions for a Philippines staffing provider</h2>
          <ul>
            <li>Who screens the candidate?</li>
            <li>Who checks quality after the start date?</li>
            <li>What happens if the fit is wrong?</li>
            <li>How are passwords and customer data handled?</li>
          </ul>
        </div>
      </article>
      <CTA />
    </main>
    <Footer />
  </>;
}
