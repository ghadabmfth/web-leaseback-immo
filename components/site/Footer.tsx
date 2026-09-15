import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { routes } from '@/lib/routes';

const col = { display: 'flex', flexDirection: 'column', gap: 20 } as const;
const colTitle = {
  fontWeight: 500,
  fontSize: 14,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--lb-rose)',
} as const;
const flink = { fontSize: 16, fontWeight: 400, color: 'var(--lb-ink)' } as const;
const legal = {
  fontSize: 14,
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'rgba(0,0,0,.5)',
} as const;

export function SiteFooter() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'var(--lb-white)' }}>
      <span className="lb-dots" aria-hidden="true" />
      <span className="lb-dots lb-dots--2" aria-hidden="true" />
      <div
        style={{
          position: 'relative',
          maxWidth: 1770,
          marginInline: 'auto',
          padding: 'clamp(52px,5vw,90px) var(--page-x) clamp(24px,2.2vw,36px)',
        }}
      >
        <div
          className="lb-foot"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,minmax(0,220px)) minmax(0,1fr)',
            gap: 'clamp(28px,3.4vw,56px)',
            alignItems: 'start',
          }}
        >
          <div style={col}>
            <div style={colTitle}>Solutions</div>
            <Link href={routes.creditBail} className="lb-flink" style={flink}>
              Crédit-bail immobilier
            </Link>
            <Link href={routes.fiducie} className="lb-flink" style={flink}>
              Fiducie-sûreté
            </Link>
            <Link href={routes.comparatif} className="lb-flink" style={flink}>
              Comparatif des deux véhicules
            </Link>
            <Link href={routes.eligibilite} className="lb-flink" style={flink}>
              Tester mon éligibilité
            </Link>
          </div>

          <div style={col}>
            <div style={colTitle}>Comprendre</div>
            <Link href={routes.leaseback} className="lb-flink" style={flink}>
              Qu&rsquo;est-ce que le leaseback ?
            </Link>
            <Link href={routes.avantages} className="lb-flink" style={flink}>
              Avantages et limites
            </Link>
            <Link href={routes.tresorerie} className="lb-flink" style={flink}>
              Obtenir de la trésorerie
            </Link>
            <Link href={routes.liquidites} className="lb-flink" style={flink}>
              Débloquer des liquidités
            </Link>
          </div>

          <div style={col}>
            <div style={colTitle}>Contact</div>
            <a href="mailto:contact@leaseback.immo" className="lb-flink" style={flink}>
              contact@leaseback.immo
            </a>
            <a href="tel:0255994407" className="lb-flink" style={flink}>
              02 55 99 44 07
            </a>
            <Link href={routes.approche} className="lb-flink" style={flink}>
              Notre approche
            </Link>
            <Link href={routes.contact} className="lb-flink" style={flink}>
              Nous écrire
            </Link>
          </div>

          <div className="lb-foot__logo" style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 4 }}>
            <Link href={routes.accueil} style={{ display: 'block' }} aria-label="leaseback.immo — accueil">
              <Logo height={42} />
            </Link>
          </div>
        </div>

        <div style={{ height: '0.5px', margin: 'clamp(40px,3.6vw,64px) 0 20px', backgroundColor: 'var(--lb-rose)' }} />

        <div
          className="lb-footbar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
          }}
        >
          <span style={{ ...legal, fontWeight: 400 }}>
            © 2026 leaseback.immo — Bluelease · ORIAS n° 25000436
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 400, ...legal }}>
            <Link href={routes.mentions} className="lb-flink" style={legal}>
              Mentions légales
            </Link>
            <span>·</span>
            <Link href={routes.confidentialite} className="lb-flink" style={legal}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
