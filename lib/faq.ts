export type FaqItem = { question: string; answer: string };

/** The five-question digest shown on the home page. */
export const FAQ_TOP: FaqItem[] = [
  {
    question: 'Comment fonctionne une opération de leaseback immobilier ?',
    answer:
      "Deux véhicules existent. En cession-bail immobilière, réalisée au moyen d'un crédit-bail immobilier, la société cède des murs qu'elle détient déjà à un crédit-bailleur qui les lui reloue ; l'exploitation se poursuit sans interruption et vous pouvez lever l'option d'achat selon les conditions prévues au contrat. En fiducie-sûreté, la propriété est transférée à titre de garantie d'un crédit adossé, et les biens ou droits transférés sont restitués selon les modalités prévues au contrat.",
  },
  {
    question: "Quels sont les délais réels d'une opération ?",
    answer:
      "Comptez quatre à huit mois entre la qualification et le déblocage des fonds, selon la complexité de l'actif, la levée des garanties existantes et la disponibilité des pièces.",
  },
  {
    question: 'Quel montant pouvons-nous espérer débloquer ?',
    answer:
      "Le financement brut se situe indicativement à 80 % de la valeur de l'actif en crédit-bail, 70 % en fiducie-sûreté. La trésorerie nette s'obtient après remboursement des encours, fiscalité et frais — expertise, structuration, fiducie, notaire, droits. Aucun montant n'est garanti avant expertise.",
  },
  {
    question: "L'opération est-elle réservée aux entreprises en difficulté ?",
    answer:
      'Non. La majorité des dossiers concernent des sociétés saines qui arbitrent leur bilan : croissance externe, dette arrivée à échéance, transmission.',
  },
  {
    question: 'Comment êtes-vous rémunérés ?',
    answer:
      "Par une commission de structuration due au succès de l'opération, communiquée par écrit avant tout engagement. La qualification initiale est gratuite.",
  },
];

/** The full list on /faq. */
export const FAQ_ALL: FaqItem[] = [
  {
    question: 'Perdons-nous la propriété de nos locaux ?',
    answer:
      "En crédit-bail, la propriété juridique passe au crédit-bailleur pendant la durée du contrat, et vous pouvez lever l'option d'achat selon les conditions prévues au contrat, à un prix connu dès la signature. En fiducie-sûreté, la propriété est transférée à titre de garantie : une fois les engagements remboursés, les biens ou droits transférés sont restitués selon les modalités prévues au contrat.",
  },
  {
    question: "Quels sont les délais réels d'une opération ?",
    answer:
      "Un cycle de traitement de plusieurs mois est habituel : comptez quatre à huit mois entre la qualification et le déblocage des fonds, selon la complexité de l'actif, le nombre d'entités concernées, la levée des garanties existantes et la disponibilité des pièces.",
  },
  {
    question: 'Quel montant pouvons-nous espérer débloquer ?',
    answer:
      "Le financement brut se situe indicativement à 80 % de la valeur de l'actif en crédit-bail, 70 % en fiducie-sûreté. La trésorerie nette s'obtient après remboursement des encours, fiscalité et frais — expertise, structuration, fiducie, notaire, droits. Aucun montant n'est garanti avant expertise.",
  },
  {
    question: "L'opération est-elle réservée aux entreprises en difficulté ?",
    answer:
      "Non. La majorité des dossiers que nous structurons concernent des sociétés saines qui arbitrent leur bilan : financement d'une croissance externe, remboursement d'une dette arrivée à échéance, transmission.",
  },
  {
    question: 'Quel est le traitement fiscal des loyers ?',
    answer:
      "Les loyers de crédit-bail sont déductibles dans les limites de la réglementation fiscale applicable. La fiscalité de la cession, des loyers et de la levée d'option est analysée au regard de la situation du dossier, et doit être validée avec votre conseil fiscal.",
  },
  {
    question: 'Que se passe-t-il si nous voulons sortir avant le terme ?',
    answer:
      "Les contrats, d'une durée de 8 à 15 ans, prévoient des conditions de sortie anticipée assorties d'une indemnité contractuelle. Ces clauses sont négociées en amont et font partie des points que nous comparons entre les offres.",
  },
  {
    question: 'Intervenez-vous partout en France ?',
    answer:
      "Oui. Nous sommes basés à Nantes et intervenons sur l'ensemble du territoire, sur des actifs professionnels situés en France métropolitaine.",
  },
  {
    question: 'Comment êtes-vous rémunérés ?',
    answer:
      "Par une commission de structuration due au succès de l'opération, communiquée par écrit avant tout engagement. La qualification initiale est gratuite et sans engagement.",
  },
];
