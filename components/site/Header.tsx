'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { routes } from '@/lib/routes';

const navLink = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '18px 0',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: 1,
  whiteSpace: 'nowrap',
  color: 'var(--lb-ink)',
} as const;

const megaCard = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 14,
  padding: '18px 20px',
  borderRadius: 'var(--r-16)',
  boxShadow: 'var(--ring-hairline)',
  color: 'var(--lb-ink)',
} as const;

const megaColTitle = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 16,
  color: 'var(--lb-rose)',
} as const;

const megaColLink = {
  fontFamily: 'var(--font-body)',
  fontWeight: 300,
  fontSize: 16,
  color: 'var(--lb-ink)',
} as const;

const drawerLink = {
  padding: '15px 0',
  borderBottom: '1px solid rgba(0,0,0,.08)',
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 16,
  color: 'var(--lb-ink)',
} as const;

function MegaCard({ href, label }: { href: string; label: React.ReactNode }) {
  return (
    <Link href={href} className="lb-megacard" style={megaCard}>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, lineHeight: '26px' }}>{label}</span>
      <span style={{ display: 'grid', placeItems: 'center', transform: 'rotate(-90deg)' }}>
        <Fa name="chevron-down" style={{ fontSize: 12, lineHeight: 1, color: 'var(--lb-rose)' }} />
      </span>
    </Link>
  );
}

function ArrowLink({ label }: { label: string }) {
  return (
    <span className="lb-arrowlink" style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-.01em' }}>
        {label}
      </span>
      <span
        className="lb-arrowlink__dot"
        style={{
          flex: 'none',
          display: 'grid',
          placeItems: 'center',
          width: 28,
          height: 27,
          borderRadius: 999,
          background: 'var(--lb-rose)',
          color: 'var(--lb-white)',
        }}
      >
        <Icon name="arrow" size={10} color="var(--lb-white)" />
      </span>
    </span>
  );
}

