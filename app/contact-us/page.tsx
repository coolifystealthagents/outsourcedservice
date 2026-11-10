import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import StandardContactForm from './StandardContactForm';
import { TestimonialsRail } from '../booking-components';
import './trusted-contact.css';
import './mobile-containment.css';

export const metadata: Metadata = {
  title: 'Contact Outsourced Service | Plan Your Team',
  description: 'Share the recurring work, tools, schedule, and review rules for your Philippines-based service team.',
  alternates: { canonical: 'https://outsourcedservice.com/contact-us' },
  openGraph: {
    title: 'Contact Outsourced Service | Plan Your Team',
    description: 'Share the recurring work, tools, schedule, and review rules for your Philippines-based service team.',
    url: 'https://outsourcedservice.com/contact-us',
    siteName: 'Outsourced Service',
    type: 'website',
  },
};

const trustPoints = ['Defined workflows', 'Client-approved access', 'Named review owners'];

export default function ContactUsPage() {
  return <>
    <Header />
    <main className="contact-v3 contact-v4">
      <section className="contact-fold contact-consultation-fold">
        <div className="contact-intro-v3 contact-consultation-intro">
          <p className="eyebrow">Plan a practical service team</p>
          <h1>Take recurring office work out of your team&apos;s day.</h1>
          <p className="lead">Tell us where recurring updates, customer requests, administration, or reporting queues slow the team down. We will help separate delegate-ready work from decisions that should stay with you.</p>
          <div className="contact-trust-chips" aria-label="Consultation principles">
            {trustPoints.map((point) => <span key={point}>{point}</span>)}
          </div>
          <TestimonialsRail compact />
        </div>
        <StandardContactForm endpoint="/api/contact" encoding="form" />
      </section>

      <section className="stealth-team">
        <img className="team-photo" src="/brand/stealth-agents-team-bacolod-group-2026.jpg" width="1906" height="1080" alt="Official Stealth Agents team gathered in Bacolod" />
        <div>
          <p className="eyebrow">Managed operating support</p>
          <h2>About Stealth Agents</h2>
          <p>Outsourced Service is a subsidiary of Stealth Agents. Stealth Agents recruits Philippines-based professionals and supports the managed staffing relationship. Outsourced Service remains the service-planning identity, while Stealth Agents provides recruiting, team support, and operating continuity around the approved role.</p>
          <p className="powered-attribution">Powered by <a href="https://stealthagents.com/">StealthAgents</a></p>
          <a className="tc-about-cta" href="/contact-us#contactPageForm">Plan your free consultation</a>
          <div className="official-plate"><img src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents official logo" /><strong>Official team, Bacolod</strong></div>
        </div>
      </section>

      <section className="contact-depth">
        <div><p className="eyebrow">Prepare the conversation</p><h2>Bring a real queue, not a broad title.</h2><p>A useful scope names what starts the work, the allowed action, the expected output, and the exception that returns to an owner. Examples make candidate matching and first-week review more concrete.</p></div>
        <div><h2>What happens next</h2><ol><li><strong>Submit the service brief.</strong> We review the role, tools, schedule, and boundaries.</li><li><strong>Choose a consultation time.</strong> The thank-you page contains the official OnceHub calendar.</li><li><strong>Confirm the plan.</strong> A completed booking leads to a branded next-steps page.</li></ol></div>
      </section>
    </main>
    <Footer />
  </>;
}
