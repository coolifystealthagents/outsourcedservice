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
  return <html lang="en"><body>{children}</body></html>;
}
