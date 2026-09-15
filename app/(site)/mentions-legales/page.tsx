import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, nature des informations publiées, propriété intellectuelle et hébergement.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    title: "Mentions légales",
    description: "Éditeur, nature des informations publiées, propriété intellectuelle et hébergement.",
    url: "/mentions-legales",
  },
};

export default function MentionsPage() {
  return (
    <div>
      <section style={{ background: "var(--lb-white)", padding: "clamp(52px,5vw,96px) var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "900px", marginInline: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "20px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Informations légales</span></div>
          <h1 className="lb-editorial" style={{ marginTop: "20px", fontSize: "clamp(30px,3vw,52px)" }}>Mentions légales</h1>
          <p style={{ margin: "18px 0 0", maxWidth: "620px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Éditeur, nature des informations publiées, données personnelles et propriété intellectuelle.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginTop: "clamp(32px,3.4vw,56px)" }}>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Éditeur du site</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>leaseback.immo est un service opéré par Bluelease, société de structuration financière indépendante, immatriculée à l'ORIAS sous le n° 25000436. Siège social : 15 Boulevard Gabriel Guist'hau, 44000 Nantes. Téléphone : 02 55 99 44 07. Courriel : contact@leaseback.immo</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Nature des informations publiées</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Les contenus de ce site sont fournis à titre informatif et s'adressent exclusivement à des personnes morales. Ils ne constituent ni une offre de financement, ni un conseil juridique, comptable ou fiscal. Toute opération est soumise à l'étude du dossier et à l'accord de l'établissement financeur.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Données personnelles</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Les données transmises via le test d'éligibilité sont utilisées pour l'étude de la demande et la relation commerciale qui en découle. Elles ne sont communiquées à un tiers financeur qu'avec l'accord écrit du demandeur. Vous disposez d'un droit d'accès, de rectification et de suppression, exerçable à contact@leaseback.immo</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Propriété intellectuelle</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>L'ensemble des éléments composant ce site — marque, textes, photographies, identité visuelle — est protégé. Toute reproduction, totale ou partielle, est soumise à autorisation écrite préalable.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Hébergement</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Les coordonnées complètes de l’hébergeur — raison sociale, adresse et téléphone — sont communiquées sur simple demande à contact@leaseback.immo. À compléter avant mise en ligne : ces informations doivent figurer intégralement au titre de la LCEN.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
