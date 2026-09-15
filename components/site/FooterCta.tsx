import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { routes } from '@/lib/routes';

/** The navy eligibility band that closes every page except /eligibilite and /contact. */
export function FooterCta() {
  return (
    <section style={{ background: 'var(--lb-white)', padding: '0 var(--page-x) clamp(40px,4vw,72px)' }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          maxWidth: 1770,
          marginInline: 'auto',
          borderRadius: 'var(--r-25)',
          background: 'var(--lb-navy)',
          boxShadow: 'var(--shadow-card-ink)',
        }}
      >
        <div
          className="lb-hide-md"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '42%',
            background: 'url(/img/approche.jpg) center/cover no-repeat',
          }}
        />
        <div
          className="lb-hide-md"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '42%',
            background: 'linear-gradient(90deg,var(--lb-navy) 0%,rgba(13,27,42,0) 60%)',
          }}
        />
        <div className="lb-ondark" style={{ position: 'relative', padding: 'clamp(38px,4vw,72px) clamp(26px,3.4vw,68px)' }}>
          <Eyebrow marginBottom={22}>Test d&rsquo;éligibilité</Eyebrow>
          <h2
            style={{
              margin: 0,
              maxWidth: 640,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--type-h2-size)',
              lineHeight: 1.15,
              letterSpacing: '-.03em',
              color: 'var(--lb-white)',
            }}
          >
            Testez votre éligibilité en 5 minutes
          </h2>
          <p
            style={{
              margin: '18px 0 0',
              maxWidth: 540,
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 'var(--type-intro-lh)',
              color: 'rgba(255,255,255,.82)',
            }}
          >
            Quatre questions, une pré-orientation immédiate, puis le rappel d&apos;un responsable de dossier sous 48
            heures maximum.
          </p>
          <div className="lb-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 32 }}>
            <Button tone="primary" href={routes.eligibilite}>
              Tester mon éligibilité
            </Button>
            <Button tone="ghost" href={routes.contact}>
              Parler à un expert
            </Button>
          </div>
          <div style={{ marginTop: 20, fontFamily: 'var(--font-alt)', fontSize: 14, color: 'rgba(255,255,255,.6)' }}>
            Gratuit · Sans engagement · Réponse sous 48h
          </div>
        </div>
      </div>
    </section>
  );
}
