import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || 'Service', description: service?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const serviceUrl = `${siteUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: `${service.title} with Filipino talent`,
        url: serviceUrl,
        description: service.desc,
        provider: { '@type': 'Organization', name: site.brand, url: siteUrl },
        areaServed: 'United States',
        serviceType: service.title,
      },
      {
        '@type': 'FAQPage',
        '@id': `${serviceUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What should I prepare before hiring for ${service.title.toLowerCase()}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Start with ${service.firstWeek[0].toLowerCase()}, then ${service.firstWeek[1].toLowerCase()}. Keep access narrow until you have reviewed the first outputs.` },
          },
          {
            '@type': 'Question',
            name: `What work fits ${service.title.toLowerCase()}?`,
            acceptedAnswer: { '@type': 'Answer', text: `Useful first tasks include ${service.bestFor.slice(0, 3).join(', ')}. Begin with repeated work that has examples and approval rules.` },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: serviceUrl },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main>
      <JsonLd data={schema} />
      <section className="service-hero">
        <div className="container two">
          <div>
            <p className="eyebrow">Filipino service team</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn primary" href="/contact">Plan this service lane</a>
          </div>
          <div className="hero-card"><img src={site.serviceImage} alt={site.alt} /></div>
        </div>
      </section>
      <section className="section">
        <div className="container cards">
          <div className="card"><h3>Good first tasks</h3><ul>{service.bestFor.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div className="card"><h3>First-week setup</h3><ol>{service.firstWeek.map((item) => <li key={item}>{item}</li>)}</ol></div>
          <div className="card"><h3>Keep these controls</h3><ul>{service.ownerControls.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
      </section>
      <section className="section band">
        <div className="container two">
          <div><p className="eyebrow">The handoff rule</p><h2>Say what needs approval before the work moves.</h2><p>Start the Filipino service team with clean examples, a short daily list, and limits on what anyone can decide alone.</p></div>
          <div className="card"><h3>Keep this on the brief</h3><p className="quote">"If the task touches money, access, legal risk, a customer promise, or brand voice, write the owner rule first."</p></div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>;
}
