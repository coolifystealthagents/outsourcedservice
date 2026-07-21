import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || String(item));
const getSlug = (item: any) => typeof item === 'string'
  ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap">
    <img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" />
    <span className="logo-name">{site.brand || domain}</span>
  </span>;
}

export function Header() {
  return <header className="nav">
    <div className="nav-inner">
      <a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
      <nav className="links" aria-label="Main navigation">
        <a href="/#services">Services</a>
        <a href="/#process">How it works</a>
        <a href="/blog">Guides</a>
        <a href="/contact">Contact</a>
      </nav>
      <a className="btn nav-cta" href="/contact">Plan my service team</a>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="legit-footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a>
        <p>Plan recurring business work for Filipino talent, with clear access, handoffs, and review ownership.</p>
        <p className="footer-note">Talent sourcing is limited to the Philippines. This is an independent informational site. Requests may be routed to a Philippines staffing partner for follow-up.</p>
      </div>
      <div>
        <h3>Services</h3>
        <div className="footer-links">{footerItems.map((item: any, index: number) => <a href={`/services/${getSlug(item)}`} key={index}>{getTitle(item)}</a>)}</div>
      </div>
      <div>
        <h3>Site</h3>
        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/blog">Guides</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms and conditions</a>
          <a href="/cancellation-policy">Cancellation policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>{domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta">
    <p className="eyebrow">Start with the work</p>
    <h2>Put the service brief on paper.</h2>
    <p>Share the queue, tools, schedule, and review rules. Every staffing request stays limited to Filipino talent.</p>
    <a className="btn primary" href="/contact">Plan my service team</a>
    <small>This independent site may route your request to a Philippines staffing partner.</small>
  </section>;
}
