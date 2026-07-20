import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedservice.com'), title: { default: 'Outsourced Service | Offshore outsourcing guides', template: '%s | Outsourced Service' }, description: 'Stealth Agents-style guides for outsourced service: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Service', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedservice.com', siteName: 'Outsourced Service', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
