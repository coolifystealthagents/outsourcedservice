import { StickyArticleToc } from './sticky-article-toc';

type Section = { heading: string; paragraphs: readonly string[] };
type Post = {
  slug: string; title: string; excerpt: string; category?: string; minutes?: number;
  published: string; image: string; sections: readonly Section[];
  sources: readonly { label?: string; name?: string; url: string }[];
  service?: string; related?: readonly string[];
  faq?: readonly { q?: string; question?: string; a?: string; answer?: string }[];
};

function headingId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function displayDate(value: string) {
  return new Date(`${value}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric',
  });
}

export function Nov08BlogArticle({ post }: { post: Post }) {
  return (
    <div className="nov08-page">
      <p className="eyebrow">{post.category || 'Service operations'} field note</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <div className="article-date">
        Published <time dateTime={post.published}>{displayDate(post.published)}</time>
        {post.minutes ? <> &middot; {post.minutes} minute read</> : null}
      </div>
      <img className="nov08-hero" src={post.image} alt={post.title} width="1200" height="630" />
      <div className="nov08-grid">
        <aside className="nov08-toc-col" aria-label="Article contents">
          <StickyArticleToc scope="#nov08-blog-body" />
        </aside>
        <div className="nov08-main" id="nov08-blog-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 id={headingId(section.heading)}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 60)}>{paragraph}</p>)}
            </section>
          ))}
          {post.faq?.length ? (
            <section>
              <h2 id="questions-buyers-ask">Questions buyers ask</h2>
              {post.faq.map((item) => (
                <div key={item.q || item.question}>
                  <h3>{item.q || item.question}</h3>
                  <p>{item.a || item.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
          {post.related?.length ? (
            <section>
              <h2 id="related-guides">Related guides</h2>
              <ul className="related-links">
                {post.related.map((slug) => (
                  <li key={slug}><a href={`/blog/${slug}`}>Read the related service guide</a></li>
                ))}
              </ul>
            </section>
          ) : null}
          <section>
            <h2 id="sources">Sources</h2>
            <ul className="source-list">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} rel="noopener noreferrer" target="_blank">{source.label || source.name}</a>
                </li>
              ))}
            </ul>
          </section>
          {post.service ? <p><a href={post.service}>See the matching service scope</a> or <a href="/contact-us">bring a redacted example to a scoping call</a>.</p> : null}
        </div>
      </div>
    </div>
  );
}

export function Nov08ResearchArticle({ post }: { post: Post & { headlineStat?: string; methodology?: string } }) {
  return (
    <div className="nov08-page">
      <p className="eyebrow">Philippines staffing research &middot; Published <time dateTime={post.published}>{displayDate(post.published)}</time></p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <img className="nov08-hero" src={post.image} alt={post.title} width="1200" height="630" />
      {post.headlineStat ? <aside className="card" aria-label="Research summary"><p><strong>Headline finding:</strong> {post.headlineStat}</p></aside> : null}
      <div className="nov08-grid">
        <aside className="nov08-toc-col" aria-label="Article contents">
          <StickyArticleToc scope="#nov08-research-body" />
        </aside>
        <div className="nov08-main" id="nov08-research-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 id={headingId(section.heading)}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 60)}>{paragraph}</p>)}
            </section>
          ))}
          {post.methodology ? (
            <section>
              <h2 id="method-note">Method note</h2>
              <p>{post.methodology}</p>
            </section>
          ) : null}
          {post.faq?.length ? (
            <section>
              <h2 id="research-questions">Research questions</h2>
              {post.faq.map((item) => (
                <div key={item.q || item.question}>
                  <h3>{item.q || item.question}</h3>
                  <p>{item.a || item.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
          <section>
            <h2 id="sources">Sources</h2>
            <ol>
              {post.sources.map((source) => (
                <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.label || source.name}</a></li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
