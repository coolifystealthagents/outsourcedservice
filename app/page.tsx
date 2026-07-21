import { Header, Footer, JsonLd } from './components';
import { blogPosts, services, site, staffingProcess, stats } from './data';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${site.domain.toLowerCase()}`,
    description: 'Plan recurring business work for a Filipino service team.',
  };

  return <>
    <Header />
    <main className="service-desk" data-design="filipino-service-desk-2026-07">
      <JsonLd data={schema} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Filipino talent for recurring business work</p>
            <h1>Build a Filipino service team around the work, not the job title.</h1>
            <p className="lead">Start with the queue that keeps coming back. Map the handoff, access, and review rules before anyone logs in.</p>
            <div className="actions">
              <a className="btn primary" href="/contact">Plan my service team</a>
              <a className="text-link" href="#services">See the service lanes <span>↘</span></a>
            </div>
            <p className="routing-note">Talent comes only from the Philippines. This independent site may route your request to a Philippines staffing partner.</p>
          </div>
          <div className="hero-visual">
            <img src={site.heroImage} alt={site.alt} />
            <div className="visual-tag tag-one"><span>01</span> Scope the queue</div>
            <div className="visual-tag tag-two"><span>02</span> Set owner rules</div>
          </div>
        </div>
        <div className="container handoff-strip">
          <p>Before the first login</p>
          {stats.map((stat) => <article key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong><small>{stat.note}</small></article>)}
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="split-head">
            <div><p className="eyebrow">Four useful starting points</p><h2>Choose a service lane. Then narrow the first week.</h2></div>
            <p>Repeated work is easier to hand off when someone owns the exceptions. Pick one lane and write down what still needs your approval.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => <a href={`/services/${service.slug}`} className="service-card" key={service.slug}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="task-chips">{service.bestFor.slice(0, 3).map((task) => <span key={task}>{task}</span>)}</div>
              <strong>Open the handoff <span>↗</span></strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="container process-grid">
          <div className="process-intro">
            <p className="eyebrow">A calmer first week</p>
            <h2>Make the work visible before you add a person.</h2>
            <p>Filipino talent can take on a lot. That does not mean the role should start wide. A short queue with clean examples will tell you more than a long job description.</p>
          </div>
          <div className="process-list">
            {staffingProcess.map((item) => <article key={item.step}>
              <span>{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section guide-section">
        <div className="container">
          <div className="split-head"><div><p className="eyebrow">Field notes</p><h2>Read this before the first interview.</h2></div><a className="text-link" href="/blog">Browse every guide <span>↗</span></a></div>
          <div className="guide-grid">
            {blogPosts.slice(0, 3).map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{post.minutes} min read</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong>Read the guide</strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container final-panel">
        <div><p className="eyebrow">Philippines only</p><h2>Bring the messy task list. Leave with a tighter service brief.</h2></div>
        <div><p>Share the work, schedule, tools, and decisions that should stay with you.</p><a className="btn primary" href="/contact">Plan my service team</a><small>Requests may be routed to a Philippines staffing partner.</small></div>
      </section>
    </main>
    <Footer />
  </>;
}
