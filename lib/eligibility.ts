export type Choice = {
  key: string;
  title: string;
  type: 'choice';
  options: string[];
  hint?: string;
  multi?: boolean;
  exclusive?: string[];
  cols?: 2;
};

export type FreeText = {
  key: string;
  title: string;
  type: 'text' | 'number' | 'area';
  placeholder: string;
  hint?: string;
  unit?: string;
  optional?: boolean;
  when?: (answers: Answers) => boolean;
};

export type Group = Choice | FreeText;
export type Screen = { step: number; label: string; groups: Group[] };
export type Answers = Record<string, string | string[] | undefined>;

const choice = (key: string, title: string, options: string[], extra: Partial<Choice> = {}): Choice => ({
  key,
  title,
  type: 'choice',
  options,
  ...extra,
});

/* Seven declared steps, split across ten screens so no screen asks more than
   three questions. Screen data drives the render; the markup stays generic. */
export const screens: Screen[] = [
  {
    step: 1,
    label: 'Votre profil',
    groups: [
      choice('profil', 'Vous êtes :', ['Dirigeant', 'SCI propriétaire', 'Holding', 'Expert-comptable', 'Avocat', 'Notaire', 'Autre']),
      choice('pourQui', 'Pour qui réalisez-vous ce test ?', ['Mon entreprise', 'Un client']),
    ],
  },
  {
    step: 2,
    label: 'Votre actif immobilier',
    groups: [
      choice(
        'typeActif',
        "Quel type d'actif souhaitez-vous mobiliser ?",
        ['Bureaux', 'Entrepôts', 'Locaux industriels', 'Locaux commerciaux', 'Surfaces mixtes', 'Hôtellerie', 'Santé', 'Logistique', 'Autre'],
        { cols: 2 },
      ),
      choice('enFrance', "L'actif est-il situé en France métropolitaine ?", ['Oui', 'Non']),
    ],
  },
  {
    step: 2,
    label: 'Votre actif immobilier',
    groups: [
      { key: 'ville', title: "Ville et département de l'actif", type: 'text', placeholder: 'Ex : Nantes 44, Lyon 69, Bordeaux 33' },
      choice('valeur', "Quelle est la valeur estimée de l'actif ?", ['<500k€', '500k–1M€', '1–2M€', '2–5M€', '5–10M€', '>10M€', 'Inconnue']),
    ],
  },
  {
    step: 2,
    label: 'Votre actif immobilier',
    groups: [
      choice('expertise', "Disposez-vous d'une expertise ou d'un avis de valeur ?", ['<12 mois', '12–36 mois', 'Plus ancien', 'Non', 'En cours']),
      choice("valeurType", "L'expertise indique-t-elle une valeur libre ou occupée ?", ['Libre', "Occupée ou poursuite d'usage", 'Les deux', 'Je ne sais pas']),
    ],
  },
  {
    step: 3,
    label: 'Détention et occupation',
    groups: [
      choice('detenteur', "Qui détient l'actif immobilier ?", ["Société d'exploitation", 'SCI liée', 'Holding', 'Foncière', 'Tiers', 'Je ne sais pas']),
      choice('occupant', "L'actif est-il occupé par :", ['Propriétaire', 'Société du groupe', 'Locataire tiers', 'Plusieurs locataires', 'Vacant', 'Partiellement vacant']),
    ],
  },
  {
    step: 3,
    label: 'Détention et occupation',
    groups: [
      choice('bail', "Existe-t-il un bail ou une convention d'occupation ?", ['Bail commercial', 'Convention intragroupe', 'Non', 'En cours', 'Je ne sais pas']),
      choice('encours', "Existe-t-il un encours bancaire attaché à l'actif ?", ['Aucun', '<30 % valeur', '30–60 %', '>60 %', 'Je ne sais pas']),
    ],
  },
  {
    step: 3,
    label: 'Détention et occupation',
    groups: [
      choice('garanties', "L'actif fait-il déjà l'objet d'une garantie ?", ['Hypothèque', 'PPD', 'Fiducie-sûreté', 'Nantissement titres', 'Aucune', 'Je ne sais pas'], {
        multi: true,
        hint: 'Plusieurs réponses possibles',
        exclusive: ['Aucune', 'Je ne sais pas'],
      }),
      choice('vnc', 'Connaissez-vous la valeur nette comptable (VNC) ?', ['Oui, montant connu', 'Environ / partiellement estimé', 'Non, je ne connais pas']),
      {
        key: 'vncMontant',
        title: 'Montant de la VNC',
        type: 'number',
        placeholder: 'Ex : 1 250 000',
        unit: '€',
        when: (a) => a.vnc === 'Oui, montant connu',
      },
      choice('amorti', "L'actif est-il fortement amorti ?", ['Oui', 'Non', 'Je ne sais pas']),
    ],
  },
  {
    step: 4,
    label: 'Objectif de financement',
    groups: [
      choice(
        'objectif',
        'Quels sont vos objectifs de financement ?',
        ['Trésorerie', 'BFR', 'Investissement', 'Refinancement dette', 'Restructuration', 'Croissance externe', 'Sortie dette court terme', 'Optimisation bilan', 'Autre'],
        { multi: true, hint: 'Plusieurs réponses possibles' },
      ),
      choice('montant', 'Quel montant recherchez-vous ?', ['<300k€', '300–600k€', '600k–1,2M€', '1,2–3M€', '3–6M€', '>6M€', 'Je ne sais pas']),
    ],
  },
  {
    step: 4,
    label: 'Objectif de financement',
    groups: [
      choice('echeance', 'À quelle échéance ?', ['<1 mois', '1–3 mois', '3–6 mois', '>6 mois', "Pas d'urgence"]),
      {
        key: 'usage',
        title: "Pouvez-vous préciser l'usage des fonds ?",
        hint: '(optionnel)',
        type: 'area',
        placeholder: 'Décrivez l’utilisation prévue des fonds…',
        optional: true,
      },
    ],
  },
  {
    step: 5,
    label: 'Situation financière',
    groups: [
      choice('beneficiaire', "L'entreprise ou le groupe a-t-il dégagé un bénéfice au dernier exercice ?", ['Oui', 'Non', "À l'équilibre", 'Déficit exceptionnel', 'Je ne sais pas']),
      choice('comptes', 'Disposez-vous des derniers comptes annuels ?', ['Dernier exercice', '3 derniers exercices', 'Comptes consolidés', 'Non', 'En cours'], {
        multi: true,
        hint: 'Plusieurs réponses possibles',
        exclusive: ['Non'],
      }),
      choice('tension', 'Situation financière actuelle ?', ['Pas de tension', 'Tension ponctuelle', 'Restructuration', 'Procédure amiable', 'Procédure collective', 'À évoquer directement']),
    ],
  },
];

