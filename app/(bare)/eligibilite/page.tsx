import type { Metadata } from 'next';
import { EligibilityWizard } from '@/components/eligibilite/EligibilityWizard';
import { Fa } from '@/components/ui/Fa';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Test d’éligibilité — Orientation indicative en 5 minutes",
  description: "Sept étapes courtes pour savoir si votre actif peut faire l’objet d’une étude en crédit-bail immobilier ou en fiducie-sûreté.",
  alternates: { canonical: "/eligibilite" },
  openGraph: {
    title: "Test d’éligibilité — Orientation indicative en 5 minutes",
    description: "Sept étapes courtes pour savoir si votre actif peut faire l’objet d’une étude en crédit-bail immobilier ou en fiducie-sûreté.",
    url: "/eligibilite",
  },
};

export default function EligibilitePage() {
  return (
    <div>
      <section className="lb-phero" style={{ position: "relative", background: "var(--lb-white)", padding: "clamp(40px,4.4vw,76px) var(--page-x) clamp(36px,3.6vw,60px)" }}>
        <div className="lb-phero__grid" style={{ maxWidth: "1770px", marginInline: "auto", display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "clamp(28px,3.4vw,64px)", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Test d'éligibilité</span></div>
            <h1 className="lb-editorial" style={{ margin: "20px 0 0", maxWidth: "min(100%,760px)", fontSize: "clamp(32px,3.6vw,62px)" }}>Testez votre éligibilité en 5 minutes</h1>
            <p style={{ margin: "20px 0 0", maxWidth: "640px", fontFamily: "var(--font-body)", fontWeight: "400", fontSize: "clamp(17px,1.3vw,20px)", lineHeight: "1.55", color: "var(--lb-ink)" }}>Découvrez rapidement si votre bien et votre projet peuvent être éligibles à une opération de leaseback immobilier.</p>
            <p style={{ margin: "16px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Sept étapes courtes : votre profil, votre actif, sa détention, votre objectif, votre situation financière, vos coordonnées, puis votre orientation. Aucune pièce justificative n’est demandée à ce stade.</p>
            <div className="lb-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "30px" }}>
              <Button href="#lb-test" tone="primary">Tester mon éligibilité</Button>
            </div>
            <div style={{ marginTop: "20px", fontFamily: "var(--font-alt)", fontWeight: "400", fontSize: "15px", color: "#0000009E" }}>Étude initiale gratuite · Sans engagement · Réponse rapide</div>
          </div>
          <div className="lb-phero__media" style={{ position: "relative", borderRadius: "var(--r-25)", overflow: "hidden", minHeight: "clamp(280px,27vw,420px)", background: "url(/img/asset-mixte.jpg) center/cover no-repeat" }}>
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(13,27,42,0) 38%,rgba(13,27,42,.62) 68%,rgba(13,27,42,.94) 100%)" }}></span>
            <div className="lb-phero__meta" style={{ position: "absolute", left: "0", right: "0", bottom: "0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", padding: "clamp(18px,1.8vw,26px)" }}>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Durée</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>5 minutes</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Étude initiale</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Gratuite</div></div>
              <div style={{ paddingRight: "16px" }}><div style={{ fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Engagement</div><div style={{ marginTop: "4px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(15px,1.2vw,19px)", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Aucun</div></div>
            </div>
          </div>
        </div>
      </section>

  
      <section id="lb-test" style={{ background: "var(--lb-white)", padding: "0 var(--page-x) var(--section-y)" }}>
        <div className="lb-split" style={{ maxWidth: "1770px", marginInline: "auto", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", minWidth: "0" }}>
          <div style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "0 10px 30px rgba(0,0,0,.10)", padding: "clamp(26px,3vw,48px)" }}>
            <EligibilityWizard />
          </div>

            <div className="lb-privacy" style={{ marginTop: "25px", borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(26px,2.6vw,42px)", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "clamp(20px,2vw,28px)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ width: "26px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Confidentialité</span></div>
              <div style={{ marginTop: "16px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(20px,1.5vw,25px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Vos données restent confidentielles</div>
              <p style={{ margin: "12px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "26px", color: "rgba(0,0,0,.68)" }}>Les informations transmises servent uniquement à l'étude de votre projet et ne constituent pas un engagement de votre part.</p>
            </div>
            <div className="lb-privacy__grid" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="lock" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Usage limité</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Vos réponses servent à instruire votre demande, rien d'autre. Aucune revente, aucune prospection tierce.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="file-signature" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Accord écrit</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Aucun élément n'est transmis à un établissement financeur sans votre autorisation écrite préalable.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", color: "var(--lb-rose)" }}><Fa name="eraser" style={{ fontSize: "15px", lineHeight: "1" }} /></span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Droit de suppression</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Accès, rectification et suppression à tout moment, sur simple demande à contact@leaseback.immo.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignSelf: "start" }}>
            <div style={{ borderRadius: "var(--r-15)", background: "var(--lb-white)", boxShadow: "var(--shadow-card)", padding: "clamp(24px,2.4vw,36px)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ width: "26px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Mode d'emploi</span></div>
              <div style={{ marginTop: "16px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(20px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-ink)" }}>Comment remplir le test</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "22px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>01</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Votre profil</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Votre rôle et la personne pour laquelle vous réalisez le test.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>02</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Votre actif immobilier</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Type d’actif, localisation, valeur estimée et avis de valeur éventuel.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>03</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Détention et occupation</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Détenteur, occupant, bail, encours et garanties, valeur nette comptable.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>04</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Objectif de financement</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Objet du financement, montant recherché et échéance visée.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>05</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Situation financière</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Résultat du dernier exercice, comptes disponibles, tensions éventuelles.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>06</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Vos coordonnées</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>Nom, société, fonction, téléphone et e-mail professionnel.</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ flex: "none", display: "grid", placeItems: "center", width: "28px", height: "28px", borderRadius: "14px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>07</span>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>Votre orientation</div>
                  <p style={{ margin: "4px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(0,0,0,.68)" }}>L’orientation indicative s’affiche aussitôt à l’écran.</p>
                </div>
              </div>
              </div>
              <p style={{ margin: "22px 0 0", paddingTop: "20px", borderTop: "1px solid rgba(0,0,0,.08)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)", marginTop: "20px" }}>Les réponses sont pour l’essentiel à choisir dans une liste. Deux champs libres sont demandés — ville de l’actif et, le cas échéant, montant de la VNC — et le champ « usage des fonds » est facultatif.</p>
            </div>

            <div className="lb-ondark" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--r-15)", background: "var(--lb-navy)", boxShadow: "var(--shadow-card-ink)", padding: "clamp(24px,2.4vw,36px)", marginTop: "25px" }}>
              <span className="lb-soln__halo" style={{ position: "absolute", right: "-60px", top: "-70px", width: "180px", height: "180px", borderRadius: "90px", background: "rgba(255,255,255,.05)" }}></span>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "11px" }}><span style={{ width: "26px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Après l’envoi</span></div>
                <div style={{ marginTop: "16px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "clamp(20px,1.4vw,23px)", letterSpacing: "-.02em", color: "var(--lb-white)" }}>Ce qui se passe ensuite</div>
                <div style={{ marginTop: "24px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Fa name="check" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                  <span style={{ flex: "1", width: "2px", margin: "6px 0", background: "var(--lb-line-on-dark)" }}></span>
                </div>
                <div style={{ paddingBottom: "22px" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Immédiat</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Accusé de réception</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(255,255,255,.72)" }}>Votre demande est enregistrée et attribuée à un responsable de dossier.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Fa name="check" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
                  <span style={{ flex: "1", width: "2px", margin: "6px 0", background: "var(--lb-line-on-dark)" }}></span>
                </div>
                <div style={{ paddingBottom: "22px" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Sous 48 h maximum</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Rappel téléphonique</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(255,255,255,.72)" }}>Un échange court pour valider les éléments et cadrer votre besoin.</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", columnGap: "18px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: "34px", height: "34px", borderRadius: "17px", background: "var(--lb-rose)", color: "var(--lb-white)" }}><Fa name="check" style={{ fontSize: "13px", lineHeight: "1" }} /></span>
              
                </div>
                <div style={{ paddingBottom: "0" }}>
                  <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-gold)" }}>Après échange</div>
                  <div style={{ marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "17px", letterSpacing: "-.01em", color: "var(--lb-white)" }}>Pré-orientation</div>
                  <p style={{ margin: "5px 0 0", fontWeight: "300", fontSize: "16px", lineHeight: "25px", color: "rgba(255,255,255,.72)" }}>Crédit-bail immobilier ou fiducie-sûreté — ou la réponse que le dossier ne s'y prête pas.</p>
                </div>
              </div>
                </div>
                <p style={{ margin: "24px 0 0", paddingTop: "20px", borderTop: "1px solid var(--lb-line-on-dark)", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(255,255,255,.6)" }}>Aucune pièce comptable n'est demandée à ce stade et aucun élément n'est transmis à un financeur sans votre accord écrit.</p>
              </div>
            </div>

          </div>
        </div>
        </section>

      </div>
  );
}
