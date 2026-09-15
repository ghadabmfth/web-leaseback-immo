import { FooterCta } from '@/components/site/FooterCta';

/** Pages that close on the navy eligibility band. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main style={{ display: 'block' }}>{children}</main>
      <FooterCta />
    </>
  );
}
