import type { Metadata } from 'next';
import { SignatureGenerator } from '@/components/signature/SignatureGenerator';

export const metadata: Metadata = {
  title: 'Générateur de signature e-mail',
  description: "Outil interne : générez la signature e-mail HTML des collaborateurs Bluelease / leaseback.immo.",
  alternates: { canonical: '/signature-email' },
  robots: { index: false, follow: false },
};

export default function SignatureEmailPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: 'relative', background: 'var(--lb-white)', padding: 'clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,48px)' }}>
        <div style={{ maxWidth: '1770px', marginInline: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <span style={{ width: 36, height: 2, background: 'var(--lb-rose)' }} />
            <span style={{ fontFamily: 'var(--font-alt)', fontWeight: 500, fontSize: 14, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--lb-rose)' }}>
              Outil interne
            </span>
          </div>
          <h1 className="lb-editorial" style={{ margin: '20px 0 0', maxWidth: 'min(100%,760px)', fontSize: 'clamp(32px,3.6vw,52px)' }}>
            Générateur de signature e-mail
          </h1>
          <p style={{ margin: '20px 0 0', maxWidth: 640, fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 'var(--type-intro-lh)', color: 'var(--lb-ink-2)' }}>
            Renseignez vos informations, prévisualisez le résultat, puis copiez la signature prête à coller dans
            Outlook, Gmail, Outlook Web ou Apple Mail. Le code généré est du HTML de tableaux, sans script ni police
            externe, pour un rendu fidèle chez tous les destinataires.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--lb-white)', padding: '0 var(--page-x) var(--section-y)' }}>
        <SignatureGenerator />
      </section>
    </div>
  );
}
