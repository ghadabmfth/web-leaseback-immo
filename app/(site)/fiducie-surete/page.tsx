import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Fiducie-sûreté immobilière — Financement garanti",
  description: "Transfert de propriété à titre de garantie, dès 5 M€ de valeur d’actif : mécanisme, conditions d’accès, neutralité fiscale et limites.",
  alternates: { canonical: "/fiducie-surete" },
  openGraph: {
    title: "Fiducie-sûreté immobilière — Financement garanti",
    description: "Transfert de propriété à titre de garantie, dès 5 M€ de valeur d’actif : mécanisme, conditions d’accès, neutralité fiscale et limites.",
    url: "/fiducie-surete",
  },
};

export default function FiduciePage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Fiducie-sûreté</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Refinancez votre immobilier professionnel grâce à la fiducie-sûreté.</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>La propriété de l’immeuble — ou des titres de la société qui le détient, selon le montage — est transférée à titre de garantie à un fiduciaire. Vous en conservez l’usage économique dans le cadre prévu au contrat.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/credit-bail-immobilier" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Comparer avec le crédit-bail</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-industriel.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Seuil d'entrée</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 5 M€</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Durée</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>8 à 15 ans</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Sortie</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Rétrocession</div></div>
            </div>
          </div>
        </div>
      </section>

  
      <section id="definition" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comprendre</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Qu’est-ce que la fiducie-sûreté immobilière ?</h2>
            <p style={{ margin: "20px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Dans un montage de fiducie-sûreté, la propriété du bien immobilier de votre entreprise — ou des titres de la société qui le détient, selon le montage — est transférée à titre de garantie à un professionnel habilité à exercer la fonction de fiduciaire. Ce transfert juridique sert de garantie à l’obtention d’un financement. Pendant toute la durée du contrat, vous continuez à occuper et exploiter votre bien comme auparavant.</p>
            <p style={{ margin: "16px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Une fois les engagements remboursés, les biens ou droits transférés sont restitués selon les modalités prévues au contrat. Le transfert est temporaire et à titre de garantie uniquement : votre bien reste dans un patrimoine fiduciaire dédié, distinct du patrimoine du fiduciaire lui-même.</p>
          </div>
          <div data-reveal="" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.6vw,40px)" }}>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Mécanisme en quatre temps</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "26px" }}>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Transfert</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous transférez la propriété du bien, ou des titres qui le portent, à un fiduciaire à titre de garantie.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7.4-7 9-4-1.6-7-5-7-9V6l7-3Z" /><path d="m9 12 2.2 2.2L15.5 10" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Garantie</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le transfert sert de garantie pour l’obtention d’un financement.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 3h8a2 2 0 0 1 2 2v16l-6-3-6 3V5a2 2 0 0 1 2-2Z" /><path d="M9 8h6M9 12h6" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Exploitation</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous remboursez le financement tout en conservant l’usage du bien.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "48px", height: "48px", borderRadius: "24px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.6-5.9" /><path d="M20 4v4.2h-4.2" /></svg></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.2vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Restitution</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Une fois les engagements remboursés, les biens ou droits transférés sont restitués selon les modalités prévues au contrat.</p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginTop: "26px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,.09)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Transfert à titre de garantie</span>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Patrimoine fiduciaire dédié</span>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", boxShadow: "var(--ring-hairline)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.66)" }}>Restitution contractuelle</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Nos solutions</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Pour quels besoins ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "640px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>La fiducie-sûreté est particulièrement adaptée pour les situations suivantes.</p>
          </div>
          <div className="lb-needs" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "clamp(18px,2vw,28px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="arrow-trend-up" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Dégager des liquidités stratégiques</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Refinancer vos murs pour financer une opportunité de croissance ou un besoin de trésorerie significatif.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="sitemap" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Restructurer le capital</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Racheter des parts sociales ou financer une réorganisation capitalistique.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="shield-halved" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Sécuriser ou refinancer une dette</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Sécuriser une dette corporate ou refinancer un passif bancaire de manière maîtrisée.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="layer-group" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Réorganiser votre haut de bilan</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Conserver l’usage économique de vos actifs tout en optimisant votre structure financière.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="concernes" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comprendre</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Qui est concerné ?</h2>
            <p style={{ margin: "18px 0 0", maxWidth: "620px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>La fiducie-sûreté s’adresse aux entreprises patrimoniales, groupes industriels, foncières et holdings disposant d’un actif immobilier significatif.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "26px" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><Fa name="r-circle-check" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />Entreprises patrimoniales</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><Fa name="r-circle-check" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />Groupes industriels</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><Fa name="r-circle-check" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />Foncières et holdings</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><Fa name="r-circle-check" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />PME à fort actif immobilier</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><Fa name="r-circle-check" style={{ fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />Sociétés civiles immobilières</span>
            </div>
          </div>
          <div data-reveal="" style={{ alignSelf: "start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,38px)" }}>
            <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Seuil d’accès</div>
            <div style={{ marginTop: "10px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(34px,3vw,52px)", letterSpacing: "-.035em", color: "var(--lb-ink)" }}>5 M€</div>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Opérations à partir de 5 M€ de valeur vénale de l’actif. Ce seuil s’explique par la complexité juridique inhérente au dispositif : constitution du patrimoine fiduciaire, gouvernance, publications légales, suivi annuel. En dessous de ce seuil, le crédit-bail immobilier sera généralement plus adapté.</p>
            <div style={{ height: "1px", background: "rgba(0,0,0,.08)", margin: "24px 0 20px" }}></div>
            <div style={{ fontWeight: "500", fontSize: "16px", lineHeight: "26px", color: "var(--lb-ink)" }}>Le montage est adapté à chaque situation — <Link href="/contact" style={{ fontWeight: "500", color: "var(--lb-rose)" }}>contactez-nous</Link> pour une étude personnalisée.</div>
          </div>
        </div>
      </section>

      <section id="avantages" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Pourquoi choisir la fiducie-sûreté</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Les avantages de la fiducie-sûreté</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Un outil de haut de bilan pour les entreprises disposant d’actifs immobiliers significatifs.</p>
          </div>
          <div className="lb-grid lb-grid-3" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="scale-balanced" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Sécurité juridique</div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.08)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Transfert dans un patrimoine d’affectation autonome — protégé des risques d’insolvabilité du fiduciaire</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Restitution des biens ou droits transférés selon les modalités prévues au contrat</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Restitution selon les modalités prévues au contrat</span></li>
              </ul>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="shuffle" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Souplesse</div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.08)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Conservation totale de l’usage et de la valeur économique du bien</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Possibilité de céder ou refinancer le bien pendant la durée du contrat (sous accord du fiduciaire)</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Structure adaptable aux montages complexes (SCI, holding, groupes)</span></li>
              </ul>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="chart-line" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Optimisation financière</div>
              </div>
              <div style={{ height: "1px", background: "rgba(0,0,0,.08)", margin: "22px 0 20px" }}></div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Outil de haut de bilan, adossé à un crédit qui reste une dette de l’entreprise</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>La fiducie-sûreté constitue la garantie du financement</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Fiscalité</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Neutralité fiscale du transfert</h2>
            <p style={{ margin: "20px 0 0", maxWidth: "640px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Sous réserve des conditions du régime de neutralité fiscale applicable, la mise en fiducie peut être réalisée sans imposition immédiate de la plus-value au titre du transfert.</p>
            <p style={{ margin: "16px 0 0", maxWidth: "640px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Cet intérêt est particulièrement marqué pour un immeuble fortement amorti, dont la valeur nette comptable est faible par rapport à sa valeur vénale.</p>
          </div>
          <div data-reveal="" style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.6vw,40px)" }}>
            <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Ce que la neutralité ne couvre pas</div>
            <ul style={{ listStyle: "none", margin: "22px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-exclamation" style={{ flex: "none", marginTop: "4px", fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>La plus-value n’est pas effacée : elle est différée, non supprimée.</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-exclamation" style={{ flex: "none", marginTop: "4px", fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Les frais et droits éventuels liés à l’opération restent dus.</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-exclamation" style={{ flex: "none", marginTop: "4px", fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Le montage suppose des coûts de suivi : gestion du patrimoine fiduciaire, reporting, obligations déclaratives annuelles.</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-exclamation" style={{ flex: "none", marginTop: "4px", fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Le contrat impose des obligations d’entretien, d’assurance et d’information pendant toute sa durée.</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="circle-exclamation" style={{ flex: "none", marginTop: "4px", fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>En cas de défaut de remboursement, le fiduciaire peut réaliser l’actif dans les conditions prévues au contrat : la perte du bien est définitive.</span></li>
            </ul>
            <p style={{ margin: "24px 0 0", paddingTop: "20px", borderTop: "1px solid rgba(0,0,0,.08)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.62)" }}>Ces effets dépendent de votre situation et du montage retenu. Ils doivent être validés avec vos conseils fiscal et juridique avant tout engagement.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-ondark" data-reveal="" style={{ position: "relative", overflow: "hidden", maxWidth: "1770px", marginInline: "auto", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(32px,3.4vw,64px)" }}>
          <span className="lb-soln__halo" style={{ position: "absolute", left: "-70px", bottom: "-80px", width: "220px", height: "220px", borderRadius: "110px", background: "rgba(255,255,255,.05)" }}></span>
          <div style={{ position: "relative", maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comparatif</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--lb-white)" }}>Fiducie-sûreté ou crédit-bail immobilier ?</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "rgba(255,255,255,.82)" }}>Deux solutions de financement sur actifs immobiliers. Le choix dépend de la valeur de votre actif, de votre objectif et de votre structure juridique.</p>
          </div>
          <div className="lb-cmp" style={{ position: "relative", marginTop: "clamp(28px,3vw,46px)", display: "grid", gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr)", gap: "clamp(26px,3vw,56px)", alignItems: "start" }}>
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", paddingBottom: "14px", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.5)" }}>Critère</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "rgba(255,255,255,.6)" }}>Crédit-bail immobilier</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-rose)" }}>Fiducie-sûreté</div>
              </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Seuil d’accès</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>À partir de 1 M€</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>À partir de 5 M€</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Mécanisme</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Cession + relocation</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Transfert temporaire en garantie</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Propriété pendant le contrat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Crédit-bailleur</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Patrimoine fiduciaire</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0", borderBottom: "1px solid var(--lb-line-on-dark)" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Usage pendant le contrat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Conservé</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Conservé</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "16px 0" }}>
                  <div style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Restitution de propriété</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "rgba(255,255,255,.82)" }}>Option d’achat en fin de contrat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", color: "var(--lb-white)" }}>Automatique à l’extinction de la dette</div>
                </div>
            </div>
            <div style={{ position: "relative", zIndex: "1", borderRadius: "var(--r-15)", background: "var(--lb-navy)", boxShadow: "inset 0 0 0 1px var(--lb-line-on-dark)", padding: "clamp(24px,2.4vw,36px)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", background: "var(--lb-rose-tint-strong)", fontWeight: "400", fontSize: "14px", color: "var(--lb-white)" }}>Orientation</span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.02em", color: "var(--lb-white)" }}>Vous n’êtes pas certain de la solution adaptée ?</div>
              <p style={{ margin: "12px 0 22px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.78)" }}>Le test d’éligibilité vous oriente en 5 minutes.</p>
              <Button href="/eligibilite" tone="primary" full={true}>Faire le test d'éligibilité</Button>
              <div style={{ marginTop: "16px", fontFamily: "var(--font-alt)", fontSize: "14px", color: "rgba(255,255,255,.55)" }}>Gratuit · Sans engagement · Réponse sous 48h</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ position: "relative", maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "20px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre processus</span></div>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Comment fonctionne notre accompagnement ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "620px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>De la qualification de votre actif jusqu’au déblocage des fonds, nous vous accompagnons à chaque étape.</p>
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
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Qualification</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous renseignez les caractéristiques de votre actif et votre besoin. Notre outil analyse votre situation en quelques minutes.</p>
              </div>
              <div className="lb-chart__col" data-n="02" style={{ position: "absolute", left: "37.5%", bottom: "224px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Sous 48 heures</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Étude personnalisée</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Bluelease étudie votre situation et vous recontacte pour discuter des options possibles.</p>
              </div>
              <div className="lb-chart__col" data-n="03" style={{ position: "absolute", left: "62.5%", top: "254px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Structuration</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Expertise</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Structuration personnalisée selon votre actif, votre forme juridique et vos objectifs patrimoniaux.</p>
              </div>
              <div className="lb-chart__col" data-n="04" style={{ position: "absolute", left: "87.5%", bottom: "426px", transform: "translateX(-50%)", width: "28%", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Closing</div>
                <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,23px)", lineHeight: "1.26", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Déblocage</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Suivi juridique, notarial et financier jusqu’au déblocage des fonds. Un interlocuteur unique tout au long du processus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
