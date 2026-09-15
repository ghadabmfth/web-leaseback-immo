import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { SiteHeader } from '@/components/site/Header';
import { SiteFooter } from '@/components/site/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE_NAME, SITE_URL } from '@/lib/routes';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'leaseback.immo — Refinancement immobilier professionnel pour entreprises',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Crédit-bail immobilier et fiducie-sûreté : mobilisez la valeur de vos murs professionnels tout en conservant l’usage de vos locaux.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B2A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body>
        <div className="lb-site" style={{ width: '100%', background: 'var(--lb-white)', minHeight: '100vh' }}>
          <ScrollReveal />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
