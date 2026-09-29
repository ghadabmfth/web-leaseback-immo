import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Cession-bail immobilière : avantages et limites",
  description: "Financement brut indicatif, usage conservé, option d’achat — et en regard la fiscalité de cession, les frais, les loyers et les conditions de sortie.",
  alternates: { canonical: "/avantages-et-limites" },
  openGraph: {
    title: "Cession-bail immobilière : avantages et limites",
    description: "Financement brut indicatif, usage conservé, option d’achat — et en regard la fiscalité de cession, les frais, les loyers et les conditions de sortie.",
    url: "/avantages-et-limites",
  },
};

export default function AvantagesPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Avantages et limites</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Cession-bail immobilière : avantages et limites</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Un arbitrage se juge sur ses deux colonnes. Voici les nôtres, sans tri : ce que l'opération permet, et ce qu'il faut accepter en contrepartie.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/credit-bail-immobilier" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Voir les solutions</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-commerce.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Trésorerie</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Jusqu'à la valeur d'expertise</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Fiscalité</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Loyers déductibles</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Contrepartie</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Un loyer à porter</div></div>
            </div>
          </div>
        </div>
      </section>
  
  
      <section id="avantages" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,.72fr) minmax(0,1fr)" }}>
          <div className="lb-sticky" data-reveal="" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Les forces</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Les avantages du leaseback</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Six bénéfices concrets pour une entreprise propriétaire de ses locaux.</p>
            <div style={{ marginTop: "26px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,.11)", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="coins" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(26px,2.2vw,38px)", lineHeight: "1", letterSpacing: "-.035em", color: "var(--lb-rose)" }}>≈ 80 %</div>
                <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>de la valeur de l’actif en financement brut indicatif, avant encours, fiscalité et frais</p>
              </div>
            </div>
          </div>
          <div data-reveal="">
            <div className="lb-crits" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>01</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="money-bill-wave" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Financement brut adossé à l’actif</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Hypothèse indicative de 80 % de la valeur de l’actif en financement brut, avant remboursement des encours, fiscalité et frais.</p>
              </div>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>02</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="building" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Conservation de l’usage du bien</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous continuez à utiliser vos locaux sans interruption d’activité, et pouvez lever l’option d’achat selon les conditions prévues au contrat.</p>
              </div>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>03</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="credit-card" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Alternative aux crédits bancaires</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le dossier s’apprécie d’abord sur la qualité de l’actif, en complément de l’analyse de la situation financière de l’entreprise.</p>
              </div>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>04</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="arrow-trend-up" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Amélioration du bilan</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Transformation d’un actif immobilisé en trésorerie disponible. Amélioration du ratio d’endettement.</p>
              </div>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>05</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="file-invoice" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Déductibilité des loyers</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Les loyers versés au bailleur sont généralement déductibles fiscalement en tant que charges d’exploitation.</p>
              </div>
              <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,32px)" }}>
                <span style={{ position: "absolute", right: "20px", bottom: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(44px,3.6vw,66px)", lineHeight: "1", letterSpacing: "-.04em", color: "rgba(125,26,46,.09)" }}>06</span>
                <span style={{ position: "relative", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="arrows-spin" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Souplesse d’utilisation des fonds</div>
                <p style={{ position: "relative", margin: "9px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Contrairement à un crédit affecté, l’emploi des fonds n’est pas fléché sur un investissement précis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="inconvenients" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Les limites</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Les inconvénients à considérer</h2>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Quatre limites à peser avant d’engager une opération de leaseback. Nous les énonçons aussi clairement que les avantages.</p>
          </div>
          <div data-reveal="" style={{ maxWidth: "1200px", marginTop: "clamp(30px,3vw,50px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "clamp(18px,2vw,28px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-gold)", color: "var(--lb-gold)" }}><Fa name="house-circle-xmark" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                  <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(201,168,76,.4) 0 6px,transparent 6px 14px)" }}></span>
                </div>
                <div className="lb-cardhov" style={{ marginBottom: "18px", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px)" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Limite 01</div>
                  <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.3vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Perte de propriété</div>
                  <p style={{ margin: "8px 0 0", maxWidth: "820px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous ne serez plus propriétaire du bien. Il faut évaluer l’impact sur votre stratégie patrimoniale à long terme.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "clamp(18px,2vw,28px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-gold)", color: "var(--lb-gold)" }}><Fa name="calendar-days" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                  <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(201,168,76,.4) 0 6px,transparent 6px 14px)" }}></span>
                </div>
                <div className="lb-cardhov" style={{ marginBottom: "18px", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px)" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Limite 02</div>
                  <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.3vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Engagement de loyers long terme</div>
                  <p style={{ margin: "8px 0 0", maxWidth: "820px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous vous engagez sur des loyers ou des échéances de financement pendant 8 à 15 ans, à rapporter à la capacité de remboursement de l’exploitation.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "clamp(18px,2vw,28px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-gold)", color: "var(--lb-gold)" }}><Fa name="calculator" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                  <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(201,168,76,.4) 0 6px,transparent 6px 14px)" }}></span>
                </div>
                <div className="lb-cardhov" style={{ marginBottom: "18px", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px)" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Limite 03</div>
                  <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.3vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Coût global de l’opération</div>
                  <p style={{ margin: "8px 0 0", maxWidth: "820px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le coût global se juge sur l’ensemble de l’opération : fiscalité de cession, frais d’expertise, de structuration et de notaire, loyers et conditions de sortie.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "clamp(18px,2vw,28px)" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-gold)", color: "var(--lb-gold)" }}><Fa name="triangle-exclamation" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
              
                </div>
                <div className="lb-cardhov" style={{ marginBottom: "0", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px)" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Limite 04</div>
                  <div style={{ marginTop: "8px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.3vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Risque en cas de difficultés</div>
                  <p style={{ margin: "8px 0 0", maxWidth: "820px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>En cas de défaillance sur les loyers, vous pouvez perdre l’usage du bien et être expulsé.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Aide à la décision</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Le leaseback est-il fait pour vous ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "800px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Quatre situations où le montage prend tout son sens, quatre où il mérite d’être réexaminé. Si vous vous reconnaissez majoritairement à gauche, le dossier vaut une étude.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <div style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose),0 10px 30px rgba(0,0,0,.1)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", top: "-46px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(125,26,46,.09)" }}></span>
              <div style={{ position: "relative", display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="check" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>4 signaux</div>
                  <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Plutôt adapté si</div>
                </div>
              </div>
              <ul style={{ position: "relative", listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Vous cherchez un montant important, rapidement</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Votre accès au crédit bancaire est limité ou saturé</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Votre exploitation peut absorber un loyer sur la durée</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>L’usage du bien compte plus que sa propriété</span></li>
              </ul>
            </div>
            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
              <div style={{ position: "relative", display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "rgba(255,255,255,.08)", color: "var(--lb-gold)" }}><Fa name="xmark" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>4 réserves</div>
                  <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>À réexaminer si</div>
                </div>
              </div>
              <ul style={{ position: "relative", listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>La détention du bien est au cœur de votre patrimoine</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Votre trésorerie ne supporte pas un engagement de 8 à 15 ans</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Une revente ou un déménagement est envisagé à court terme</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Un financement bancaire classique reste accessible</span></li>
              </ul>
            </div>
          </div>
          <div className="lb-doubt" data-reveal="" style={{ marginTop: "clamp(20px,2vw,28px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "clamp(20px,2.4vw,36px)", alignItems: "center", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px) clamp(22px,2.2vw,34px)" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="question" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Le doute subsiste ? Le test d’éligibilité fournit une première orientation indicative en 5 minutes et vous oriente vers le crédit-bail ou la fiducie-sûreté selon votre actif.</span>
            </div>
            <div>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
