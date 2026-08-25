import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://outsourcedservice.com'),
  title: {
    default: 'Outsourced Service | Filipino service teams',
    template: '%s | Outsourced Service',
  },
  description: 'Plan a Filipino service team around recurring work, safe access, clear handoffs, and practical review rules.',
  openGraph: {
    title: 'Outsourced Service',
    description: 'Plan recurring business work for a Filipino service team.',
    url: 'https://outsourcedservice.com',
    siteName: 'Outsourced Service',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'outsourced-service',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
