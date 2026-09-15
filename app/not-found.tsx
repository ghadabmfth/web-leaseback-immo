import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Page introuvable',
  description: 'La page recherchée a été déplacée ou n’existe plus.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main style={{ display: 'block' }}>
      <div>
        <section style={{ background: "var(--lb-white)", padding: "clamp(48px,5.4vw,96px) var(--page-x) var(--section-y)" }}>
          <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1.05fr) minmax(0,1fr)", alignItems: "center" }}>
            <div data-reveal="">
              <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Erreur 404</span></div>
              <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,700px)", fontSize: "clamp(32px,3.4vw,56px)" }}>Oups… il manque une tuile.</h1>
              <p style={{ margin: "20px 0 0", maxWidth: "600px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>La page que vous cherchez a été déplacée ou n’existe plus. Le reste du bâtiment est intact — voici par où reprendre.</p>
              <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "32px" }}>
                <Button href="/" tone="primary">Revenir à l'accueil</Button>
                <Link href="/eligibilite" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Tester mon éligibilité</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
              </div>
              <div style={{ marginTop: "clamp(32px,3.2vw,52px)", maxWidth: "520px" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Pages les plus consultées</div>
                <div style={{ marginTop: "14px" }}>
                  <Link href="/credit-bail-immobilier" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Crédit-bail immobilier</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
                  <Link href="/fiducie-surete" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Fiducie-sûreté</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
                  <Link href="/quest-ce-que-le-leaseback" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Qu’est-ce que le leaseback ?</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
                  <Link href="/faq" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "15px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Questions fréquentes</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
                </div>
              </div>
            </div>
            <div className="lb-404" data-reveal="" style={{ display: "grid", placeItems: "center", minHeight: "clamp(280px,26vw,420px)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(4px,.6vw,10px)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(120px,17vw,300px)", lineHeight: ".86", letterSpacing: "-.06em", color: "var(--lb-ink)" }}>
                <span>4</span>
                <span className="lb-404__dot" style={{ display: "block", flex: "none", width: ".62em", height: ".62em", borderRadius: "50%", background: "var(--lb-rose)", alignSelf: "center" }}></span>
                <span>4</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
