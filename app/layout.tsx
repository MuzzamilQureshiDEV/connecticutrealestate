import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { site } from '@/lib/site';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileCallBar } from '@/components/layout/MobileCallBar';
import './globals.css';

/**
 * FONTS — swap these two imports to re-typeset the site.
 * `--font-display` drives headings, `--font-inter` drives body copy; both are
 * mapped in tailwind.config.ts.
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

/** Root SEO. Individual pages override title/description via their own export. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Coordinated Connecticut Real Estate`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'Connecticut real estate',
    'CT homes for sale',
    'Connecticut realtor',
    'Connecticut commercial real estate',
    'CT property management',
    'Connecticut relocation',
  ],
  authors: [{ name: site.broker.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Coordinated Connecticut Real Estate`,
    description: site.description,
    locale: 'en_US',
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Coordinated Connecticut Real Estate`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /** Local business structured data — helps the brokerage surface in local search. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    telephone: site.office.phone,
    slogan: site.promise,
    areaServed: { '@type': 'State', name: 'Connecticut' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.office.street,
      addressLocality: site.office.city,
      addressRegion: site.office.state,
      postalCode: site.office.zip,
      addressCountry: 'US',
    },
    founder: { '@type': 'Person', name: site.broker.name, jobTitle: site.broker.title },
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // Structured data is static and author-controlled.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          {/* pt clears the fixed navbar; pb clears the mobile call bar. */}
          <main id="main" tabIndex={-1} className="pt-[76px] pb-[68px] sm:pb-0">
            {children}
          </main>
          <Footer />
          <MobileCallBar />
        </Providers>
      </body>
    </html>
  );
}
