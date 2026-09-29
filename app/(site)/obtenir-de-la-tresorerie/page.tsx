import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Obtenir de la trésorerie avec un bien immobilier",
  description: "Deux véhicules de structuration pour adosser un financement à un actif déjà détenu, tout en conservant l’usage de vos locaux.",
  alternates: { canonical: "/obtenir-de-la-tresorerie" },
  openGraph: {
    title: "Obtenir de la trésorerie avec un bien immobilier",
    description: "Deux véhicules de structuration pour adosser un financement à un actif déjà détenu, tout en conservant l’usage de vos locaux.",
    url: "/obtenir-de-la-tresorerie",
  },
};

export default function TresoreriePage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Ressources</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Comment obtenir de la trésorerie avec un bien immobilier ?</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Votre patrimoine immobilier peut devenir une source de financement, tout en conservant l’usage de vos locaux.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/quest-ce-que-le-leaseback" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>En savoir plus</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(\"/img/tresorerie-hero.jpg\") center / cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Vos locaux</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Usage conservé</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Deux véhicules</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Crédit-bail · Fiducie</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Test</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>5 minutes</div></div>
            </div>
          </div>
        </div>
      </section>

  
      <section style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div className="lb-split" data-reveal="" style={{ gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr)", alignItems: "center" }}>
            <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Constat</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Le problème : du patrimoine, mais pas de cash</h2>
              <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Nombreux sont les dirigeants et investisseurs qui possèdent un patrimoine immobilier significatif, mais se retrouvent à court de trésorerie au moment clé : saisir une opportunité, faire face à une tension, ou financer une croissance.</p>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginTop: "26px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,.11)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="arrow-down" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(26px,2.2vw,38px)", lineHeight: "1", letterSpacing: "-.035em", color: "var(--lb-rose)" }}>Constat</div>
                  <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Un actif inscrit au bilan ne produit pas de trésorerie tant qu’il n’est pas refinancé</p>
                </div>
              </div>
            </div>
            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,42px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", left: "-60px", bottom: "-70px", width: "200px", height: "200px", borderRadius: "100px", background: "rgba(255,255,255,.05)" }}></span>
              <div style={{ position: "relative" }}>
                <span style={{ display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "19px", fontWeight: "500", fontSize: "15px", color: "var(--lb-white)", backgroundColor: "var(--lb-rose)" }}>La solution</span>
                <p style={{ margin: "22px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.84)" }}>Deux véhicules de structuration permettent d’adosser un financement à un actif que vous détenez déjà, tout en conservant l’usage de vos locaux : la cession-bail immobilière réalisée au moyen d’un crédit-bail immobilier, et la fiducie-sûreté.</p>
                <div style={{ marginTop: "26px", paddingTop: "24px", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "rgba(255,255,255,.08)", color: "var(--lb-gold)" }}><Fa name="arrow-trend-up" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(26px,2.2vw,38px)", lineHeight: "1", letterSpacing: "-.035em", color: "var(--lb-white)" }}>80 %</div>
                    <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(255,255,255,.78)" }}>de la valeur de l’actif en financement brut indicatif, avant encours, fiscalité et frais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Les solutions</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Les solutions pour libérer de la trésorerie</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "680px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Deux véhicules, selon la valeur de l’actif et l’objectif poursuivi.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <Link href="/credit-bail-immobilier" className="lb-soln lb-cardhov lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,38px)", color: "inherit" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "190px", height: "190px", borderRadius: "95px", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="file-signature" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", lineHeight: "1.24", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Cession-bail immobilière (crédit-bail immobilier)</span>
              <span style={{ position: "relative", marginTop: "11px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Sur un actif que vous détenez déjà : les murs sont cédés à un crédit-bailleur qui vous les reloue, avec une option d’achat prévue au contrat. Loyers déductibles dans les limites de la réglementation fiscale applicable.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "24px", display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Seuil d'accès</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-gold)" }}>Dès 1 M€</span>
                </span>
                <span className="lb-soln__cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", paddingTop: "18px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", color: "var(--lb-white)" }}>En savoir plus</span>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)", transition: "transform .28s cubic-bezier(.22,.61,.36,1)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span>
                </span>
              </span>
            </Link>
            <Link href="/fiducie-surete" className="lb-soln lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,38px)", color: "inherit" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", top: "-46px", width: "190px", height: "190px", borderRadius: "95px", background: "rgba(125,26,46,.09)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="shield-halved" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", lineHeight: "1.24", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Fiducie-sûreté</span>
              <span style={{ position: "relative", marginTop: "11px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Transfert de propriété à titre de garantie, sur l’immeuble ou les titres qui le portent : les échéances portent sur le capital et les intérêts du crédit adossé.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "24px", display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Seuil d'accès</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Dès 5 M€</span>
                </span>
                <span className="lb-soln__cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", paddingTop: "18px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", color: "var(--lb-ink)" }}>En savoir plus</span>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)", transition: "transform .28s cubic-bezier(.22,.61,.36,1)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1fr)" }}>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Estimation</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Combien puis-je obtenir ?</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Le montant récupérable dépend de quatre paramètres. Aucun montant n’est garanti avant expertise de l’actif.</p>
            <div style={{ marginTop: "26px", padding: "20px 22px", borderRadius: "var(--r-16)", background: "var(--lb-rose-tint)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Fa name="circle-info" style={{ flex: "none", marginTop: "3px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.74)" }}>Le simulateur de la page d’accueil donne un ordre de grandeur en quelques secondes.</span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
            </div>
          </div>
          <div className="lb-crits" data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="chart-simple" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>01</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Valeur vénale du bien</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>La valeur vénale de l’actif détermine le plafond du financement brut.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="credit-card" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>02</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Encours de crédit restant</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Les encours adossés au bien se déduisent du financement brut pour donner la trésorerie nette.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="award" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>03</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Qualité de l’emplacement</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>La qualité de l’emplacement et du locataire (vous) influence les conditions.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="hourglass-half" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>04</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Durée du bail</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>La durée retenue, de 8 à 15 ans, pèse sur le montant et sur les loyers ou échéances.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Profils</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Qui peut en bénéficier ?</h2>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Ces solutions s’adressent aux entreprises et investisseurs suivants.</p>
          </div>
          <div className="lb-needs" data-reveal="" style={{ marginTop: "clamp(28px,3vw,46px)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "clamp(16px,1.8vw,24px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="desktop" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.32", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Dirigeants de PME-PMI</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Propriétaires de leurs locaux d’exploitation.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="arrow-trend-up" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.32", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Investisseurs immobiliers</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Disposant d’un patrimoine professionnel valorisable.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="diagram-project" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.32", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Sociétés holding</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Cherchant à optimiser leur structure de bilan.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(125,26,46,.32)" }}><Fa name="bolt" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.32", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Besoins non couverts</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Entreprises dont les canaux bancaires traditionnels ne suffisent plus.</p>
            </div>
          </div>
      
        </div>
      </section>
    </div>
  );
}
