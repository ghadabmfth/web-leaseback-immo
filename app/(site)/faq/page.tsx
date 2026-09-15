import type { Metadata } from 'next';
import { FaqAccordion } from '@/components/faq/FaqAccordion';
import { FAQ_ALL } from '@/lib/faq';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Questions fréquentes — Leaseback immobilier",
  description: "Délais, fiscalité, garanties, restitution, option d’achat et honoraires : les points soulevés avant d’engager une opération.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Questions fréquentes — Leaseback immobilier",
    description: "Délais, fiscalité, garanties, restitution, option d’achat et honoraires : les points soulevés avant d’engager une opération.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>FAQ</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Les questions que les dirigeants posent en premier</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Délais, fiscalité, garanties, conditions de sortie : les points soulevés le plus souvent avant d'engager une opération.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/contact" tone="primary">Poser ma question</Button>
              <Link href="/quest-ce-que-le-leaseback" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Comprendre le leaseback</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-mixte.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Réponse</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Sous 48 h maximum</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Qualification</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Gratuite</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Engagement</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Aucun</div></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--lb-white)", padding: "clamp(28px,3vw,52px) var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)" }}>
          <div data-reveal="">
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "14px", paddingBottom: "20px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.35vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Huit questions, quatre sujets</span>
              <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.55)" }}>Délais · Fiscalité · Garanties · Sortie</span>
            </div>
            <FaqAccordion items={FAQ_ALL} />
</div>
          <div className="lb-sticky" data-reveal="" style={{ alignSelf: "start", position: "sticky", top: "130px", display: "flex", flexDirection: "column", gap: "clamp(16px,1.6vw,22px)" }}>
            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
              <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "11px" }}><span style={{ width: "26px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Un doute</span></div>
              <div style={{ position: "relative", marginTop: "16px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Votre question n’est pas là ?</div>
              <p style={{ position: "relative", margin: "12px 0 24px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Un responsable de dossier vous rappelle sous 48 heures maximum. La qualification est gratuite et sans engagement.</p>
              <div style={{ position: "relative" }}>
                <Button href="/contact" tone="primary" full={true}>Poser ma question</Button>
              </div>
              <div style={{ position: "relative", marginTop: "20px", paddingTop: "18px", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", flexDirection: "column", gap: "13px" }}>
                <a href="tel:0255994407" style={{ display: "flex", alignItems: "center", gap: "13px", fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}><Fa name="phone" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />02 55 99 44 07</a>
                <a href="mailto:contact@leaseback.immo" style={{ display: "flex", alignItems: "center", gap: "13px", fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}><Fa name="envelope" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />contact@leaseback.immo</a>
              </div>
            </div>
            <div style={{ borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,34px)" }}>
              <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Pour aller plus loin</div>
              <div style={{ marginTop: "16px" }}>
              <Link href="/quest-ce-que-le-leaseback" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Qu’est-ce que le leaseback ?</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
              <Link href="/avantages-et-limites" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Avantages et limites</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
              <Link href="/comparatif" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Comparatif des instruments</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
              <Link href="/actifs-financables" className="lb-flink" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", padding: "14px 0", borderTop: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Actifs finançables</span><Fa name="arrow-right" style={{ flex: "none", fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
