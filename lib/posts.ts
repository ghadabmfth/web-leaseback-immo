export type PostBlock = { heading: string; body: string };

export type Post = {
  slug: string;
  tag: string;
  read: string;
  date: string;
  /** ISO date, for <time> and the sitemap. */
  published: string;
  image: string;
  title: string;
  excerpt: string;
  pull: string;
  blocks: PostBlock[];
};

/** Editorial content, newest first. */
export const posts: Post[] = [
  {
    slug: "seuils-2026",
    tag: "Mécanisme",
    read: "6 min",
    date: "12 août 2026",
    published: "2026-08-12",
    image: "/img/asset-bureaux.jpg",
    title: "Crédit-bail ou fiducie : ce qui décide vraiment du choix",
    excerpt: "Le montant n'est qu'un premier filtre. La structure de détention et l'objectif du financement pèsent souvent davantage.",
    pull: "Un dossier bien orienté dès la qualification économise deux mois d'instruction.",
    blocks: [
      { heading: "", body: "Les seuils sont connus : 1 M€ pour le crédit-bail immobilier, 5 M€ pour la fiducie-sûreté. Ils écartent une partie des dossiers, mais ils ne suffisent jamais à trancher. Sur les opérations que nous structurons, le choix se joue sur trois autres critères." },
      { heading: "La structure de détention", body: "Lorsque les murs sont portés par une SCI distincte de l'exploitante, le crédit-bail impose de traiter deux entités et deux jeux d'intérêts. La fiducie, qui ne transfère l'actif qu'à titre de garantie, s'accommode mieux d'un montage à plusieurs étages — au prix d'une documentation plus lourde." },
      { heading: "L'horizon de l'opération", body: "Un dirigeant qui veut récupérer ses murs à terme connu privilégie l'option d'achat du crédit-bail, dont le prix est fixé à la signature. Si l'objectif est de sécuriser un prêteur unique sur une période courte, la rétrocession automatique de la fiducie est plus lisible." },
      { heading: "La capacité à porter un loyer", body: "C'est le point que les comités regardent en premier. Un loyer se juge sur la durée du contrat, pas sur l'exercice en cours : une exploitation cyclique doit pouvoir absorber le bas de cycle. Sous réserve de la qualité de l'actif, c'est cette capacité qui calibre le montant débloqué." },
    ],
  },
  {
    slug: "fiscalite-loyers",
    tag: "Fiscalité",
    read: "5 min",
    date: "28 juillet 2026",
    published: "2026-07-28",
    image: "/img/asset-industriel.jpg",
    title: "Loyers déductibles : ce que l'avantage recouvre réellement",
    excerpt: "La déductibilité est réelle, mais elle ne rend pas l'opération moins chère qu'un prêt. Voici comment la lire.",
    pull: "L'opération ne se juge pas au montant débloqué, mais au coût complet rapporté au rendement de ce qu'il finance.",
    blocks: [
      { heading: "", body: "Le loyer de crédit-bail est en principe déductible du résultat imposable, là où le remboursement du capital d'un prêt ne l'est pas. L'écart est réel, mais il est plus étroit qu'il n'y paraît une fois les intérêts et les amortissements pris en compte." },
      { heading: "Le coût complet reste supérieur", body: "Un crédit-bail immobilier se compare rarement favorablement à un prêt bancaire classique sur le seul critère du taux. Ce qu'il apporte est ailleurs : un accès au financement décorrélé de la capacité d'endettement, et une trésorerie mobilisée en une fois." },
      { heading: "La plus-value de cession", body: "La cession des murs dégage une plus-value qui peut, sous conditions, être étalée sur la durée du contrat. Le mécanisme est encadré et dépend de votre situation : il doit être validé avec votre conseil fiscal avant tout engagement, jamais présenté comme un acquis." },
    ],
  },
  {
    slug: "delais-dossier",
    tag: "Process",
    read: "4 min",
    date: "9 juillet 2026",
    published: "2026-07-09",
    image: "/img/asset-commerce.jpg",
    title: "Pourquoi un dossier prend plusieurs mois",
    excerpt: "Expertise, comité, actes notariés : le détail des étapes qui font le calendrier réel d'une opération.",
    pull: "Les dossiers qui aboutissent vite sont ceux dont les pièces étaient prêtes avant la mise en concurrence.",
    blocks: [
      { heading: "", body: "Quatre à huit mois séparent généralement la qualification du déblocage des fonds. Ce délai n'est pas une lenteur administrative : il correspond à des étapes qui ne peuvent pas se chevaucher." },
      { heading: "L'expertise conditionne tout", body: "Aucun établissement n'instruit sans valeur vénale établie par un expert indépendant. Cette expertise fixe le montant maximal mobilisable et détermine si le dossier passe en comité." },
      { heading: "La mise en concurrence", body: "Présenter le dossier à plusieurs financeurs simultanément ajoute deux à trois semaines. C'est le seul moyen d'obtenir des offres comparables terme à terme — montant, durée, loyer, option d'achat et conditions de sortie." },
      { heading: "Ce que vous pouvez anticiper", body: "Comptes des trois derniers exercices, titre de propriété, bail en cours le cas échéant, plan de financement. Réunir ces pièces avant la qualification raccourcit sensiblement le cycle." },
    ],
  },
  {
    slug: "sortie-anticipee",
    tag: "Contrat",
    read: "5 min",
    date: "23 juin 2026",
    published: "2026-06-23",
    image: "/img/asset-mixte.jpg",
    title: "Sortie anticipée : la clause à négocier en amont",
    excerpt: "Les conditions de sortie se lisent rarement au moment de la signature. C'est pourtant là qu'elles se négocient.",
    pull: "Une indemnité de sortie se négocie à l'entrée, jamais au moment où l'on souhaite partir.",
    blocks: [
      { heading: "", body: "Tous les contrats prévoient une sortie anticipée, assortie d'une indemnité contractuelle. Son mode de calcul varie fortement d'un établissement à l'autre et fait partie des points que nous comparons systématiquement." },
      { heading: "Ce que couvre l'indemnité", body: "Elle compense le manque à gagner du crédit-bailleur sur les loyers restants, parfois minorée de la valeur résiduelle de l'actif. Deux offres au même loyer peuvent diverger de plusieurs points sur ce seul poste." },
      { heading: "Les clauses annexes", body: "Sous-location, travaux, cession du contrat en cas de rachat de la société : ces clauses déterminent votre marge de manœuvre pendant huit à quinze ans. Elles se négocient avant signature, pas après." },
    ],
  },
  {
    slug: "arbitrage-bilan",
    tag: "Stratégie",
    read: "6 min",
    date: "4 juin 2026",
    published: "2026-06-04",
    image: "/img/hero-building.jpg",
    title: "Le leaseback n'est pas un signal de détresse",
    excerpt: "La majorité des dossiers que nous structurons concernent des sociétés saines qui arbitrent leur bilan.",
    pull: "Immobiliser la valeur de ses murs est un choix ; le refinancer en est un autre, tout aussi légitime.",
    blocks: [
      { heading: "", body: "L'idée que le leaseback traduirait une difficulté persiste. Elle ne correspond pas à ce que nous observons : croissance externe, investissement industriel, transmission, remboursement d'une dette arrivée à échéance." },
      { heading: "Un arbitrage de bilan", body: "Une entreprise propriétaire immobilise dans un actif une part importante de sa valeur, sans que cet actif produise de trésorerie. Le refinancer revient à choisir où cette valeur travaille — au bilan ou dans l'exploitation." },
      { heading: "Ce que l'opération ne résout pas", body: "Un leaseback ne redresse pas une exploitation déficitaire : il ajoute un loyer à porter. Lorsqu'un dossier repose sur cette seule hypothèse, nous le disons dès la qualification." },
    ],
  },
  {
    slug: "actifs-eligibles",
    tag: "Actifs",
    read: "4 min",
    date: "19 mai 2026",
    published: "2026-05-19",
    image: "/img/approche.jpg",
    title: "Quels biens passent en comité — et lesquels bloquent",
    excerpt: "Liquidité, mono-usage, environnement : les critères qui décident de la finançabilité d'un actif.",
    pull: "Un actif se finance à hauteur de ce qu'un tiers accepterait d'en faire s'il devait le reprendre.",
    blocks: [
      { heading: "", body: "Bureaux, sites industriels, entrepôts, murs de commerce, ensembles mixtes : le périmètre est large. Ce qui distingue les dossiers, c'est la liquidité de l'actif plus que sa catégorie." },
      { heading: "Le mono-usage pèse", body: "Un bâtiment conçu pour un process spécifique se reloue difficilement. Les comités appliquent alors une décote, quand ils n'écartent pas le dossier." },
      { heading: "Les points de blocage courants", body: "Sûretés déjà inscrites, situation locative complexe, passif environnemental non levé, régularité de la situation urbanistique. Ces sujets se traitent en amont, sous peine d'arrêter l'instruction en cours de route." },
    ],
  },
];

export const postTags = ['Tous', 'Mécanisme', 'Fiscalité', 'Process', 'Contrat', 'Stratégie', 'Actifs'];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