export type Orientation = {
  tone: 'rose' | 'gold';
  icon: 'circle-check' | 'circle-info';
  pill: string;
  title: string;
  body: string;
};

const COMMON =
  'Cette orientation est indicative et ne constitue pas un accord de financement. Un expert Bluelease vous rappelle sous 48 heures maximum pour échanger sur votre projet.';

export const orientationFootnote = COMMON;

/**
 * Orientation weighs value, detention, existing charges and objective together —
 * never the value alone. It is never a refusal: the last case invites a conversation.
 */
export function orientation(answers: Answers): Orientation {
  const value = (answers.valeur as string) || '';
  const creditBail = ['1–2M€', '2–5M€', '5–10M€', '>10M€'].includes(value);
  /* Below 5 M€ the fiducie is never the lead orientation; above it, crédit-bail stays open. */
  const fiducie = ['5–10M€', '>10M€'].includes(value);

  const guarantees = Array.isArray(answers.garanties) ? answers.garanties : [];
  const charged =
    guarantees.includes('Hypothèque') ||
    guarantees.includes('PPD') ||
    ['30–60 %', '>60 %'].includes((answers.encours as string) || '');
  const chargeNote = charged
    ? ' Les garanties déjà inscrites et les encours en cours sont analysés pour déterminer la trésorerie nette dégageable ; ils ne font pas obstacle à l’étude.'
    : '';

  if (creditBail && fiducie) {
    return {
      tone: 'rose',
      icon: 'circle-check',
      pill: 'Les deux véhicules envisageables',
      title: 'Les deux véhicules pourraient être étudiés',
      body:
        'Votre actif ouvre à la fois la cession-bail immobilière et la fiducie-sûreté. L’analyse approfondie du dossier permettra de retenir le montage adapté à votre situation.' +
        chargeNote,
    };
  }
  if (fiducie) {
    return {
      tone: 'rose',
      icon: 'circle-check',
      pill: 'Fiducie-sûreté envisageable',
      title: 'Un financement garanti par fiducie pourrait être étudié',
      body:
        'La valeur de l’actif que vous décrivez entre dans le périmètre de la fiducie-sûreté ; la cession-bail immobilière reste envisageable. L’analyse approfondie précisera le montage et les conditions.' +
        chargeNote,
    };
  }
  if (creditBail) {
    return {
      tone: 'rose',
      icon: 'circle-check',
      pill: 'Crédit-bail immobilier envisageable',
      title: 'Une cession-bail pourrait être étudiée',
      body:
        'La valeur de l’actif que vous décrivez entre dans le périmètre du crédit-bail immobilier. L’analyse approfondie précisera le montage et les conditions.' +
        chargeNote,
    };
  }
  /* A missing value is not a negative verdict — it routes to the same conversation
     without the "critères non réunis" framing. */
  if (!value || value === 'Inconnue') {
    return {
      tone: 'gold',
      icon: 'circle-info',
      pill: 'Valeur de l’actif à préciser',
      title: 'Un échange permettra de déterminer le véhicule adapté',
      body:
        'La valeur de l’actif n’est pas encore établie : c’est l’un des éléments qui oriente vers la cession-bail immobilière ou la fiducie-sûreté. Un responsable de dossier fera le point avec vous et, si besoin, sur la marche à suivre pour obtenir un avis de valeur.' +
        chargeNote,
    };
  }
  return {
    tone: 'gold',
    icon: 'circle-info',
    pill: 'Critères non réunis à ce stade',
    title: 'Un échange permettra de préciser votre situation',
    body:
      'Les éléments transmis ne réunissent pas, à ce stade, les repères habituels de nos deux véhicules. Ce n’est pas un refus : un échange avec un responsable de dossier permettra de préciser la valeur de l’actif, le montage de détention et l’objectif poursuivi.' +
      chargeNote,
  };
}
