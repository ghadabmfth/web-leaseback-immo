import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Débloquer de la trésorerie tout en restant dans vos locaux",
  description: "Critères d’éligibilité, solutions disponibles et distinction entre valeur de l’actif, financement brut et trésorerie nette.",
  alternates: { canonical: "/debloquer-de-la-tresorerie" },
  openGraph: {
    title: "Débloquer de la trésorerie tout en restant dans vos locaux",
    description: "Critères d’éligibilité, solutions disponibles et distinction entre valeur de l’actif, financement brut et trésorerie nette.",
    url: "/debloquer-de-la-tresorerie",
  },
};

export default function LiquiditesPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Ressources</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Débloquer de la trésorerie tout en conservant l’usage de vos locaux</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Il est possible d’adosser un financement à la valeur de votre immobilier, tout en conservant l’usage de vos locaux. Voici comment.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/obtenir-de-la-tresorerie" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Obtenir de la trésorerie</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(\"/img/liquidites-hero.jpg\") center / cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Financement</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Brut, puis net</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Vos locaux</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Usage conservé</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Seuil</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 1 M€</div></div>
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
              <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Céder son bien immobilier pour récupérer de la trésorerie est une décision lourde de conséquences : perte d’un actif stratégique, fiscalité de cession, nécessité de trouver de nouveaux locaux… Pourtant, les besoins de financement sont bien réels.</p>
              <div style={{ marginTop: "26px", padding: "20px 22px", borderRadius: "var(--r-16)", background: "rgba(254,199,98,.16)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Fa name="lightbulb" style={{ flex: "none", marginTop: "3px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} />
                <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.74)" }}><b style={{ fontWeight: "500", color: "var(--lb-ink)" }}>La bonne nouvelle :</b> il existe des mécanismes qui permettent d’adosser un financement à votre bien tout en conservant l’usage de vos locaux.</span>
              </div>
            </div>
            <div style={{ borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose),0 10px 30px rgba(0,0,0,.1)", padding: "clamp(26px,2.6vw,42px)" }}>
              <span style={{ display: "inline-flex", alignItems: "center", height: "38px", padding: "0 16px", borderRadius: "20px", background: "var(--lb-rose)", fontWeight: "500", fontSize: "15px", color: "var(--lb-white)" }}>La solution leaseback : Vendre &amp; Rester</span>
              <p style={{ margin: "22px 0 0", fontWeight: "400", fontSize: "16px", lineHeight: "26px", color: "var(--lb-ink)" }}><b style={{ fontWeight: "700" }}>La cession-bail immobilière</b> est réalisée au moyen d’un crédit-bail immobilier, sur un actif que vous détenez déjà : les murs sont cédés à un crédit-bailleur qui vous les reloue immédiatement, avec une option d’achat fixée dès la signature.</p>
              <div className="lb-gains" style={{ marginTop: "26px", paddingTop: "24px", borderTop: "1px solid rgba(0,0,0,.11)", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "clamp(14px,1.6vw,22px)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", paddingRight: "clamp(12px,1.4vw,22px)" }}>
                  <span style={{ display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="coins" style={{ fontSize: "14px", lineHeight: "1" }} /></span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Financement brut</span>
                  <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,.66)" }}>≈ 80 % de la valeur de l’actif</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", paddingRight: "clamp(12px,1.4vw,22px)" }}>
                  <span style={{ display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="house-user" style={{ fontSize: "14px", lineHeight: "1" }} /></span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Usage conservé</span>
                  <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,.66)" }}>Vous restez dans vos locaux</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px", paddingRight: "clamp(12px,1.4vw,22px)" }}>
                  <span style={{ display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="chart-line" style={{ fontSize: "14px", lineHeight: "1" }} /></span>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Trésorerie nette</span>
                  <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "24px", color: "rgba(0,0,0,.66)" }}>Après encours, fiscalité et frais</span>
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
            <p style={{ margin: "16px 0 0", maxWidth: "680px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Deux instruments, selon la valeur de votre actif et la complexité du montage.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <Link href="/fiducie-surete" className="lb-soln lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-rose-tint)", padding: "clamp(26px,2.6vw,42px)", color: "inherit" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-40px", top: "-40px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(227,68,84,.22)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="shield-halved" style={{ fontSize: "20px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.7vw,28px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>La fiducie-sûreté</span>
              <span style={{ position: "relative", marginTop: "12px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.72)" }}>Transfert de propriété à titre de garantie d’un financement, sur l’immeuble ou les titres qui le portent selon le montage.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "26px", display: "block" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Seuil d'accès</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Dès 5 M€</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Retour du bien</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>À l’extinction de la dette</span>
                </div>
                <span className="lb-soln__cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", paddingTop: "20px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", color: "var(--lb-ink)" }}>En savoir plus</span>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)", transition: "transform .28s cubic-bezier(.22,.61,.36,1)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span>
                </span>
              </span>
            </Link>
            <Link href="/credit-bail-immobilier" className="lb-soln lb-cardhov lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,42px)", color: "inherit" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-40px", bottom: "-56px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="file-signature" style={{ fontSize: "20px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.7vw,28px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Le crédit-bail immobilier</span>
              <span style={{ position: "relative", marginTop: "12px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Cession-bail sur un actif déjà détenu : loyers déductibles dans les limites de la réglementation fiscale applicable.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "26px", display: "block" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Seuil d'accès</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-gold)" }}>Dès 1 M€</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Retour du bien</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-gold)" }}>Levée de l’option d’achat</span>
                </div>
                <span className="lb-soln__cta" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", paddingTop: "20px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", color: "var(--lb-white)" }}>En savoir plus</span>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)", transition: "transform .28s cubic-bezier(.22,.61,.36,1)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1fr)" }}>
          <div data-reveal="" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Estimation</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Les critères clés d’éligibilité</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Avant d’engager une étude approfondie de votre dossier, quelques critères permettent de vérifier rapidement si votre entreprise et votre actif immobilier sont éligibles à nos solutions de crédit-bail immobilier ou de fiducie-sûreté.</p>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Si ces conditions sont réunies, nos experts analysent ensuite votre projet afin de vous proposer une solution de financement adaptée à vos besoins.</p>
            <div style={{ marginTop: "26px", padding: "20px 22px", borderRadius: "var(--r-16)", background: "var(--lb-rose-tint)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Fa name="circle-info" style={{ flex: "none", marginTop: "3px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.74)" }}>La meilleure façon de vérifier votre éligibilité est d’utiliser notre simulateur gratuit.</span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Button href="/eligibilite" tone="primary">Simulateur gratuit</Button>
            </div>
          </div>
          <div data-reveal="">
            <div className="lb-crits" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
              <div className="lb-cardhov" style={{ display: "flex", gap: "18px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,28px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="building" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>01</div>
                  <div style={{ marginTop: "7px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Être propriétaire du bien</div>
                  <p style={{ margin: "7px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le bien doit déjà être détenu par votre entreprise, ou par la société qui porte les murs.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "18px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,28px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="wallet" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>02</div>
                  <div style={{ marginTop: "7px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Capacité à honorer les loyers futurs</div>
                  <p style={{ margin: "7px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Votre entreprise doit pouvoir supporter les loyers ou les échéances du financement, selon le montage retenu.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "18px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,28px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="chart-pie" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>03</div>
                  <div style={{ marginTop: "7px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Situation financière viable</div>
                  <p style={{ margin: "7px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Une activité saine et des finances solides sont nécessaires pour étudier votre dossier.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "18px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,28px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "50px", height: "50px", borderRadius: "25px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="location-dot" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>04</div>
                  <div style={{ marginTop: "7px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Bien situé en France métropolitaine</div>
                  <p style={{ margin: "7px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le bien financé doit être situé en France métropolitaine.</p>
                </div>
              </div>
            </div>
            <div className="lb-cardhov" style={{ marginTop: "clamp(14px,1.6vw,20px)", display: "flex", gap: "20px", alignItems: "center", borderRadius: "var(--r-15)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(22px,2.2vw,32px)" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "56px", height: "56px", borderRadius: "28px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="euro-sign" style={{ fontSize: "20px", lineHeight: "1" }} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>05</div>
                <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-white)" }}>Valeur de l’actif à partir de 1 M€</div>
                <p style={{ margin: "7px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.78)" }}>Votre actif immobilier doit présenter une valeur vénale d’au moins 1 M€ en crédit-bail, 5 M€ en fiducie-sûreté.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
