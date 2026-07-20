import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.title || 'Service', description: s?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug) || services[0];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${siteUrl}/services/${s.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: `${s.title} for outsourced service teams`,
        url: serviceUrl,
        description: s.desc,
        provider: { '@type': 'Organization', name: site.brand, url: siteUrl },
        areaServed: 'United States',
        serviceType: s.title,
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What should I prepare before hiring ${s.title.toLowerCase()}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Start with ${s.firstWeek[0].toLowerCase()}, then ${s.firstWeek[1].toLowerCase()}. Keep access narrow until the first outputs are reviewed.`,
            },
          },
          {
            '@type': 'Question',
            name: `What work fits ${s.title.toLowerCase()} best?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Good first tasks include ${s.bestFor.slice(0, 3).join(', ')}. Start with repeated work that has examples and clear approval rules.`,
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: s.title, item: serviceUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main>
        <JsonLd data={schema} />
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{s.title}</h1>
              <p className="lead">{s.desc}</p>
              <a className="btn" href="/contact">Plan this role</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${s.title} offshore service team`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cards">
            <div className="card">
              <h3>Best first tasks</h3>
              <ul>{s.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h3>First week plan</h3>
              <ol>{s.firstWeek.map((item) => <li key={item}>{item}</li>)}</ol>
            </div>
            <div className="card">
              <h3>Owner controls</h3>
              <ul>{s.ownerControls.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container two">
            <div>
              <p className="eyebrow">Service handoff board</p>
              <h2>Know what is safe to hand off.</h2>
              <p>
                A good outsourced service starts small. Give the staff member clear examples, a short daily list, and limits on what they can decide alone.
              </p>
            </div>
            <div className="card">
              <h3>Use this rule</h3>
              <p className="quote">
                "If the task touches money, access, legal risk, customer promises, or brand voice, it needs an owner rule before it leaves your desk."
              </p>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
