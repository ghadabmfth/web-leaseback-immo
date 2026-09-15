import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Notre approche — Structuration indépendante",
  description: "Bluelease analyse l’actif et le besoin, construit le montage adapté et identifie le partenaire financier cohérent avec le dossier.",
  alternates: { canonical: "/notre-approche" },
  openGraph: {
    title: "Notre approche — Structuration indépendante",
    description: "Bluelease analyse l’actif et le besoin, construit le montage adapté et identifie le partenaire financier cohérent avec le dossier.",
    url: "/notre-approche",
  },
};

export default function ApprochePage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Accompagnement</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Nous ne vendons pas un produit. Nous structurons un dossier.</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Leaseback.immo est opéré par Bluelease, société de structuration indépendante immatriculée à l'ORIAS sous le n° 25000436. Nous ne sommes ni un établissement de crédit, ni un fonds : nous analysons l’actif et le besoin, construisons le montage adapté et identifions le partenaire financier cohérent avec le dossier.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/faq" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Questions fréquentes</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-industriel.jpg) center 40%/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Statut</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Indépendants</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Rémunération</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Au succès</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Interlocuteur</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Un seul, de bout en bout</div></div>
            </div>
          </div>
        </div>
      </section>

  
      <section id="conviction" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1fr)" }}>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre conviction</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Un actif immobilier professionnel est un levier stratégique, pas une simple garantie.</h2>
          </div>
          <div data-reveal="">
            <p style={{ margin: "0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Chez leaseback.immo, nous considérons qu’un actif immobilier professionnel est bien plus qu’un simple bien patrimonial ou une garantie bancaire.</p>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Il représente un levier stratégique capable d’accompagner le développement d’une entreprise, de renforcer sa trésorerie, de restructurer son passif ou de soutenir un projet de croissance.</p>
            <div style={{ marginTop: "28px", borderLeft: "3px solid var(--lb-rose)", paddingLeft: "clamp(20px,2.2vw,32px)" }}>
              <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre mission</div>
              <p style={{ margin: "12px 0 0", fontFamily: "var(--font-display)", fontWeight: "400", fontSize: "16px", lineHeight: "26px", letterSpacing: "0em", color: "var(--lb-ink)" }}>Analyser cet actif dans sa globalité afin d’identifier la structuration la plus pertinente au regard des objectifs de l’entreprise.</p>
            </div>
            <div style={{ marginTop: "28px", height: "clamp(180px,17vw,260px)", borderRadius: "var(--r-25)", background: "url(/img/conviction-maquette.jpg) center 60%/cover no-repeat" }}></div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre approche</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Une approche centrée sur l’actif</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>La plupart des recherches de financement commencent par une question. Notre point de départ est différent.</p>
          </div>
          <div className="lb-pivot" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", gap: "clamp(18px,2.2vw,34px)", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)", padding: "clamp(24px,2.4vw,38px)", opacity: ".72" }}>
              <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "20px", background: "rgba(0,0,0,.05)", fontFamily: "Archivo", fontWeight: "500", fontSize: "15px", color: "rgba(0,0,0,.5)" }}>L’approche habituelle</span>
              <div style={{ marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "400", fontSize: "clamp(19px,1.6vw,27px)", lineHeight: "1.4", letterSpacing: "-.02em", color: "rgba(0,0,0,.62)" }}>« Quel est votre besoin de financement ? »</div>
              <p style={{ margin: "14px 0 0", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.58)" }}>Le dossier est construit à partir du montant recherché, puis l’actif est ramené au rang de garantie.</p>
            </div>
            <div className="lb-pivot__arrow" style={{ display: "grid", placeItems: "center", width: "54px", height: "54px", borderRadius: "27px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Icon name="arrow" size={12} color="var(--lb-white)" /></div>
            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,42px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "190px", height: "190px", borderRadius: "95px", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", height: "34px", padding: "0 15px", borderRadius: "20px", background: "var(--lb-rose)", fontFamily: "Archivo", fontWeight: "500", fontSize: "15px", color: "var(--lb-white)" }}>Notre approche</span>
              <div style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.9vw,32px)", lineHeight: "1.32", letterSpacing: "-.028em", color: "var(--lb-white)" }}>« Que permet réellement votre actif ? »</div>
              <p style={{ position: "relative", margin: "14px 0 0", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Nous commençons par étudier l’actif immobilier lui-même. Cette lecture détermine ensuite le véhicule de structuration le plus adapté.</p>
            </div>
          </div>
          <div data-reveal="" style={{ marginTop: "clamp(34px,3.4vw,56px)" }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "16px", paddingBottom: "18px", borderBottom: "2px solid var(--lb-rose)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Les six premiers éléments de notre analyse</span>
              <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.55)" }}>Lus dans cet ordre, avant toute recherche de financement</span>
            </div>
            <div className="lb-ledger" style={{ marginTop: "clamp(14px,1.6vw,22px)", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", columnGap: "clamp(28px,3.4vw,64px)" }}>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>01</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="chart-simple" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Sa valeur</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Valeur vénale et valeur nette comptable : l’écart entre les deux détermine le plafond mobilisable et l’enjeu fiscal de l’opération.</span>
                </span>
              </div>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>02</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="building" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Son usage</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Bureaux, industriel, commercial ou mixte : l’usage conditionne l’appétit des partenaires.</span>
                </span>
              </div>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>03</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="arrow-trend-up" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Sa liquidité</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>La revendabilité du bien et son emplacement pèsent sur les conditions obtenues.</span>
                </span>
              </div>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>04</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="scale-balanced" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Son environnement juridique et fiscal</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Structure de détention, régime fiscal et contraintes contractuelles de l’opération.</span>
                </span>
              </div>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>05</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="credit-card" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Les encours existants</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Le passif déjà adossé au bien se déduit du financement brut : c’est la trésorerie nette réellement dégagée qui compte.</span>
                </span>
              </div>
              <div className="lb-ledger__row" style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,1fr)", columnGap: "clamp(14px,1.6vw,22px)", alignItems: "start", padding: "clamp(18px,1.8vw,24px) 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px", letterSpacing: ".04em", color: "var(--lb-rose)", paddingTop: "12px" }}>06</span>
                <span style={{ display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="bullseye" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.25vw,20px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Les objectifs du dirigeant</span>
                  <span style={{ display: "block", marginTop: "6px", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Croissance, trésorerie nette recherchée, restructuration — rapportées à la capacité de remboursement de l’exploitation.</span>
                </span>
              </div>
            </div>
            </div>
        </div>
      </section>
  

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,.95fr)" }}>
          <div data-reveal="" style={{ alignSelf: "start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Méthodologie</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Une méthodologie de structuration</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)", fontFamily: "Archivo" }}>Chaque dossier fait l’objet d’une analyse approfondie. Nous accompagnons nos clients depuis l’étude de faisabilité jusqu’à la mise en œuvre de l’opération, en coordonnant les différents intervenants.</p>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)", fontFamily: "Archivo" }}>Notre rôle est de construire une opération cohérente, sécurisée et adaptée aux objectifs de l’entreprise.</p>
            <div style={{ marginTop: "30px", paddingTop: "24px", borderTop: "2px solid var(--lb-rose)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.35vw,21px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Intervenants coordonnés</span>
                <span style={{ fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.55)" }}>Sept métiers, un seul pilote</span>
              </div>
              <div className="lb-roster" style={{ marginTop: "18px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", columnGap: "clamp(20px,2.4vw,40px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="building-columns" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Établissements financiers</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="file-signature" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Crédit-bailleurs</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="shield-halved" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Fiduciaires</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="stamp" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Notaires</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="scale-balanced" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Avocats</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="ruler-combined" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Experts immobiliers</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "13px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="user-tie" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                <span style={{ fontFamily: "Archivo", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)" }}>Conseils</span>
              </div>
              </div>
            </div>
            </div>
          <div data-reveal="" className="lb-sticky" style={{ alignSelf: "start", position: "sticky", top: "130px", padding: "clamp(4px,.6vw,10px) 0 0" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(18px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>De l’étude de faisabilité à la mise en œuvre</div>
            <div style={{ marginTop: "26px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px" }}>01</span>
                    <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(227,68,84,.34) 0 6px,transparent 6px 14px)" }}></span>
                  </div>
                  <div style={{ paddingBottom: "22px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Étude de faisabilité</div>
                    <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Analyse de l’actif, de la structure de détention et des objectifs poursuivis.</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px" }}>02</span>
                    <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(227,68,84,.34) 0 6px,transparent 6px 14px)" }}></span>
                  </div>
                  <div style={{ paddingBottom: "22px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Choix du véhicule de structuration</div>
                    <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Crédit-bail immobilier ou fiducie-sûreté, selon le montant et le montage.</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px" }}>03</span>
                    <span style={{ flex: "1", width: "2px", margin: "8px 0", background: "repeating-linear-gradient(180deg,rgba(227,68,84,.34) 0 6px,transparent 6px 14px)" }}></span>
                  </div>
                  <div style={{ paddingBottom: "22px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Coordination des intervenants</div>
                    <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Nous pilotons l’ensemble des parties prenantes jusqu’à la signature.</p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "15px" }}>04</span>
                
                  </div>
                  <div style={{ paddingBottom: "0" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Mise en œuvre de l’opération</div>
                    <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Suivi jusqu’au déblocage des fonds et à la finalisation du montage.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bluelease" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>NOTRE EXPERTISE</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Une expertise portée par Bluelease</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "720px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)", fontFamily: "Archivo" }}>Leaseback.immo est une marque développée par Bluelease, cabinet indépendant spécialisé dans le financement et la structuration d’actifs professionnels.</p>
          </div>
          <div className="lb-lineage" data-reveal="" style={{ marginTop: "clamp(28px,2.8vw,44px)", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "var(--lb-white)", padding: "clamp(18px,1.8vw,28px) clamp(16px,2vw,32px)", textAlign: "center" }}>
            <div style={{ padding: "0 clamp(12px,1.4vw,22px)", boxShadow: "1px 0 0 rgba(0,0,0,.08)" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>ORIAS</div><div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.6vw,26px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>n° 25000436</div></div>
            <div style={{ padding: "0 clamp(12px,1.4vw,22px)", boxShadow: "1px 0 0 rgba(0,0,0,.08)" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Siège</div><div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.6vw,26px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Nantes</div></div>
            <div style={{ padding: "0 clamp(12px,1.4vw,22px)" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Périmètre</div><div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.6vw,26px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>France entière</div></div>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(18px,1.8vw,26px)", alignItems: "stretch" }}>
            <div className="lb-soln" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-rose-tint)", padding: "clamp(26px,2.6vw,42px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-70px", top: "-70px", width: "clamp(120px,30%,160px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(227,68,84,.22)" }}></span>
              <span style={{ position: "relative", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", height: "36px", padding: "0 15px", borderRadius: "20px", background: "var(--lb-rose)", fontFamily: "Archivo", fontWeight: "500", fontSize: "15px", color: "var(--lb-white)" }}>Cabinet</span>
              <div style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.7vw,28px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Bluelease</div>
              <p style={{ position: "relative", margin: "12px 0 0", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.72)" }}>Bluelease accompagne les entreprises dans leurs projets de financement, aussi bien sur le leasing de matériels et d’équipements professionnels que sur le refinancement d’actifs immobiliers professionnels.</p>
              <ul style={{ position: "relative", listStyle: "none", margin: "auto 0 0", padding: "24px 0 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Leasing de matériels et d’équipements professionnels</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Refinancement d’actifs immobiliers professionnels</span></li>
              </ul>
            </div>
            <div className="lb-soln lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(26px,2.6vw,42px)" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-70px", bottom: "-80px", width: "clamp(120px,30%,160px)", aspectRatio: "1", borderRadius: "50%", background: "rgba(255,255,255,.06)" }}></span>
              <span style={{ position: "relative", display: "inline-flex", alignSelf: "flex-start", alignItems: "center", height: "36px", padding: "0 15px", borderRadius: "20px", background: "var(--lb-rose)", fontFamily: "Archivo", fontWeight: "500", fontSize: "15px", color: "var(--lb-white)" }}>Marque dédiée</span>
              <div style={{ position: "relative", marginTop: "22px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(21px,1.7vw,28px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Leaseback immobilier</div>
              <p style={{ position: "relative", margin: "12px 0 0", fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.8)" }}>Cette organisation permet à leaseback.immo de bénéficier de l’expérience, du réseau de partenaires et du savoir-faire développés par Bluelease, tout en proposant une expertise entièrement consacrée au refinancement immobilier professionnel.</p>
              <ul style={{ position: "relative", listStyle: "none", margin: "auto 0 0", padding: "24px 0 0", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Réseau de partenaires financiers établi</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontFamily: "Archivo", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Expertise dédiée au refinancement immobilier professionnel</span></li>
              </ul>
            </div>
                </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", justifyContent: "center" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Notre approche</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)", textAlign: "center" }}>Une plateforme exclusivement dédiée aux professionnels</h2>
            <p style={{ margin: "16px 0 0", maxWidth: "700px", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)", fontFamily: "Archivo" }}>Leaseback.immo s’adresse exclusivement aux entreprises, holdings, sociétés patrimoniales, dirigeants et à leurs conseils.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "26px", justifyContent: "center" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)", fontFamily: "Archivo" }}><Fa name="r-circle-check" style={{ fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} />Entreprises</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)", fontFamily: "Archivo" }}><Fa name="r-circle-check" style={{ fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} />Holdings</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)", fontFamily: "Archivo" }}><Fa name="r-circle-check" style={{ fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} />Sociétés patrimoniales</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)", fontFamily: "Archivo" }}><Fa name="r-circle-check" style={{ fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} />Dirigeants</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "11px", height: "46px", padding: "0 18px", borderRadius: "23px", boxShadow: "var(--ring-hairline)", fontWeight: "400", fontSize: "16px", color: "var(--lb-ink)", fontFamily: "Archivo" }}><Fa name="r-circle-check" style={{ fontSize: "14px", lineHeight: "1", color: "var(--lb-rose)" }} />Conseils</span>
            </div>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(32px,3.2vw,52px)", alignItems: "stretch" }}>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-gold)", padding: "clamp(22px,2.2vw,32px)" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-gold)", color: "var(--lb-navy)" }}><Fa name="xmark" style={{ fontSize: "16px", lineHeight: "1", color: "var(--lb-white)" }} /></span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Pas de catalogue de solutions</div>
              </div>
              <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Nous n’avons pas vocation à proposer un catalogue de solutions de financement standardisées.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-15)", background: "var(--lb-white)", padding: "clamp(22px,2.2vw,32px)", borderWidth: "2px", borderStyle: "solid", borderColor: "var(--lb-rose)" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "44px", height: "44px", borderRadius: "22px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Fa name="check" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(17px,1.35vw,22px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Une structuration par dossier</div>
              </div>
              <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)", fontFamily: "Archivo" }}>Notre démarche consiste à analyser chaque actif afin de déterminer la structuration la plus cohérente et d’accompagner sa mise en œuvre avec les partenaires les plus adaptés.</p>
            </div>
          </div>
      
        </div>
      </section>
    </div>
  );
}