function MegaBanner({ title, cta, href }: { title: React.ReactNode; cta: string; href: string }) {
  return (
    <div
      className="lb-ondark"
      style={{
        marginTop: 28,
        borderRadius: 'var(--r-15)',
        background: 'var(--lb-navy)',
        padding: 'clamp(20px,2vw,28px) clamp(22px,2.4vw,40px)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(21px,1.7vw,30px)',
          lineHeight: 1.25,
          color: 'var(--lb-white)',
        }}
      >
        {title}
      </span>
      <Button tone="primary" size="sm" href={href}>
        {cta}
      </Button>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mega, setMega] = useState<'solutions' | 'comprendre' | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [compact, setCompact] = useState(false);

  const closeMega = useCallback(() => setMega(null), []);

  useEffect(() => {
    const onScroll = () => setCompact((window.scrollY || document.documentElement.scrollTop || 0) > 90);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Any navigation closes whatever was open (state derived during render — no effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMega(null);
    setDrawer(false);
  }

  const on = (...paths: string[]) => (paths.includes(pathname) ? 'var(--lb-rose)' : 'transparent');
  const hdrClass = compact ? 'is-compact is-stuck' : '';

  return (
    <header
      onMouseLeave={closeMega}
      className={hdrClass}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        background: 'rgba(255,255,255,.94)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
      }}
    >
      <div
        className={`lb-hdr ${hdrClass}`}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          columnGap: 24,
          padding: '0 var(--header-x)',
          maxWidth: 1920,
          marginInline: 'auto',
        }}
      >
        <Link href={routes.accueil} style={{ order: 1, display: 'block', flex: 'none', padding: '20px 0' }}>
          <Logo height={32} />
        </Link>

        <nav
          className="lb-header__nav"
          style={{
            order: 3,
            width: '100%',
            display: 'flex',
            alignItems: 'stretch',
            gap: 'clamp(18px,2.6vw,44px)',
            borderTop: '1px solid rgba(0,0,0,.08)',
          }}
          aria-label="Navigation principale"
        >
          <div onMouseEnter={() => setMega('solutions')} style={{ display: 'flex' }}>
            <Link
              href={routes.creditBail}
              className="lb-navlink"
              style={{ ...navLink, gap: 9, borderBottom: `3px solid ${on(routes.creditBail, routes.fiducie)}` }}
            >
              Solutions
              <Fa name="chevron-down" style={{ fontSize: 11, lineHeight: 1, color: 'var(--lb-rose)' }} />
            </Link>
          </div>
          <div onMouseEnter={() => setMega('comprendre')} style={{ display: 'flex' }}>
            <Link
              href={routes.leaseback}
              className="lb-navlink"
              style={{ ...navLink, gap: 9, borderBottom: `3px solid ${on(routes.leaseback, routes.avantages)}` }}
            >
              Comprendre
              <Fa name="chevron-down" style={{ fontSize: 11, lineHeight: 1, color: 'var(--lb-rose)' }} />
            </Link>
          </div>
          <Link
            href={routes.approche}
            className="lb-navlink"
            onMouseEnter={closeMega}
            style={{ ...navLink, borderBottom: `3px solid ${on(routes.approche)}` }}
          >
            Notre approche
          </Link>
          <Link
            href={routes.contact}
            className="lb-navlink"
            onMouseEnter={closeMega}
            style={{ ...navLink, borderBottom: `3px solid ${on(routes.contact)}` }}
          >
            Contact
          </Link>
        </nav>

        <div
          className="lb-hdr__right"
          style={{ order: 2, marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'clamp(14px,2vw,30px)' }}
        >
          <Link
            href={routes.approche}
            className="lb-navlink lb-hide-md lb-hdr__util"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              fontFamily: 'var(--font-alt)',
              fontWeight: 400,
              fontSize: 15,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              color: 'var(--lb-ink-2)',
              whiteSpace: 'nowrap',
            }}
          >
            Le groupe
          </Link>

          <a
            href="tel:0255994407"
            className="lb-header__phone"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 16,
              color: 'var(--lb-ink)',
              whiteSpace: 'nowrap',
            }}
          >
            <Fa name="phone" style={{ fontSize: 19, lineHeight: 1, color: 'var(--lb-rose)' }} />
            <span>02 55 99 44 07</span>
          </a>

          <div className="lb-hide-md-cta">
            <Button tone="primary" size="sm" href={routes.eligibilite} style={{ minWidth: 0 }}>
              Tester mon éligibilité
            </Button>
          </div>

          <Link
            href={routes.eligibilite}
            className="lb-hdr__cta"
            style={{ display: 'none', alignItems: 'center', gap: 16, whiteSpace: 'nowrap', color: 'var(--lb-ink)' }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-.01em' }}>
              Tester mon éligibilité
            </span>
            <span
              className="lb-hdr__cta-dot"
              style={{
                flex: 'none',
                display: 'grid',
                placeItems: 'center',
                width: 28,
                height: 27,
                borderRadius: 999,
                background: 'var(--lb-rose)',
                color: 'var(--lb-white)',
              }}
            >
              <Icon name="arrow" size={10} color="var(--lb-white)" />
            </span>
          </Link>

          <button
            type="button"
            className="lb-header__burger"
            aria-label="Menu"
            aria-expanded={drawer}
            onClick={() => setDrawer((d) => !d)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: 0,
              width: 40,
              height: 40,
              cursor: 'pointer',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
              flex: 'none',
            }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--lb-ink)' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--lb-ink)' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: 'var(--lb-ink)' }} />
          </button>
        </div>
      </div>

      {mega === 'solutions' && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            background: 'var(--lb-white)',
            boxShadow: '0 18px 40px rgba(0,0,0,.12)',
            animation: 'lbMega .2s cubic-bezier(.22,.61,.36,1) both',
          }}
        >
          <div style={{ maxWidth: 1920, marginInline: 'auto', padding: '30px var(--header-x) 34px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24 }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: 'var(--lb-rose)' }}>
                Aller à l&rsquo;essentiel
              </span>
              <Link
                href={routes.leaseback}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 16,
                  color: 'var(--lb-ink)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 4,
                }}
              >
                <ArrowLink label="Tout l’univers du leaseback" />
              </Link>
            </div>

            <div
              style={{
                marginTop: 18,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
                gap: 16,
              }}
            >
              <MegaCard
                href={routes.creditBail}
                label={
                  <>
                    Crédit-bail
                    <br />
                    immobilier
                  </>
                }
              />
              <MegaCard href={routes.fiducie} label="Fiducie-sûreté" />
              <MegaCard
                href={routes.comparatif}
                label={
                  <>
                    Comparatif des
                    <br />
                    deux instruments
                  </>
                }
              />
              <MegaCard
                href={routes.actifs}
                label={
                  <>
                    Actifs
                    <br />
                    finançables
                  </>
                }
              />
            </div>

            <div
              style={{
                marginTop: 32,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
                gap: 'clamp(20px,3vw,48px)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Crédit-bail immobilier</span>
                <Link href={`${routes.creditBail}#definition`} style={megaColLink}>
                  Qu&rsquo;est-ce que le crédit-bail ?
                </Link>
                <Link href={`${routes.creditBail}#besoins`} style={megaColLink}>
                  Pour quels besoins ?
                </Link>
                <Link href={`${routes.creditBail}#avantages`} style={megaColLink}>
                  Les avantages du crédit-bail
                </Link>
                <Link href={`${routes.creditBail}#fonctionnement`} style={megaColLink}>
                  Comment ça fonctionne ?
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Fiducie-sûreté</span>
                <Link href={`${routes.fiducie}#definition`} style={megaColLink}>
                  Qu&rsquo;est-ce que la fiducie-sûreté ?
                </Link>
                <Link href={`${routes.fiducie}#concernes`} style={megaColLink}>
                  Qui est concerné ?
                </Link>
                <Link href={`${routes.fiducie}#avantages`} style={megaColLink}>
                  Les avantages de la fiducie-sûreté
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Actifs finançables</span>
                <Link href={`${routes.actifs}#types`} style={megaColLink}>
                  Bureaux
                </Link>
                <Link href={`${routes.actifs}#types`} style={megaColLink}>
                  Industriel &amp; logistique
                </Link>
                <Link href={`${routes.actifs}#types`} style={megaColLink}>
                  Commerce
                </Link>
                <Link href={`${routes.actifs}#types`} style={megaColLink}>
                  Ensembles mixtes
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Seuils</span>
                <span style={{ ...megaColLink, color: 'rgba(0,0,0,.72)' }}>Crédit-bail : dès 1 M€</span>
                <span style={{ ...megaColLink, color: 'rgba(0,0,0,.72)' }}>Fiducie : dès 5 M€</span>
                <span style={{ ...megaColLink, color: 'rgba(0,0,0,.72)' }}>France métropolitaine</span>
              </div>
            </div>

            <MegaBanner
              title={
                <>
                  Débloquez la trésorerie
                  <br />
                  immobilisée dans vos murs
                </>
              }
              cta="Tester mon éligibilité"
              href={routes.eligibilite}
            />
          </div>
        </div>
      )}

      {mega === 'comprendre' && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            background: 'var(--lb-white)',
            boxShadow: '0 18px 40px rgba(0,0,0,.12)',
            animation: 'lbMega .2s cubic-bezier(.22,.61,.36,1) both',
          }}
        >
          <div style={{ maxWidth: 1920, marginInline: 'auto', padding: '30px var(--header-x) 34px' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: 'var(--lb-rose)' }}>
              Comprendre avant de décider
            </span>
            <div
              style={{
                marginTop: 18,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
                gap: 16,
              }}
            >
              <MegaCard
                href={routes.leaseback}
                label={
                  <>
                    Qu&rsquo;est-ce que
                    <br />
                    le leaseback ?
                  </>
                }
              />
              <MegaCard
                href={routes.avantages}
                label={
                  <>
                    Avantages
                    <br />
                    et limites
                  </>
                }
              />
              <MegaCard
                href={routes.faq}
                label={
                  <>
                    Questions
                    <br />
                    fréquentes
                  </>
                }
              />
              <MegaCard
                href={routes.tresorerie}
                label={
                  <>
                    Obtenir de
                    <br />
                    la trésorerie
                  </>
                }
              />
              <MegaCard
                href={routes.liquidites}
                label={
                  <>
                    Débloquer de
                    <br />
                    la trésorerie
                  </>
                }
              />
            </div>
            <div
              style={{
                marginTop: 30,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
                gap: 'clamp(20px,3vw,48px)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Le mécanisme</span>
                <Link href={`${routes.leaseback}#definition`} style={megaColLink}>
                  Définition du leaseback immobilier
                </Link>
                <Link href={`${routes.leaseback}#etapes`} style={megaColLink}>
                  Les étapes d&rsquo;une cession-bail immobilière
                </Link>
                <Link href={`${routes.leaseback}#cadre`} style={megaColLink}>
                  Cadre juridique et fiscal
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Arbitrer</span>
                <Link href={`${routes.avantages}#avantages`} style={megaColLink}>
                  Les avantages du leaseback
                </Link>
                <Link href={`${routes.avantages}#inconvenients`} style={megaColLink}>
                  Les inconvénients à considérer
                </Link>
                <Link href={`${routes.comparatif}#lequel`} style={megaColLink}>
                  Lequel pour votre dossier ?
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Questions fréquentes</span>
                <Link href={routes.faq} style={megaColLink}>
                  Délais réels d&rsquo;une opération
                </Link>
                <Link href={routes.faq} style={megaColLink}>
                  Traitement fiscal des loyers
                </Link>
                <Link href={routes.faq} style={megaColLink}>
                  Sortie avant le terme
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={megaColTitle}>Nous</span>
                <Link href={`${routes.approche}#conviction`} style={megaColLink}>
                  Notre approche
                </Link>
                <Link href={`${routes.approche}#bluelease`} style={megaColLink}>
                  Bluelease — ORIAS 25000436
                </Link>
                <Link href={routes.mentions} style={megaColLink}>
                  Mentions légales
                </Link>
              </div>
            </div>

            <MegaBanner
              title={
                <>
                  Une question sur votre
                  <br />
                  situation précise ?
                </>
              }
              cta="Nous contacter"
              href={routes.contact}
            />
          </div>
        </div>
      )}

      {drawer && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--lb-white)',
            boxShadow: 'var(--shadow-card)',
            padding: '8px var(--header-x) 26px',
            boxSizing: 'border-box',
            maxHeight: '70vh',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          <Link href={routes.creditBail} style={drawerLink}>
            Crédit-bail immobilier
          </Link>
          <Link href={routes.fiducie} style={drawerLink}>
            Fiducie-sûreté
          </Link>
          <Link href={routes.comparatif} style={drawerLink}>
            Comparatif des deux véhicules
          </Link>
          <Link href={routes.actifs} style={drawerLink}>
            Actifs finançables
          </Link>
          <Link href={routes.leaseback} style={drawerLink}>
            Qu&rsquo;est-ce que le leaseback ?
          </Link>
          <Link href={routes.avantages} style={drawerLink}>
            Avantages et limites
          </Link>
          <Link href={routes.faq} style={drawerLink}>
            Questions fréquentes
          </Link>
          <Link href={routes.approche} style={drawerLink}>
            Notre approche
          </Link>
          <Link href={routes.tresorerie} style={drawerLink}>
            Obtenir de la trésorerie
          </Link>
          <Link href={routes.liquidites} style={drawerLink}>
            Débloquer des liquidités
          </Link>
          <Link href={routes.contact} style={drawerLink}>
            Contact
          </Link>
          <Link
            href={routes.eligibilite}
            style={{
              padding: '15px 0',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: 16,
              color: 'var(--lb-ink)',
            }}
          >
            <ArrowLink label="Tester mon éligibilité" />
          </Link>
        </div>
      )}
    </header>
  );
}
