import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Qu’est-ce que le leaseback immobilier ?",
  description: "Définition de la cession-bail immobilière, ses étapes, le cadre juridique et fiscal, et sa différence avec une vente classique.",
  alternates: { canonical: "/quest-ce-que-le-leaseback" },
  openGraph: {
    title: "Qu’est-ce que le leaseback immobilier ?",
    description: "Définition de la cession-bail immobilière, ses étapes, le cadre juridique et fiscal, et sa différence avec une vente classique.",
    url: "/quest-ce-que-le-leaseback",
  },
};

export default function LeasebackPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>En bref</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Qu'est-ce que le leaseback ?</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Vendre un actif que l'on possède pour en reprendre immédiatement l'usage sous forme de location. Appliqué à l'immobilier professionnel, il transforme un bâtiment en trésorerie sans déménagement.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/avantages-et-limites" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Avantages et limites</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(\"/img/leaseback-hero.jpg\") center / cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Véhicule</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Crédit-bail immobilier</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Accès</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 1 M€</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Exploitation</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Jamais interrompue</div></div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="definition" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)" }}>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>À propos</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Définition du leaseback immobilier</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Le leaseback (ou cession-bail en français) est une opération par laquelle une entreprise cède un bien professionnel qu’elle détient déjà à un crédit-bailleur, qui le lui reloue immédiatement.</p>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>En résumé : vous cédez les murs pour adosser un financement à leur valeur, mais vous continuez à les occuper. Cession et bail sont signés simultanément, et une option d’achat est fixée dès la signature.</p>
          </div>
          <div className="lb-ondark" data-reveal="" style={{ position: "relative", overflow: "hidden", alignSelf: "start", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,42px)" }}>
            <span className="lb-soln__halo" style={{ position: "absolute", right: "-56px", bottom: "-70px", width: "clamp(120px,32%,170px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(255,255,255,.06)" }}></span>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ width: "26px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>En une phrase</span></div>
              <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.9vw,31px)", lineHeight: "1.3", letterSpacing: "-.028em", color: "var(--lb-white)" }}>Vous cédez la propriété de vos murs, pas leur usage.</div>

              <div style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>Aussi appelé</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginTop: "14px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", background: "rgba(255,255,255,.08)", boxShadow: "inset 0 0 0 1px var(--lb-line-on-dark)", fontWeight: "300", fontSize: "15px", color: "rgba(255,255,255,.86)" }}>Cession-bail</span>
                <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", background: "rgba(255,255,255,.08)", boxShadow: "inset 0 0 0 1px var(--lb-line-on-dark)", fontWeight: "300", fontSize: "15px", color: "rgba(255,255,255,.86)" }}>Sale and leaseback</span>
                <span style={{ display: "inline-flex", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "17px", background: "rgba(255,255,255,.08)", boxShadow: "inset 0 0 0 1px var(--lb-line-on-dark)", fontWeight: "300", fontSize: "15px", color: "rgba(255,255,255,.86)" }}>Lease-back immobilier</span>
                </div>
              </div>

              <Link href="/credit-bail-immobilier" className="lb-flink" style={{ display: "flex", gap: "15px", alignItems: "flex-start", marginTop: "26px", paddingTop: "24px", borderTop: "1px solid var(--lb-line-on-dark)", color: "var(--lb-white)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "rgba(254,199,98,.18)", color: "var(--lb-gold)" }}><Fa name="circle-exclamation" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-white)" }}>À ne pas confondre</span>
                  <span style={{ display: "block", marginTop: "5px", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(255,255,255,.78)" }}>Le crédit-bail d’acquisition finance l’achat d’un bien que vous ne détenez pas encore.</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginTop: "12px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", color: "var(--lb-white)" }}>Voir la différence</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="etapes" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre approche</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Les étapes d’une cession-bail immobilière</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "760px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Trois temps, dont les deux premiers sont signés le même jour : c’est cette simultanéité qui distingue la cession-bail d’une vente suivie d’une recherche de locaux.</p>
          </div>
          <div className="lb-steps3" data-reveal="" style={{ marginTop: "clamp(30px,3vw,50px)", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "clamp(16px,1.8vw,26px)", alignItems: "stretch" }}>
            <div className="lb-step3" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-56px", top: "-56px", width: "clamp(110px,30%,150px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(125,26,46,.09)" }}></span>
              <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px" }}>
                <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>01</span>
                <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.62)" }}>Le même jour</span>
              </span>
              <span style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>La cession</span>
              <span style={{ position: "relative", marginTop: "11px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Vous cédez les murs à un crédit-bailleur, à leur valeur d’expertise. Le financement brut se situe indicativement à 80 % de cette valeur, avant encours, fiscalité et frais.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "22px", display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Vous devenez</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Locataire</span>
                </span>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Vous encaissez</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Le financement brut</span>
                </span>
              </span>
            </div>
            <div className="lb-step3 lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,36px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-56px", bottom: "-70px", width: "clamp(110px,30%,150px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px" }}>
                <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-white)" }}>02</span>
                <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(255,255,255,.55)" }}>Le même jour</span>
              </span>
              <span style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Le bail</span>
              <span style={{ position: "relative", marginTop: "11px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Le bail prend effet avec le crédit-bailleur. Vous versez un loyer et continuez à exploiter le bien normalement, sans interruption d’activité.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "22px", display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Durée usuelle</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-gold)" }}>8 à 15 ans</span>
                </span>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid var(--lb-line-on-dark)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(255,255,255,.6)" }}>Usage du bien</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-gold)" }}>Inchangé</span>
                </span>
              </span>
            </div>
            <div className="lb-step3" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-56px", top: "-56px", width: "clamp(110px,30%,150px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(125,26,46,.09)" }}></span>
              <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px" }}>
                <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", color: "var(--lb-rose)" }}>03</span>
                <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.62)" }}>À terme</span>
              </span>
              <span style={{ position: "relative", marginTop: "20px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>L’option d’achat</span>
              <span style={{ position: "relative", marginTop: "11px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Le prix de levée est fixé dès la signature. Vous pouvez lever l’option selon les conditions prévues au contrat, ou laisser le contrat aller à son terme.</span>
              <span style={{ position: "relative", marginTop: "auto", paddingTop: "22px", display: "block" }}>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Prix</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Connu dès la signature</span>
                </span>
                <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                  <span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Décision</span>
                  <span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Vous appartient</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comparaison</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Vente classique ou leaseback ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Le même acte de cession, deux issues très différentes pour votre exploitation.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(30px,3vw,50px)", alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "rgba(0,0,0,.05)", color: "rgba(0,0,0,.5)" }}><Fa name="arrow-right-from-bracket" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>Vente classique</div>
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Vous cédez et vous partez</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", margin: "24px 0 0", padding: "22px 0 0", borderTop: "1px solid rgba(0,0,0,.09)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Vous perdez définitivement l’usage du bien</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Un déménagement ou une relocation est à prévoir</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>L’activité est interrompue le temps du transfert</span></li>
              </ul>
            </div>
            <div className="lb-ondark" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint-strong)", color: "var(--lb-white)" }}><Fa name="arrows-rotate" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Leaseback</div>
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-white)" }}>Vous cédez et vous restez</div>
                </div>
              </div>
              <ul style={{ listStyle: "none", margin: "24px 0 0", padding: "22px 0 0", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Vous conservez l’usage du bien via le bail signé le même jour</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Aucune interruption d’activité, aucun déménagement</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Vous adossez un financement à la valeur de l’actif</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cadre" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>À propos</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Cadre juridique et fiscal</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Le leaseback immobilier est une opération légale et encadrée en France. Selon la structure choisie, il peut bénéficier de régimes fiscaux avantageux, notamment sur la TVA et les plus-values. Il est conseillé d’être accompagné par des experts pour optimiser le montage.</p>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Pour explorer cette solution de leaseback immobilier et vérifier si votre profil est éligible, testez votre éligibilité gratuitement.</p>
            <div style={{ marginTop: "26px", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(8px,1vw,14px) clamp(20px,2vw,28px)" }}>
              <Link href="/credit-bail-immobilier" className="lb-flink" style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "16px 0", borderBottom: "1px solid rgba(0,0,0,.09)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Crédit-bail immobilier</span><span style={{ fontWeight: "500", color: "var(--lb-rose)" }}>dès 1 M€</span></Link>
              <Link href="/fiducie-surete" className="lb-flink" style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "16px 0", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}><span>Fiducie-sûreté</span><span style={{ fontWeight: "500", color: "var(--lb-rose)" }}>dès 5 M€</span></Link>
            </div>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "26px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
            </div>
          </div>
          <div className="lb-defgrid" data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(16px,1.8vw,24px)", alignSelf: "start" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="shield-halved" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Opération encadrée</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Un dispositif légal et courant en France, documenté par acte notarié.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="file-invoice" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>TVA et plus-values</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Des régimes fiscaux avantageux selon la structure de détention retenue.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="file-contract" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Bail commercial</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Durée, loyer et conditions de renouvellement négociés à la signature.</p>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(22px,2.2vw,30px)" }}>
              <span style={{ display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="user-group" style={{ fontSize: "17px", lineHeight: "1" }} /></span>
              <div style={{ marginTop: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Accompagnement</div>
              <p style={{ margin: "8px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Expert, notaire et conseil fiscal coordonnés pour sécuriser le montage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
