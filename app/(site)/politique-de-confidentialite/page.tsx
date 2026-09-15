import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Données collectées, finalités, destinataires, durées de conservation et exercice de vos droits.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: {
    title: "Politique de confidentialité",
    description: "Données collectées, finalités, destinataires, durées de conservation et exercice de vos droits.",
    url: "/politique-de-confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <div>
      <section style={{ background: "var(--lb-white)", padding: "clamp(52px,5vw,96px) var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "900px", marginInline: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "13px" }}><span style={{ width: "36px", height: "2px", background: "var(--lb-rose)" }}></span><span style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "14px", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--lb-rose)" }}>Informations légales</span></div>
          <h1 className="lb-editorial" style={{ marginTop: "20px", fontSize: "clamp(30px,3vw,52px)" }}>Politique de confidentialité</h1>
          <p style={{ margin: "18px 0 0", maxWidth: "640px", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-intro-lh)", color: "var(--lb-ink-2)" }}>Quelles données sont collectées, pourquoi, combien de temps, et comment exercer vos droits.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px", marginTop: "clamp(32px,3.4vw,56px)" }}>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Responsable de traitement</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Bluelease, société de structuration financière indépendante immatriculée à l’ORIAS sous le n° 25000436, dont le siège est situé 15 Boulevard Gabriel Guist’hau, 44000 Nantes. Contact : contact@leaseback.immo — 02 55 99 44 07. Les coordonnées complètes du représentant et, le cas échéant, du délégué à la protection des données sont à confirmer avant mise en ligne.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Données collectées</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Test d’éligibilité : profil du demandeur, caractéristiques de l’actif (type, localisation, valeur estimée, détention, occupation, encours et garanties, VNC), objectif et montant du financement, situation financière déclarée, puis nom, société, fonction, téléphone et e-mail professionnel. Formulaire de contact : nom, société, coordonnées et message. Pièces éventuellement déposées : expertise ou avis de valeur, liasse fiscale ou bilan, tableau des encours, Kbis, bail et compléments.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Finalités et base légale</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Les données servent à instruire votre demande, établir une orientation indicative, vous recontacter et, si vous donnez votre accord, présenter votre dossier à un ou plusieurs financeurs. La base légale est l’exécution de mesures précontractuelles prises à votre demande, et l’intérêt légitime de Bluelease pour le suivi de la relation commerciale.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Destinataires</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Les données sont traitées par les collaborateurs de Bluelease en charge du dossier. Aucun élément n’est transmis à un établissement financeur, un crédit-bailleur ou un fiduciaire sans votre accord écrit préalable. Les sous-traitants techniques — hébergement, messagerie, outil de gestion de dossiers — sont listés et communiqués sur demande ; leurs coordonnées sont à confirmer avant mise en ligne.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Durées de conservation</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Dossier non poursuivi : trois ans à compter du dernier contact. Dossier ayant donné lieu à une opération : durée de la relation contractuelle, puis la durée de prescription légale applicable. Les pièces déposées sont supprimées à votre demande, sous réserve des obligations légales de conservation.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Sécurité et hébergement</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>L’accès aux dossiers est restreint aux personnes habilitées et les pièces déposées ne sont jamais publiques. La localisation de l’hébergement et les mesures de sécurité applicables sont précisées avant toute mise en ligne : aucune affirmation n’est faite ici tant que le prestataire n’est pas confirmé.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Vos droits</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, exerçable à contact@leaseback.immo. Vous pouvez introduire une réclamation auprès de la CNIL.</p></div>
            <div><h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "24px", color: "var(--text-heading)" }}>Cookies</h2><p style={{ margin: "12px 0 0", fontFamily: "var(--font-body)", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>Le site n’utilise pas de cookie publicitaire ni de traceur tiers à des fins de profilage. Toute mesure d’audience mise en place ultérieurement fera l’objet d’une information et, le cas échéant, d’un recueil de consentement.</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}
