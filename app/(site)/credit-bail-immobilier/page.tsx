import type { Metadata } from 'next';
import Image from 'next/image';
import { FloatKey, FloatQuestion } from '@/components/ui/FloatIcons';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Crédit-bail immobilier — Cession-bail sur un actif détenu",
  description: "Cession-bail immobilière réalisée au moyen d’un crédit-bail immobilier, dès 1 M€ de valeur d’actif : mécanisme, avantages, limites et déroulé.",
  alternates: { canonical: "/credit-bail-immobilier" },
  openGraph: {
    title: "Crédit-bail immobilier — Cession-bail sur un actif détenu",
    description: "Cession-bail immobilière réalisée au moyen d’un crédit-bail immobilier, dès 1 M€ de valeur d’actif : mécanisme, avantages, limites et déroulé.",
    url: "/credit-bail-immobilier",
  },
};

export default function CreditBailPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Crédit-bail immobilier</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Refinancez vos murs professionnels tout en conservant leur usage</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Libérez la trésorerie de votre entreprise en cédant vos locaux à un crédit-bailleur tout en conservant leur usage. Découvrez le crédit-bail immobilier pour PME.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/fiducie-surete" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Comparer avec la fiducie</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-bureaux.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Actifs</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 1 M€</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Durée</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>8 à 15 ans</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Sortie</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Option d'achat</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comprendre</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Qu'est-ce que le crédit-bail immobilier ?</h2>
            <p style={{ margin: "20px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Il s'agit d'une cession-bail immobilière réalisée au moyen d'un crédit-bail immobilier, sur un actif que vous détenez déjà. Votre entreprise — ou la SCI qui détient les murs, l'exploitation restant assurée par une autre société du groupe — cède son bien immobilier professionnel à un établissement financier — le crédit-bailleur. Ce dernier vous le reloue immédiatement dans le cadre d'un contrat de crédit-bail. Vous continuez à occuper vos locaux, vous payez des loyers déductibles de votre résultat imposable, et vous conservez la possibilité de redevenir propriétaire à l'issue du contrat en levant l'option d'achat, à un prix convenu dès le départ.</p>
          </div>
          <div data-reveal="" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.6vw,40px)" }}>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Mécanisme en trois temps</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "26px" }}>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Vous cédez votre bien</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Votre entreprise cède son bien immobilier professionnel au crédit-bailleur.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3h8a2 2 0 0 1 2 2v16l-6-3-6 3V5a2 2 0 0 1 2-2Z" /><path d="M9 8h6M9 12h6" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Le crédit-bailleur vous le reloue</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous continuez à occuper vos locaux avec des loyers déductibles.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="16" r="4" /><path d="m11 13 8-8M17 3h4v4" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Vous pouvez lever l'option d'achat</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>À l'échéance, vous pouvez lever l'option d'achat selon les conditions prévues au contrat, à un prix convenu dès l'origine.</p>
                </div>
              </div>
            </div>
            <div style={{ height: "1px", background: "rgba(0,0,0,.1)", margin: "26px 0 20px" }}></div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}><span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Loyers déductibles</span><span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Option d'achat fixée à l'origine</span><span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Trésorerie préservée</span></div>
          </div>
        </div>
      </section>

      <section id="besoins" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "820px", marginInline: "auto", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Nos solutions</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Pour quels besoins ?</h2>
            <p style={{ margin: "16px auto 0", maxWidth: "640px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Quel que soit votre objectif stratégique, le crédit-bail immobilier s'adapte à votre situation.</p>
          </div>
          <div className="lb-grid lb-grid-4" data-reveal="" style={{ marginTop: "clamp(34px,3.4vw,56px)" }}>
            <div className="lb-cardhov" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.2vw,34px)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17l5-5 4 3 6-7" /><path d="M15 8h5v5" /></svg></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,21px)", lineHeight: "1.28", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Financer votre croissance</div>
              <p style={{ margin: "10px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Recruter, investir dans de nouveaux équipements, ouvrir un nouveau site. Transformez votre immobilier en levier de développement.</p>
            </div>
            <div className="lb-cardhov" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.2vw,34px)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 5.6A6.8 6.8 0 0 0 7.4 12a6.8 6.8 0 0 0 10.1 6.4" /><path d="M4 10.3h9.4M4 13.8h9.4" /></svg></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,21px)", lineHeight: "1.28", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Consolider votre trésorerie</div>
              <p style={{ margin: "10px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Renforcer votre fonds de roulement sans contracter une dette classique. Libérez le capital immobilisé dans vos murs.</p>
            </div>
            <div className="lb-cardhov" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.2vw,34px)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.4-2.9 7.9-7 9-4.1-1.1-7-4.6-7-9V6l7-3Z" /></svg></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,21px)", lineHeight: "1.28", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Réduire votre endettement apparent</div>
              <p style={{ margin: "10px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Les effets sur le bilan et les ratios financiers dépendent du référentiel comptable et du montage retenu.</p>
            </div>
            <div className="lb-cardhov" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.2vw,34px)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M6 21V11l6-4 6 4v10" /><path d="M10 21v-5h4v5" /></svg></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,21px)", lineHeight: "1.28", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Financer des travaux</div>
              <p style={{ margin: "10px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Extension, rénovation énergétique, mise aux normes — via avenant au contrat d'origine, sous réserve de l'accord du crédit-bailleur.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="avantages" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px", marginInline: "auto", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Avantages</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Les avantages du crédit-bail immobilier</h2>
            <p style={{ margin: "16px auto 0", maxWidth: "660px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Une solution de financement structurante qui libère votre entreprise des contraintes immobilières.</p>
          </div>
          <div className="lb-grid lb-grid-3" data-reveal="" style={{ marginTop: "clamp(34px,3.4vw,56px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.4vw,38px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 5.6A6.8 6.8 0 0 0 7.4 12a6.8 6.8 0 0 0 10.1 6.4" /><path d="M4 10.3h9.4M4 13.8h9.4" /></svg></span>
                <div>
                  <div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Financiers</div>
                  <div style={{ marginTop: "3px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.3vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Trésorerie &amp; bilan</div>
                </div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.1)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Hypothèse indicative de 80 % de la valeur de l'actif, avant encours, fiscalité et frais</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Effets sur le bilan et les ratios financiers variables selon le référentiel comptable et le montage retenu</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Loyers déductibles dans les limites de la réglementation fiscale applicable (hors quote-part terrain)</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Possibilité de moduler les loyers (constants, dégressifs, personnalisés selon le cycle d'exploitation)</span></li>
              </ul>
              <div style={{ marginTop: "auto", paddingTop: "22px", borderTop: "1px solid rgba(0,0,0,.08)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)" }}>Montant et quotité retenus après expertise de la valeur vénale.</div>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.4vw,38px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 11 8-6 8 6v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z" /><path d="M10 21v-6h4v6" /></svg></span>
                <div>
                  <div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Opérationnels</div>
                  <div style={{ marginTop: "3px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.3vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Usage &amp; flexibilité</div>
                </div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.1)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Conservation totale de l'usage du bien pendant toute la durée du contrat</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Possibilité de sous-louer partiellement les locaux (sous accord du crédit-bailleur)</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Option d'achat convenue dès l'origine — vous maîtrisez la valeur de rachat</span></li>
              </ul>
              <div style={{ marginTop: "auto", paddingTop: "22px", borderTop: "1px solid rgba(0,0,0,.08)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)" }}>Clauses de sous-location et de sortie négociées au cas par cas.</div>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.4vw,38px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9.5 8h5M9.5 12h5" /></svg></span>
                <div>
                  <div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Fiscaux</div>
                  <div style={{ marginTop: "3px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.3vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Optimisation fiscale</div>
                </div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.1)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Loyers déductibles du résultat imposable</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "16px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>TVA récupérable sur les loyers, sous réserve de vos droits à déduction</span></li>
              </ul>
              <div style={{ marginTop: "auto", paddingTop: "22px", borderTop: "1px solid rgba(0,0,0,.08)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)" }}>Effets fiscaux à valider avec votre conseil au regard de votre situation.</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "clamp(24px,3vw,56px) var(--page-x) var(--section-y)" }}>
        <div className="lb-ondark" data-reveal="" style={{ position: "relative", overflow: "hidden", maxWidth: "1770px", marginInline: "auto", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(32px,3.4vw,64px)" }}>
          <span className="lb-soln__halo" style={{ position: "absolute", left: "-70px", bottom: "-80px", width: "220px", height: "220px", borderRadius: "110px", background: "rgba(255,255,255,.05)" }}></span>
          <div style={{ position: "relative", maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comparatif</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--lb-white)" }}>Crédit-bail immobilier ou fiducie-sûreté ?</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "rgba(255,255,255,.82)" }}>Ces deux solutions ne s'adressent pas exactement aux mêmes profils. Le crédit-bail repose sur une logique de cession puis relocation ; la fiducie-sûreté sur un transfert temporaire de propriété en garantie d'un financement, sans cession définitive.</p>
          </div>
          <div className="lb-cmp" style={{ position: "relative", marginTop: "clamp(28px,3vw,46px)", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: "clamp(26px,3vw,56px)", alignItems: "start" }}>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", paddingBottom: "14px", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                <div></div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-rose)" }}>Crédit-bail</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "rgba(255,255,255,.6)" }}>Fiducie-sûreté</div>
              </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Seuil d'entrée</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Dès 1 M €</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Dès 5 M€</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Nature</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Cession puis relocation</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Transfert temporaire en garantie</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Contrepartie</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Loyer déductible</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Intérêts du financement</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Retour du bien</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Levée de l'option d'achat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Extinction de la dette</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Profil type</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>PME et ETI propriétaires</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Opérations complexes</div>
                </div>
            </div>
            <div style={{ position: "relative", zIndex: "1", borderRadius: "var(--r-15)", background: "var(--lb-navy)", boxShadow: "inset 0 0 0 1px var(--lb-line-on-dark)", padding: "clamp(24px,2.4vw,36px)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", background: "var(--lb-rose-tint-strong)", fontWeight: "400", fontSize: "14px", color: "var(--lb-white)" }}>Conseiller</span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.02em", color: "var(--lb-white)" }}>Besoin d'un conseil personnalisé ?</div>
              <p style={{ margin: "12px 0 22px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.78)" }}>Vous n'êtes pas certain de la solution adaptée à votre situation ? Le test d'éligibilité vous oriente en 5 minutes.</p>
              <Button href="/eligibilite" tone="primary" full={true}>Tester mon éligibilité</Button>
              <div style={{ marginTop: "16px", fontFamily: "var(--font-alt)", fontSize: "14px", color: "rgba(255,255,255,.55)" }}>Gratuit · Sans engagement · Réponse sous 48h</div>
            </div>
          </div>
        </div>
      </section>

      <section id="fonctionnement" style={{ position: "relative", background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ position: "relative", maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "20px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Accompagnement</span></div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Comment ça fonctionne ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "620px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Un processus en 4 étapes, de l'éligibilité au déblocage des fonds.</p>
          </div>

          <div className="lb-chart" data-reveal="" style={{ position: "relative", marginTop: "clamp(28px,3vw,44px)" }}>
            <div className="lb-chart__plot" style={{ position: "relative", height: "440px", marginBottom: "clamp(0px,9vw,130px)" }}>
              <svg viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true" style={{ position: "absolute", inset: "0", zIndex: "1", width: "100%", height: "100%", overflow: "visible" }}>
                <polyline className="lb-chart__line" points="125,352 375,262 625,208 875,60" fill="none" stroke="var(--lb-rose)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
              <span className="lb-chart__dot" style={{ position: "absolute", left: "12.5%", top: "352px", transform: "translate(-50%,-50%) scale(.5)", zIndex: "3", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>01</span>
              <span className="lb-chart__dot" style={{ position: "absolute", left: "37.5%", top: "262px", transform: "translate(-50%,-50%) scale(.5)", zIndex: "3", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>02</span>
              <span className="lb-chart__dot" style={{ position: "absolute", left: "62.5%", top: "208px", transform: "translate(-50%,-50%) scale(.5)", zIndex: "3", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>03</span>
              <span className="lb-chart__dot" style={{ position: "absolute", left: "87.5%", top: "60px", transform: "translate(-50%,-50%) scale(.5)", zIndex: "3", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>04</span>
              <div className="lb-chart__col" data-n="01" style={{ position: "absolute", left: "12.5%", top: "398px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Quelques minutes</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Test d'éligibilité</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous renseignez les caractéristiques de votre actif et votre besoin. Notre outil analyse votre situation en quelques minutes.</p>
              </div>
              <div className="lb-chart__col" data-n="02" style={{ position: "absolute", left: "37.5%", bottom: "224px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Sous 48 heures</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Analyse du dossier</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Bluelease étudie votre situation et vous recontacte pour discuter des options possibles.</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "11px", marginTop: "14px", padding: "8px 14px 8px 8px", borderRadius: "22px", boxShadow: "var(--ring-hairline)" }}>
                  <span style={{ display: "grid", placeItems: "center", width: "30px", height: "30px", borderRadius: "15px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "12px" }}>BL</span>
                  <span style={{ textAlign: "left" }}><span style={{ display: "block", fontWeight: "500", fontSize: "14px", color: "var(--lb-ink)" }}>Bluelease</span><span style={{ display: "block", fontWeight: "300", fontSize: "13px", color: "rgba(0,0,0,.6)" }}>Conseiller · ORIAS n° 25000436</span></span>
                </div>
              </div>
              <div className="lb-chart__col" data-n="03" style={{ position: "absolute", left: "62.5%", top: "254px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Structuration</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Proposition de montage</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Structuration personnalisée selon votre actif, votre forme juridique et vos objectifs patrimoniaux.</p>
              </div>
              <div className="lb-chart__col" data-n="04" style={{ position: "absolute", left: "87.5%", bottom: "426px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Closing</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Accompagnement jusqu'au financement</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Suivi juridique, notarial et financier jusqu'au déblocage des fonds. Un interlocuteur unique tout au long du processus.</p>
              </div>
            </div>
            <div className="lb-chart__foot" style={{ display: "flex", justifyContent: "flex-end", marginTop: "-190px" }}>
              <div style={{ position: "relative", width: "clamp(220px,22vw,330px)" }}>
                <span className="lb-chart__float lb-chart__float--q" style={{ position: "absolute", left: "1%", top: "29%", zIndex: "2", width: "20%", aspectRatio: "1" }}><FloatQuestion /></span>
                <span className="lb-chart__float lb-chart__float--euro" style={{ position: "absolute", left: "11%", top: "9%", zIndex: "2", width: "15%", aspectRatio: "1" }}><svg viewBox="0 0 491.52 491.52" aria-hidden="true" style={{ width: "100%", height: "100%", display: "block" }}><circle fill="#FCD462" cx="245.76" cy="245.76" r="245.76" /><circle fill="#F6C358" cx="245.76" cy="245.76" r="204.759" /><path fill="#DC8744" d="M101.768,232.854v-33.643h40.677c8.594-27.898,23.839-50.321,45.769-67.269 c21.898-16.949,46.788-25.415,74.701-25.415c41.44,0,74.287,14.991,98.541,44.973l-27.754,35.202 c-11.49-12.254-22.375-20.863-32.656-25.813c-10.312-4.949-23.012-7.432-38.13-7.432c-15.15,0-28.773,3.979-40.868,11.92 c-12.127,7.957-21.198,19.24-27.181,33.834h93.066v33.643h-101.31c-0.255,3.119-0.382,7.878-0.382,14.275 c0,6.382,0.382,12.445,1.178,18.174h100.514v33.643h-89.947c14.068,27.118,35.329,40.677,63.752,40.677 c14.068,0,26.131-2.674,36.157-8.021c10.058-5.347,20.688-13.75,31.892-25.224l27.754,33.627 c-24.253,29.998-56.177,44.989-95.803,44.989c-27.118,0-51.18-7.766-72.155-23.282c-21.007-15.5-36.061-36.428-45.196-62.765 h-42.618v-33.643h35.202c-0.796-6.254-1.178-12.509-1.178-18.763c0-6.254,0.127-10.822,0.382-13.686H101.768z" /></svg></span>
                <span className="lb-chart__float lb-chart__float--bulb" style={{ position: "absolute", left: "70%", top: "0", zIndex: "2", width: "20%", aspectRatio: "1" }}><svg viewBox="0 0 512 512" aria-hidden="true" style={{ width: "100%", height: "100%", display: "block" }}><path fill="#FFD15C" d="M314.667,391.467c6.4-21.333,19.2-40.533,36.267-55.467c32-26.667,52.267-67.2,52.267-112 c0-83.2-69.333-151.467-154.667-147.2C172.8,80,110.933,144,108.8,219.733C107.733,266.667,128,308.267,161.067,336 C179.2,350.933,192,370.133,198.4,391.467L314.667,391.467L314.667,391.467z" /><path fill="#FFFFFF" d="M242.133,393.6h9.6l-42.667-158.933c1.067,0,2.133,0,3.2,0c5.333,0,10.667-2.133,14.933-6.4 c2.133-2.133,4.267-3.2,7.467-3.2c3.2,0,5.333,1.067,7.467,3.2c7.467,8.533,20.267,8.533,27.733,0c2.133-2.133,4.267-3.2,7.467-3.2 c2.133,0,5.333,1.067,7.467,3.2c4.267,4.267,8.533,6.4,14.933,6.4c1.067,0,2.133,0,3.2,0l-41.6,158.933h9.6l43.733-166.4 c0-2.133,0-4.267-2.133-5.333c-2.133-1.067-4.267,0-5.333,1.067c-2.133,2.133-4.267,3.2-6.4,3.2c-3.2,0-5.333-1.067-8.533-3.2 c-4.267-4.267-8.533-6.4-13.867-6.4s-9.6,2.133-13.867,6.4s-10.667,4.267-14.933,0c-3.2-4.267-8.533-6.4-13.867-6.4l0,0 c-5.333,0-10.667,2.133-13.867,6.4c-2.133,2.133-5.333,3.2-8.533,3.2c-2.133,0-5.333-1.067-6.4-3.2 c-1.067-1.067-3.2-2.133-5.333-1.067c-2.133,1.067-3.2,3.2-2.133,5.333L242.133,393.6z" /><path fill="#344A5E" d="M222.933,489.6C228.267,502.4,241.067,512,256,512c14.933,0,27.733-9.6,33.067-22.4H222.933z" /><path fill="#344A5E" d="M295.467,490.667H217.6c-10.667,0-19.2-8.533-19.2-19.2V390.4h116.267v81.067 C314.667,482.133,306.133,490.667,295.467,490.667z" /><path fill="#415A6B" d="M313.6,430.933H198.4c-6.4,0-11.733-5.333-11.733-11.733s5.333-11.733,11.733-11.733 h115.2c6.4,0,11.733,5.333,11.733,11.733S320,430.933,313.6,430.933z" /><path fill="#415A6B" d="M313.6,468.267H198.4c-6.4,0-11.733-5.333-11.733-11.733s5.333-11.733,11.733-11.733 h115.2c6.4,0,11.733,5.333,11.733,11.733S320,468.267,313.6,468.267z" /><path fill="#FFD15C" d="M256,0c-5.333,0-10.667,4.267-10.667,10.667v36.267c0,5.333,4.267,10.667,10.667,10.667 c6.4,0,10.667-4.267,10.667-10.667V10.667C266.667,4.267,261.333,0,256,0z" /><path fill="#FFD15C" d="M113.067,65.067c-4.267-4.267-10.667-4.267-14.933,0s-4.267,10.667,0,14.933l25.6,25.6 c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L113.067,65.067z" /><path fill="#FFD15C" d="M80,212.267H43.733c-5.333,0-10.667,4.267-10.667,10.667s4.267,10.667,10.667,10.667H80 c5.333,0,10.667-4.267,10.667-10.667S85.333,212.267,80,212.267z" /><path fill="#FFD15C" d="M123.733,340.267l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933s10.667,4.267,14.933,0l25.6-25.6 c4.267-4.267,4.267-10.667,0-14.933S128,336,123.733,340.267z" /><path fill="#FFD15C" d="M388.267,340.267C384,336,377.6,336,373.333,340.267c-4.267,4.267-4.267,10.667,0,14.933l25.6,25.6 c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L388.267,340.267z" /><path fill="#FFD15C" d="M468.267,212.267H432c-5.333,0-10.667,4.267-10.667,10.667s4.267,10.667,10.667,10.667 h36.267c5.333,0,10.667-4.267,10.667-10.667S474.667,212.267,468.267,212.267z" /><path fill="#FFD15C" d="M398.933,65.067l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933c4.267,4.267,10.667,4.267,14.933,0 l25.6-25.6c4.267-4.267,4.267-10.667,0-14.933S403.2,60.8,398.933,65.067z" /></svg></span>
                <span className="lb-chart__float lb-chart__float--b" style={{ position: "absolute", right: "2%", top: "26%", zIndex: "2", width: "20%", aspectRatio: "1" }}><FloatKey /></span>
                <Image className="lb-chart__bg" src="/img/chart-portrait.png" alt="" width={500} height={500} sizes="(max-width: 1100px) 220px, 330px" style={{ position: "relative", zIndex: "1", width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
