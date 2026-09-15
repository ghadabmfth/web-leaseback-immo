import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { Fa } from '@/components/ui/Fa';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Contact",
  description: "Échangez avec Bluelease sur votre projet de refinancement immobilier professionnel. Réponse sous 48 heures maximum.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    description: "Échangez avec Bluelease sur votre projet de refinancement immobilier professionnel. Réponse sous 48 heures maximum.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Contact</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Parlons de votre dossier</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Une question sur le crédit-bail, la fiducie-sûreté ou un dossier en cours ? Nous sommes joignables directement, du lundi au vendredi, et nous répondons sous 48 heures maximum.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <a href="tel:0255994407" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>02 55 99 44 07</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Fa name="phone" style={{ fontSize: "11px", lineHeight: "1" }} /></span></span></a>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/contact-poignee.jpg) center 45%/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Bureaux</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Nantes</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Horaires</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Lun-ven · 9h-18h</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Réponse</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Sous 48 h maximum</div></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Coordonnées</span></div>
            <h2 style={{ margin: "20px 0 26px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Nous joindre directement</h2>
            <a href="tel:0255994407" className="lb-flink" style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)", color: "var(--lb-ink)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="phone" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <span><span style={{ display: "block", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>Téléphone</span><span style={{ display: "block", marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", letterSpacing: "-.01em" }}>02 55 99 44 07</span></span>
            </a>
            <a href="mailto:contact@leaseback.immo" className="lb-flink" style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)", color: "var(--lb-ink)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="envelope" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <span><span style={{ display: "block", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>E-mail</span><span style={{ display: "block", marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", letterSpacing: "-.01em" }}>contact@leaseback.immo</span></span>
            </a>
            <div className="lb-flink" style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)", color: "var(--lb-ink)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="location-dot" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <span><span style={{ display: "block", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>Adresse</span><span style={{ display: "block", marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", letterSpacing: "-.01em" }}>15 Boulevard Gabriel Guist'hau, 44000 Nantes</span></span>
            </div>
            <div className="lb-flink" style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)", color: "var(--lb-ink)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="building" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <span><span style={{ display: "block", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>Société</span><span style={{ display: "block", marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", letterSpacing: "-.01em" }}>Bluelease · ORIAS n° 25000436</span></span>
            </div>
            <p style={{ margin: "24px 0 0", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)" }}>Nous n'intervenons qu'auprès de personnes morales. Les demandes de particuliers ne peuvent pas être traitées.</p>
          </div>

          <div data-reveal="" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "0 10px 30px rgba(0,0,0,.10)", padding: "clamp(26px,3vw,44px)" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
