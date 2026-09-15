import type { Metadata } from 'next';
import Link from 'next/link';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Actifs finançables — Bureaux, industriel, commerce, mixte",
  description: "Quels biens professionnels peuvent être refinancés : types d’actifs, critères d’éligibilité et points qui arrêtent un dossier.",
  alternates: { canonical: "/actifs-financables" },
  openGraph: {
    title: "Actifs finançables — Bureaux, industriel, commerce, mixte",
    description: "Quels biens professionnels peuvent être refinancés : types d’actifs, critères d’éligibilité et points qui arrêtent un dossier.",
    url: "/actifs-financables",
  },
};

export default function ActifsPage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Actifs finançables</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Quels biens peuvent être refinancés ?</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Bureaux, sites industriels, murs de commerce, ensembles mixtes : le périmètre est large. Ce qui distingue les dossiers, c’est la liquidité de l’actif plus que sa catégorie.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="/eligibilite" tone="primary">Tester mon éligibilité</Button>
              <Link href="/comparatif" className="lb-hero__link" style={{ display: "inline-flex", alignItems: "center", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}><span className="lb-arrowlink" style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}><span style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em" }}>Comparer les instruments</span><span className="lb-arrowlink__dot" style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "27px", borderRadius: "999px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Icon name="arrow" size={10} color="var(--lb-white)" /></span></span></Link>
            </div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-industriel.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Familles</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Quatre types</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Localisation</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>France métropolitaine</div></div>
              <div><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Seuil</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Dès 1 M€</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="types" style={{ background: "var(--lb-white)", padding: "var(--section-y) var(--page-x)" }}>
        <div style={{ maxWidth: "1770px", marginInline: "auto" }}>
          <div data-reveal="" style={{ maxWidth: "900px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Les familles</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Quatre types de biens</h2>
            <p style={{ margin: "16px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Pour chaque famille, ce que les comités regardent en premier.</p>
          </div>
          <div className="lb-grid lb-grid-2" data-reveal="" style={{ marginTop: "clamp(30px,3vw,50px)", alignItems: "stretch" }}>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ position: "relative", display: "block", height: "clamp(190px,15vw,240px)", background: "url(/img/asset-bureaux.jpg) center/cover no-repeat" }}>
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 45%,rgba(13,27,42,.78) 100%)" }}></span>
                <span style={{ position: "absolute", left: "20px", top: "20px", display: "inline-flex", alignItems: "center", height: "32px", padding: "0 13px", borderRadius: "16px", background: "rgba(255,255,255,.92)", fontWeight: "500", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--lb-ink)" }}>01</span>
                <span style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Bureaux</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", flex: "1", padding: "clamp(20px,2vw,30px)" }}>
                <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Sièges sociaux et plateaux tertiaires, en centre-ville comme en périphérie. La qualité de l’emplacement et la divisibilité des plateaux pèsent le plus.</span>
                <span style={{ marginTop: "auto", paddingTop: "22px", display: "block" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point fort</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Selon emplacement, état et occupation</span></span>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point de vigilance</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Vacance locative</span></span>
                </span>
              </span>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ position: "relative", display: "block", height: "clamp(190px,15vw,240px)", background: "url(/img/asset-industriel.jpg) center/cover no-repeat" }}>
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 45%,rgba(13,27,42,.78) 100%)" }}></span>
                <span style={{ position: "absolute", left: "20px", top: "20px", display: "inline-flex", alignItems: "center", height: "32px", padding: "0 13px", borderRadius: "16px", background: "rgba(255,255,255,.92)", fontWeight: "500", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--lb-ink)" }}>02</span>
                <span style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Industriel &amp; logistique</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", flex: "1", padding: "clamp(20px,2vw,30px)" }}>
                <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Sites de production, entrepôts et plateformes de distribution. La hauteur libre, l’accès poids lourds et la conformité environnementale sont déterminants.</span>
                <span style={{ marginTop: "auto", paddingTop: "22px", display: "block" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point fort</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Surfaces importantes</span></span>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point de vigilance</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Mono-usage</span></span>
                </span>
              </span>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ position: "relative", display: "block", height: "clamp(190px,15vw,240px)", background: "url(/img/asset-commerce.jpg) center/cover no-repeat" }}>
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 45%,rgba(13,27,42,.78) 100%)" }}></span>
                <span style={{ position: "absolute", left: "20px", top: "20px", display: "inline-flex", alignItems: "center", height: "32px", padding: "0 13px", borderRadius: "16px", background: "rgba(255,255,255,.92)", fontWeight: "500", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--lb-ink)" }}>03</span>
                <span style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Commerce</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", flex: "1", padding: "clamp(20px,2vw,30px)" }}>
                <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Murs de magasins, retail parks et locaux d’activité de proximité. Le flux, la zone de chalandise et la solidité de l’enseigne comptent autant que le bâti.</span>
                <span style={{ marginTop: "auto", paddingTop: "22px", display: "block" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point fort</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Emplacement mesurable</span></span>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point de vigilance</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Cyclicité du secteur</span></span>
                </span>
              </span>
            </div>
            <div className="lb-cardhov" style={{ display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)" }}>
              <span style={{ position: "relative", display: "block", height: "clamp(190px,15vw,240px)", background: "url(/img/asset-mixte.jpg) center/cover no-repeat" }}>
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 45%,rgba(13,27,42,.78) 100%)" }}></span>
                <span style={{ position: "absolute", left: "20px", top: "20px", display: "inline-flex", alignItems: "center", height: "32px", padding: "0 13px", borderRadius: "16px", background: "rgba(255,255,255,.92)", fontWeight: "500", fontSize: "13px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--lb-ink)" }}>04</span>
                <span style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Mixte</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", flex: "1", padding: "clamp(20px,2vw,30px)" }}>
                <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.7)" }}>Ensembles associant bureaux, activité et surfaces techniques. Ces dossiers demandent une lecture par lot, parfois une division juridique préalable.</span>
                <span style={{ marginTop: "auto", paddingTop: "22px", display: "block" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point fort</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Valeur cumulée</span></span>
                  <span style={{ display: "flex", justifyContent: "space-between", gap: "14px", padding: "11px 0", borderTop: "1px solid rgba(0,0,0,.09)" }}><span style={{ fontWeight: "300", fontSize: "16px", color: "rgba(0,0,0,.55)" }}>Point de vigilance</span><span style={{ fontWeight: "500", fontSize: "16px", color: "var(--lb-rose)" }}>Complexité du découpage</span></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1fr)" }}>
          <div className="lb-sticky" data-reveal="" style={{ alignSelf: "start", position: "sticky", top: "130px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Critères</span></div>
            <h2 style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h2-size)", lineHeight: "1.14", letterSpacing: "-.03em", color: "var(--text-heading)" }}>Ce qui rend un actif finançable</h2>
            <p style={{ margin: "18px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Un actif se finance à hauteur de ce qu’un tiers accepterait d’en faire s’il devait le reprendre. Six critères structurent cette lecture.</p>
            <div style={{ marginTop: "26px", padding: "20px 22px", borderRadius: "var(--r-16)", background: "var(--lb-rose-tint)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Fa name="circle-info" style={{ flex: "none", marginTop: "3px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.74)" }}>Aucun montant n’est garanti avant expertise de la valeur vénale.</span>
            </div>
            <div style={{ marginTop: "14px", padding: "16px 18px", borderRadius: "var(--r-16)", boxShadow: "var(--ring-hairline)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Fa name="file-shield" style={{ flex: "none", marginTop: "3px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} />
              <span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.74)" }}>Les encours existants et les conditions de libération des garanties sont analysés pour structurer le refinancement et déterminer la trésorerie nette susceptible d’être dégagée.</span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <Button href="/eligibilite" tone="primary">Faire qualifier mon actif</Button>
            </div>
          </div>
          <div className="lb-crits" data-reveal="" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="chart-simple" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Valeur vénale</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>À partir de 1 M€ en crédit-bail, 5 M€ en fiducie-sûreté.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="arrow-trend-up" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Liquidité</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>La capacité du bien à se relouer ou se revendre sans décote lourde.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="location-dot" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Emplacement</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Zone d’activité établie, accessibilité, environnement économique.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="file-shield" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Situation juridique</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Titre de propriété clair, sûretés existantes, situation urbanistique régulière.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="leaf" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Environnement</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Passif environnemental identifié et, le cas échéant, levé en amont.</p>
                </div>
              </div>
              <div className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "flex-start", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(20px,2vw,26px)" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "46px", height: "46px", borderRadius: "23px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="building-user" style={{ fontSize: "16px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(16px,1.2vw,19px)", lineHeight: "1.3", letterSpacing: "-.015em", color: "var(--lb-ink)" }}>Exploitation</div>
                  <p style={{ margin: "6px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.7)" }}>Une activité capable de supporter les loyers ou les échéances du financement, selon le montage, sur toute la durée du contrat.</p>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-grid lb-grid-2" data-reveal="" style={{ maxWidth: "1770px", marginInline: "auto", alignItems: "stretch" }}>
          <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,38px)" }}>
            <span className="lb-soln__halo" style={{ position: "absolute", right: "-46px", bottom: "-60px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.06)" }}></span>
            <div style={{ position: "relative", display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "rgba(255,255,255,.08)", color: "var(--lb-gold)" }}><Fa name="xmark" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Points de blocage</div>
                <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-white)" }}>Ce qui arrête un dossier</div>
              </div>
            </div>
            <ul style={{ position: "relative", listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid var(--lb-line-on-dark)", display: "flex", flexDirection: "column", gap: "15px" }}>
            
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Situation locative complexe ou litigieuse, sauf régularisation documentée en amont</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Passif environnemental non levé, dont la levée conditionne l’instruction</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Irrégularité urbanistique, dont la régularisation est à instruire en amont</span></li>
                <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="xmark" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-gold)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(255,255,255,.82)" }}>Bâtiment mono-usage difficilement relouable</span></li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderRadius: "var(--r-25)", background: "var(--lb-white)", boxShadow: "inset 0 0 0 1.5px var(--lb-rose),0 10px 30px rgba(0,0,0,.1)", padding: "clamp(24px,2.4vw,38px)" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: "52px", height: "52px", borderRadius: "26px", background: "var(--lb-rose)", color: "var(--lb-white)", boxShadow: "0 6px 16px rgba(227,68,84,.32)" }}><Fa name="list-check" style={{ fontSize: "18px", lineHeight: "1" }} /></span>
              <div>
                <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>À préparer</div>
                <div style={{ marginTop: "5px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(19px,1.5vw,25px)", letterSpacing: "-.025em", color: "var(--lb-ink)" }}>Les pièces qui accélèrent l’instruction</div>
              </div>
            </div>
            <ul style={{ listStyle: "none", margin: "26px 0 0", padding: "22px 0 0", borderTop: "1px solid rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: "15px" }}>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Titre de propriété et plans du bâtiment</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Comptes des trois derniers exercices</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Bail en cours, le cas échéant</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>État des sûretés inscrites</span></li>
              <li style={{ display: "flex", gap: "13px", alignItems: "flex-start" }}><Fa name="r-circle-check" style={{ flex: "none", marginTop: "4px", fontSize: "15px", lineHeight: "1", color: "var(--lb-rose)" }} /><span style={{ fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.74)" }}>Plan de financement du projet</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
