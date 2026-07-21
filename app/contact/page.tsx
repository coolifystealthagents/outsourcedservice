import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request a staffing plan for Filipino talent. Share the work, tools, schedule, and quality needs.',
};

export default function Contact() {
  const siteUrl = `https://${site.domain.toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
      ] },
    ],
  };

  return <>
    <Header />
    <main className="section content-page contact-page">
      <JsonLd data={schema} />
      <div className="container two">
        <div>
          <p className="eyebrow">Philippines staffing intake</p>
          <h1>Turn the task list into a service brief.</h1>
          <p className="lead">Tell us what needs handling. The follow-up stays focused on Filipino talent, the tools they will use, and the rules that keep important decisions with you.</p>
          <div className="card">
            <h2>What the brief should cover</h2>
            <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="card">
            <h2>Five questions worth answering</h2>
            <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
          <p className="callout"><b>Philippines-only fit:</b> {staffingFitNote}</p>
        </div>
        <form className="card intake-form" action="/thank-you">
          <h2>Describe the work</h2>
          <label>Name<input required name="name" /></label>
          <label>Email<input required name="email" type="email" /></label>
          <label>Company or website<input name="company" /></label>
          <label>What role or work do you want staffed?<textarea name="tasks" rows={6} /></label>
          <label>What needs the most attention?
            <select name="concern">
              <option>Finding the right Filipino talent</option>
              <option>Quality checks and reporting</option>
              <option>Coverage and schedule</option>
              <option>Tool access and data safety</option>
              <option>Growing beyond one role</option>
            </select>
          </label>
          <button className="btn primary" type="submit">Send my service brief</button>
          <small>This independent site may route your request to a Philippines staffing partner. Talent sourcing is limited to the Philippines.</small>
        </form>
      </div>
    </main>
    <Footer />
  </>;
}
