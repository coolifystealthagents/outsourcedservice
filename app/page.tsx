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

const workflowCards = services.flatMap((service, serviceIndex) =>
  service.bestFor.slice(0, 3).map((task) => ({
    task,
    service: service.title,
    slug: service.slug,
    icon: serviceIcons[serviceIndex],
  })),
);

const featuredReview = {
  name: 'Chad Sublet',
  detail: 'Business Owner',
  quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.',
};

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
    <main className="service-desk service-desk-v3" data-design="reference-led-service-system-2026-11-v2">
      <JsonLd data={schema} />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Philippines-based service teams</p>
            <h1>Build the team around the <span>work that repeats.</span></h1>
            <ul className="hero-checks" aria-label="A clear service-team launch includes">
              <li>Task scope before job title</li>
              <li>Narrow access at launch</li>
              <li>A named quality reviewer</li>
            </ul>
            <a className="btn primary hero-primary" href="/contact-us">Plan my service team <span className="css-arrow" aria-hidden="true" /></a>
            <p className="hero-assurance">Start with one clear queue, a defined handoff, and review rules before anyone logs in.</p>
            <p className="routing-note">Talent comes only from the Philippines. This independent site may route your request to a Philippines staffing partner.</p>
          </div>
          <figure className="home-hero-media">
            <img src="/aug23-heroes/philippines-remote-team-quality-coaching.png" alt="Two colleagues reviewing notes beside a computer" width="1536" height="1024" />
          </figure>
        </div>
      </section>

      <section className="section homepage-reviews reviews-first" aria-label="Client reviews">
        <div className="container"><TestimonialsRail /></div>
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

      <section className="section workflow-section" id="services">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">Recurring work, clearly grouped</p>
            <h2>Find the right service lane for the queue.</h2>
            <p>Start with a focused workflow. Add responsibility only after the handoff settles.</p>
          </div>
          <div className="workflow-grid">
            {workflowCards.map((item) => <a href={`/services/${item.slug}`} className="workflow-card" key={`${item.slug}-${item.task}`}>
              <img src={item.icon} alt={`${item.task} workflow illustration`} width="34" height="34" />
              <h3>{item.task}</h3>
              <p>{item.service}</p>
              <strong>Review lane <span className="css-arrow" aria-hidden="true" /></strong>
            </a>)}
          </div>
          <a className="btn catalog-cta" href="/services">See every service <span className="css-arrow" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section process-section home-process" id="process">
        <div className="container">
          <div className="center-head">
            <p className="eyebrow">A calmer launch</p>
            <h2>Make the work visible before you add a person.</h2>
            <p>A short queue with clean examples will tell you more than a long job description.</p>
          </div>
          <ol className="process-list" aria-label="Service team launch timeline">
            {staffingProcess.slice(0, 3).map((item) => <li key={item.step}>
              <div><h3>{item.title}</h3><p>{item.body}</p></div>
            </li>)}
          </ol>
          <a className="btn process-cta" href="/contact-us">Start the conversation <span className="css-arrow" aria-hidden="true" /></a>
          <p className="cta-note">Bring the queue, schedule, tools, and review rules.</p>
        </div>
      </section>

      <section className="section review-spotlight-section">
        <div className="container review-spotlight">
          <div>
            <div className="spotlight-stars" aria-label="Five-star trust signal">
              {[0, 1, 2, 3, 4].map((star) => <svg className="hero-star-icon" key={star} viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.4 2.93 5.94 6.56.95-4.75 4.63 1.12 6.53L12 17.37l-5.86 3.08 1.12-6.53-4.75-4.63 6.56-.95L12 2.4Z" /></svg>)}
            </div>
            <blockquote>“{featuredReview.quote}”</blockquote>
            <p><strong>{featuredReview.name}</strong><span>{featuredReview.detail}</span></p>
            <a className="btn light" href="/contact-us">Plan my service team <span className="css-arrow" aria-hidden="true" /></a>
          </div>
          <aside>
            <strong>Start narrow</strong>
            <p>One queue, clear access, and a named reviewer make the first handoff easier to assess.</p>
            <ul>{launchPrinciples.map((item) => <li key={item.title}>{item.title}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section operating-section">
        <div className="container operating-grid">
          <article>
            <p className="eyebrow">What the team can own</p>
            <h2>Repeated work with a visible finish line.</h2>
            <p>Choose operations, customer support, administration, or reporting and QA. Each lane starts from the work, not a broad job title.</p>
            <a className="btn secondary" href="/services">Explore service lanes <span className="css-arrow" aria-hidden="true" /></a>
          </article>
          <article>
            <p className="eyebrow">What stays with you</p>
            <h2>Decisions, approvals, and access boundaries.</h2>
            <p>Share the examples and tools the role needs while keeping exception ownership and sensitive decisions with the right person.</p>
            <div className="mini-proof-grid">
              {launchPrinciples.map((item) => <span key={item.title}><strong>{item.title}</strong><small>{item.body}</small></span>)}
            </div>
          </article>
        </div>
      </section>

      <section className="section featured-services">
        <div className="container">
          <div className="center-head"><p className="eyebrow">Four useful starting points</p><h2>Choose a focused service brief.</h2></div>
          <div className="featured-service-grid">
            {services.map((service, index) => <a href={`/services/${service.slug}`} key={service.slug}>
              <img src={serviceIcons[index]} alt={`${service.title} handoff illustration`} width="58" height="58" />
              <h3>{service.title}</h3><p>{service.desc}</p><strong>Review the service <span className="css-arrow" aria-hidden="true" /></strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="home-cta-band">
        <div className="container">
          <div><p className="eyebrow">Know the work already?</p><h2>Turn the task list into a usable service brief.</h2></div>
          <a className="btn light" href="/contact-us">Start the conversation <span className="css-arrow" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section guide-section home-guides">
        <div className="container">
          <div className="center-head"><p className="eyebrow">Field notes</p><h2>Plan the handoff before the interview.</h2><a className="text-link" href="/blog">Browse every guide <span className="css-arrow" aria-hidden="true" /></a></div>
          <div className="guide-grid">
            {blogPosts.slice(0, 3).map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
              <span>{post.minutes} min read</span><h3>{post.title}</h3><p>{post.excerpt}</p><strong>Read the guide <span className="css-arrow" aria-hidden="true" /></strong>
            </a>)}
          </div>
        </div>
      </section>

      <section className="container final-panel home-final-panel">
        <div><p className="eyebrow">Philippines only</p><h2>Bring the messy task list. Leave with a tighter service brief.</h2></div>
        <div><p>Share the work, schedule, tools, and decisions that should stay with you.</p><a className="btn light" href="/contact-us">Plan my service team <span className="css-arrow" aria-hidden="true" /></a><small>Requests may be routed to a Philippines staffing partner.</small></div>
      </section>
    </main>
    <Footer />
  </>;
}
