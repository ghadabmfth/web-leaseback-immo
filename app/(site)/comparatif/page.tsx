import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Crédit-bail ou fiducie-sûreté — Comparatif des deux véhicules",
  description: "Seuils, nature du transfert, fiscalité, frais, trésorerie nette et modalités de sortie : les deux véhicules comparés terme à terme.",
  alternates: { canonical: "/comparatif" },
  openGraph: {
    title: "Crédit-bail ou fiducie-sûreté — Comparatif des deux véhicules",
    description: "Seuils, nature du transfert, fiscalité, frais, trésorerie nette et modalités de sortie : les deux véhicules comparés terme à terme.",
    url: "/comparatif",
  },
};

export default function ComparatifPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Comparatif</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Crédit-bail immobilier ou fiducie-sûreté ?</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Deux instruments de refinancement adossés au même actif, mais deux logiques juridiques distinctes. Le choix dépend du montant, de la structure de détention et de l’objectif poursuivi.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/quest-ce-que-le-leaseback" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Comprendre le leaseback</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-mixte.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Crédit-bail</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 1 M€</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Fiducie</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 5 M€</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Point commun</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Usage conservé</div></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>En bref</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Deux logiques, un même actif</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "720px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Dans les deux cas, l’entreprise continue d’exploiter son bien. Ce qui change, c’est la nature du transfert.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose),0 10px 30px rgba(0,0,0,.1)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", top: "-46px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(227,68,84,.09)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="file-signature" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", lineHeight: "1.26", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Crédit-bail immobilier</span>
              <span style={{ position: "relative", marginTop: "12px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Une cession suivie d’une relocation immédiate. La propriété juridique passe au crédit-bailleur pour la durée du contrat, et une option d’achat est fixée dès la signature.</span>
            </div>
            <div className="lb-cardhov lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="shield-halved" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
              <span style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", lineHeight: "1.26", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Fiducie-sûreté</span>
              <span style={{ position: "relative", marginTop: "12px", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Un transfert temporaire à un fiduciaire, à titre de garantie uniquement. L’actif revient automatiquement dès que la dette est éteinte.</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Terme à terme</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Le comparatif détaillé</h2>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Neuf critères, énoncés sans tri. Les seuils et les durées sont indicatifs et dépendent de l’expertise de l’actif.</p>
          </div>
          <div data-reveal="" style={{ marginTop: "clamp(28px,3vw,44px)", overflow: "auto", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "0 10px 30px rgba(0,0,0,.1)", padding: "clamp(22px,2.4vw,38px)" }}>
            <div style={{ minWidth: "680px" }}>
              <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", paddingBottom: "16px", borderBottom: "2px solid var(--lb-rose)" }}>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(0,0,0,.45)" }}>Critère</div>
                <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ flex: "none", display: "grid", placeItems: "center", width: "32px", height: "32px", borderRadius: "16px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="file-signature" style={{ fontSize: "13px", lineHeight: "1" }} /></span><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Crédit-bail</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ flex: "none", display: "grid", placeItems: "center", width: "32px", height: "32px", borderRadius: "16px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="shield-halved" style={{ fontSize: "13px", lineHeight: "1" }} /></span><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Fiducie-sûreté</span></div>
              </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Seuil d'entrée</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Dès 1 M€</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Dès 5 M€</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Nature du transfert</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Cession avec option d’achat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Transfert temporaire en garantie</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Propriété pendant le contrat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Le crédit-bailleur</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Patrimoine fiduciaire distinct</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Usage du bien</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Conservé sans interruption</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Conservé sans interruption</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Contrepartie versée</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Loyer, déductible du résultat</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Échéances du crédit adossé : remboursement du capital et intérêts</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Retour de l’actif</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Levée de l’option, prix fixé à la signature</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Restitution selon les modalités prévues au contrat</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Durée usuelle</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>8 à 15 ans</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>8 à 15 ans</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Complexité juridique</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Standard, acte notarié</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Élevée : patrimoine fiduciaire, publications, suivi annuel</div>
                </div>
                <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Profil type</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>PME et ETI propriétaires exploitantes</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Opérations complexes, actifs de premier plan</div>
                </div>
    <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Fiscalité</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Plus-value de cession, étalement possible sous conditions</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Neutralité fiscale possible sous conditions, plus-value différée</div>
                </div>
    <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Frais</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Expertise, notaire, droits de mutation, structuration</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Expertise, structuration, fiducie, suivi annuel</div>
                </div>
    <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0", borderBottom: "1px solid rgba(0,0,0,.09)" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Trésorerie nette</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Produit de cession diminué des encours, de la fiscalité et des frais</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Montant financé diminué des encours, des frais et des coûts de suivi</div>
                </div>
    <div className="lb-cmprow" style={{ display: "grid", gridTemplateColumns: "minmax(0,.95fr) minmax(0,1fr) minmax(0,1fr)", gap: "clamp(14px,2vw,28px)", padding: "18px 0" }}>
                  <div style={{ fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Modalités de sortie</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Levée de l’option, cession du contrat ou terme, indemnité contractuelle</div>
                  <div style={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "var(--lb-ink)" }}>Remboursement des engagements ; à défaut, réalisation de l’actif par le fiduciaire</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lequel" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Aide à la décision</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Lequel pour votre dossier ?</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "760px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Quatre situations qui orientent vers le crédit-bail, quatre vers la fiducie. La qualification tranche en dernier ressort.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <div style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose),0 10px 30px rgba(0,0,0,.1)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", top: "-46px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(227,68,84,.09)" }}></span>
              <div style={{ position: "relative", display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="file-signature" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Plutôt le crédit-bail</div>
                  <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>4 signaux</div>
                </div>
              </div>
              <ul style={{ position: "relative", listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Actif pouvant être cédé à un crédit-bailleur</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Fiscalité de cession compatible avec l’objectif de trésorerie nette</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Capacité financière permettant de supporter les loyers</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Option d’achat cohérente avec les objectifs patrimoniaux</span></li>
              </ul>
            </div>
            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,38px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
              <div style={{ position: "relative", display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="shield-halved" style={{ fontSize: "19px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Plutôt la fiducie</div>
                  <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>4 signaux</div>
                </div>
              </div>
              <ul style={{ position: "relative", listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", flexDirection: "column", gap: "15px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Actif de valeur significative, généralement à partir de 5 M€</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Enjeu fiscal important en cas de cession, notamment avec une VNC faible</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Préférence pour un crédit garanti, avec acceptation du transfert juridique prévu au contrat</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Montant et enjeux du financement justifiant les coûts de structuration et de suivi</span></li>
              </ul>
            </div>
          </div>
          <div className="lb-doubt" data-reveal="" style={{ marginTop: "clamp(20px,2vw,28px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "clamp(20px,2.4vw,36px)", alignItems: "center", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,30px) clamp(22px,2.2vw,34px)" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="question" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Le financement peut être apporté par un ou plusieurs financeurs, et aucun de ces critères ne détermine seul l’orientation. Le test d’éligibilité pré-oriente en 5 minutes ; la qualification tranche ensuite.</span>
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
