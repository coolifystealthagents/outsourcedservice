import { Header, Footer, JsonLd } from './components';
import { TestimonialsRail } from './booking-components';
import { blogPosts, services, site, staffingProcess } from './data';

const launchPrinciples = [
  { title: 'Scope the queue', body: 'Define the repeated work and its finish line.' },
  { title: 'Limit access', body: 'Open only the tools and permissions the role needs.' },
  { title: 'Review real work', body: 'Check samples before adding responsibility.' },
];

const serviceIcons = [
  '/icons/getillustrations/sharpie-business/scoped-lane.svg',
  '/icons/getillustrations/sharpie-business/approval-owner.svg',
  '/icons/getillustrations/sharpie-business/quality-review.svg',
  '/icons/getillustrations/sharpie-business/scoped-lane.svg',
];

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
    <main className="service-desk service-desk-v2" data-design="reference-led-service-system-2026-11">
      <JsonLd data={schema} />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Philippines-based service teams</p>
            <h1>Build the team around the <span>work that repeats.</span></h1>
            <p className="lead">Start with one clear queue. Set the handoff, access, and review rules before anyone logs in.</p>
            <ul className="hero-checks" aria-label="A clear service-team launch includes">
              <li>Task scope before job title</li>
              <li>Narrow access at launch</li>
              <li>A named quality reviewer</li>
            </ul>
            <div className="hero-trust" aria-label="Five-star trust signal">
              <span className="hero-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((star) => <svg className="hero-star-icon" key={star} viewBox="0 0 24 24" focusable="false"><path d="m12 2.2 3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1 3-6.1Z" /></svg>)}
              </span>
              <span>Workflow-first planning with scope, access, and review made visible.</span>
            </div>
            <div className="actions">
              <a className="btn primary" href="/contact-us">Plan my service team <span aria-hidden="true">→</span></a>
              <a className="btn ghost" href="#services">Explore service lanes</a>
            </div>
            <p className="routing-note">Talent comes only from the Philippines. This independent site may route your request to a Philippines staffing partner.</p>
          </div>

          <figure className="home-hero-media">
            <img src="/aug23-heroes/philippines-remote-team-quality-coaching.png" alt="Two colleagues reviewing notes beside a computer" width="1536" height="1024" />
            <figcaption>
              <span>Plan before the first login</span>
              <strong>Scope · access · review</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="launch-proof" aria-labelledby="launch-proof-title">
        <div className="container">
          <div className="proof-intro">
            <p className="eyebrow">A practical first week</p>
            <h2 id="launch-proof-title">Clarity before capacity.</h2>
          </div>
          <div className="proof-grid">
            {launchPrinciples.map((item) => <article key={item.title}>
              <span aria-hidden="true">✓</span>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="split-head services-head">
            <div><p className="eyebrow">Four useful starting points</p><h2>Choose a service lane. Keep the first handoff tight.</h2></div>
            <div><p>Repeated work is easier to delegate when the inputs, finish line, and exception owner are visible.</p><a className="text-link" href="/services">See every service <span>↗</span></a></div>
          </div>
          <div className="service-grid home-service-grid">
            {services.map((service, index) => <a href={`/services/${service.slug}`} className="service-card home-service-card" key={service.slug}>
              <img src={serviceIcons[index]} alt={`${service.title} handoff illustration`} width="72" height="72" />
              <span className="service-icon" aria-hidden="true">↗</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="task-chips">{service.bestFor.slice(0, 3).map((task) => <span key={task}>{task}</span>)}</div>
              <strong>Review the service <span>→</span></strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="home-cta-band">
        <div className="container">
          <div><p className="eyebrow">Know the work already?</p><h2>Turn the task list into a usable service brief.</h2></div>
          <a className="btn light" href="/contact-us">Start the conversation <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="process-section home-process" id="process">
        <div className="container process-grid">
          <div className="process-intro">
            <p className="eyebrow">A calmer launch</p>
            <h2>Make the work visible before you add a person.</h2>
            <p>Filipino talent can take on a lot. That does not mean the role should start wide. A short queue with clean examples will tell you more than a long job description.</p>
            <a className="btn ghost-light" href="/services">Explore the service map</a>
          </div>
          <ol className="process-list" aria-label="Service team launch timeline">
            {staffingProcess.map((item) => <li key={item.step}>
              <span aria-hidden="true">{item.step}</span><div><h3>{item.title}</h3><p>{item.body}</p></div>
            </li>)}
          </ol>
        </div>
      </section>

      <section className="section homepage-reviews" aria-label="Client reviews">
        <div className="container"><TestimonialsRail /></div>
      </section>

      <section className="section guide-section home-guides">
        <div className="container">
          <div className="split-head"><div><p className="eyebrow">Field notes</p><h2>Plan the handoff before the interview.</h2></div><a className="text-link" href="/blog">Browse every guide <span>↗</span></a></div>
          <div className="guide-grid">
            {blogPosts.slice(0, 3).map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{post.minutes} min read</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong>Read the guide <span>→</span></strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container final-panel home-final-panel">
        <div><p className="eyebrow">Philippines only</p><h2>Bring the messy task list. Leave with a tighter service brief.</h2></div>
        <div><p>Share the work, schedule, tools, and decisions that should stay with you.</p><a className="btn light" href="/contact-us">Plan my service team <span aria-hidden="true">→</span></a><small>Requests may be routed to a Philippines staffing partner.</small></div>
      </section>
    </main>
    <Footer />
  </>;
}
