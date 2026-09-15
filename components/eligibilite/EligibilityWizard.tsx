'use client';

import { useState, type CSSProperties } from 'react';
import { ActionButton, Button } from '@/components/ui/Button';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { routes } from '@/lib/routes';
import { orientation, orientationFootnote, screens, type Answers, type Group } from '@/lib/eligibility';

const stepLabel = { fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, letterSpacing: '-.01em', color: 'var(--lb-rose)' } as const;
const pctLabel = { fontFamily: 'var(--font-alt)', fontWeight: 300, fontSize: 14, color: 'rgba(0,0,0,.45)' } as const;
const groupTitle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'clamp(17px,1.35vw,21px)',
  lineHeight: 1.3,
  letterSpacing: '-.02em',
  color: 'var(--lb-ink)',
} as const;
const fieldBox: CSSProperties = {
  marginTop: 14,
  padding: '15px 18px',
  borderRadius: 'var(--r-16)',
  boxShadow: 'var(--ring-hairline)',
};
const bareInput: CSSProperties = {
  flex: 1,
  minWidth: 0,
  border: 'none',
  outline: 'none',
  background: 'none',
  padding: 0,
  fontFamily: 'var(--font-body)',
  fontWeight: 300,
  fontSize: 16,
  color: 'var(--lb-ink)',
};
const coordLabel: CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-alt)',
  fontWeight: 500,
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--lb-rose)',
};
const coordField: CSSProperties = {
  marginTop: 8,
  padding: '14px 16px',
  borderRadius: 'var(--r-16)',
  boxShadow: 'var(--ring-hairline)',
};
const coordInput: CSSProperties = { ...bareInput, width: '100%', flex: undefined };

const docRow: CSSProperties = {
  display: 'flex',
  gap: 13,
  alignItems: 'flex-start',
  padding: '13px 0',
  borderTop: '1px solid rgba(0,0,0,.09)',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE = /^[+0-9 ().-]{9,}$/;

type Contact = { prenom: string; nom: string; societe: string; fonction: string; tel: string; email: string; message: string };

const EMPTY_CONTACT: Contact = { prenom: '', nom: '', societe: '', fonction: '', tel: '', email: '', message: '' };

function ProgressBar({ pct }: { pct: string }) {
  return (
    <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: 'rgba(0,0,0,.09)', overflow: 'hidden' }}>
      <span
        style={{
          display: 'block',
          height: '100%',
          width: pct,
          background: 'var(--lb-rose)',
          transition: 'width .45s cubic-bezier(.22,.61,.36,1)',
        }}
      />
    </div>
  );
}

/**
 * Seven declared steps over ten question screens, then contact details, then the
 * indicative orientation. Everything is client-side: the brief asks for no backend,
 * so submitting simply resolves into the confirmation screen.
 */
export function EligibilityWizard() {
  /* -1 is the intro card; screens.length is the contact screen. */
  const [stepIndex, setStepIndex] = useState(-1);
  const [answers, setAnswers] = useState<Answers>({});
  const [contact, setContact] = useState<Contact>(EMPTY_CONTACT);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState('');
  const [sent, setSent] = useState(false);

  const total = screens.length + 1;
  const screen = screens[Math.min(Math.max(stepIndex, 0), screens.length - 1)];
  const groups = screen.groups.filter((g) => !('when' in g) || !g.when || g.when(answers));

  const answered = groups.every((g) => {
    if ('optional' in g && g.optional) return true;
    const v = answers[g.key];
    return g.type === 'choice' && g.multi ? Array.isArray(v) && v.length > 0 : Boolean(v);
  });

  const set = (key: string, value: string | string[]) => setAnswers((a) => ({ ...a, [key]: value }));

  /* "Aucune" / "Non" / "Je ne sais pas" cannot coexist with a positive answer. */
  const toggle = (key: string, value: string, exclusive: string[] = []) => {
    const current = Array.isArray(answers[key]) ? (answers[key] as string[]) : [];
    if (current.includes(value)) return set(key, current.filter((x) => x !== value));
    if (exclusive.includes(value)) return set(key, [value]);
    set(key, current.filter((x) => !exclusive.includes(x)).concat(value));
  };

  const restart = () => {
    setStepIndex(-1);
    setAnswers({});
    setContact(EMPTY_CONTACT);
    setConsent(false);
    setErrors('');
    setSent(false);
  };

  const submit = () => {
    const missing: string[] = [];
    if (!contact.prenom.trim() || !contact.nom.trim()) missing.push('nom et prénom');
    if (!contact.societe.trim()) missing.push('société');
    if (!PHONE.test(contact.tel.trim())) missing.push('téléphone');
    if (!EMAIL.test(contact.email.trim())) missing.push('e-mail professionnel');
    if (!consent) missing.push('consentement');
    if (missing.length) {
      setErrors(`Merci de compléter : ${missing.join(', ')}.`);
      return;
    }
    setErrors('');
    setSent(true);
  };

  if (sent) {
    const result = orientation(answers);
    const rose = result.tone === 'rose';
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, padding: 'clamp(20px,3vw,44px) 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, width: '100%' }}>
          <span style={stepLabel}>Étape 7/7 — Votre orientation</span>
          <span style={pctLabel}>100 %</span>
        </div>
        <Fa
          name={result.icon}
          style={{ flex: 'none', fontSize: 44, lineHeight: 1, color: rose ? 'var(--lb-rose)' : 'var(--lb-navy)' }}
        />
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: 34,
            padding: '0 15px',
            borderRadius: 17,
            background: rose ? 'var(--lb-rose-tint)' : 'rgba(254,199,98,.18)',
            fontWeight: 500,
            fontSize: 14,
            color: rose ? 'var(--lb-rose)' : 'var(--lb-navy)',
          }}
        >
          {result.pill}
        </span>
        <h2
          style={{
            margin: 0,
            maxWidth: 640,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--type-h3-size)',
            lineHeight: 1.25,
            color: 'var(--text-heading)',
          }}
        >
          {result.title}
        </h2>
        <p style={{ margin: 0, maxWidth: 560, fontWeight: 300, fontSize: 16, lineHeight: 'var(--type-body-lh)', color: 'var(--lb-black)' }}>
          {result.body}
        </p>
        <p
          style={{
            margin: 0,
            maxWidth: 560,
            fontFamily: 'var(--font-alt)',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: '22px',
            color: 'rgba(0,0,0,.62)',
          }}
        >
          {orientationFootnote}
        </p>

        <div
          style={{
            width: '100%',
            marginTop: 8,
            borderRadius: 'var(--r-15)',
            background: 'var(--lb-white)',
            boxShadow: 'var(--shadow-card)',
            padding: 'clamp(22px,2.2vw,32px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{ width: 26, height: 2, background: 'var(--lb-rose)' }} />
            <span
              style={{
                fontFamily: 'var(--font-alt)',
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--lb-rose)',
              }}
            >
              Facultatif
            </span>
          </div>
          <div
            style={{
              marginTop: 14,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(18px,1.4vw,22px)',
              letterSpacing: '-.02em',
              color: 'var(--lb-ink)',
            }}
          >
            Accélérer mon étude en déposant mes documents
          </div>
          <p style={{ margin: '10px 0 18px', fontWeight: 300, fontSize: 16, lineHeight: '25px', color: 'rgba(0,0,0,.7)' }}>
            Maintenant ou plus tard, via un accès sécurisé. Votre dossier est conservé : vous retrouvez vos réponses et
            vos coordonnées sans refaire le questionnaire.
          </p>
          {[
            ['file-lines', 'Expertise ou avis de valeur', 'Daté de moins de 36 mois si disponible.'],
            ['file-invoice', 'Dernière liasse fiscale ou bilan', 'Trois exercices si vous en disposez.'],
            ['table-list', 'Tableau des encours', 'Capital restant dû et garanties inscrites.'],
            ['paperclip', 'Autres documents', 'Kbis, bail, statuts et compléments.'],
          ].map(([icon, title, note]) => (
            <div key={title} style={docRow}>
              <Fa
                name={icon as 'file-lines'}
                style={{ flex: 'none', marginTop: 3, fontSize: 14, lineHeight: 1, color: 'var(--lb-rose)' }}
              />
              <span>
                <span style={{ display: 'block', fontWeight: 500, fontSize: 16, color: 'var(--lb-ink)' }}>{title}</span>
                <span
                  style={{
                    display: 'block',
                    marginTop: 2,
                    fontFamily: 'var(--font-alt)',
                    fontWeight: 300,
                    fontSize: 14,
                    color: 'rgba(0,0,0,.6)',
                  }}
                >
                  {note}
                </span>
              </span>
            </div>
          ))}
          <div className="lb-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 20 }}>
            <Button tone="primary" href={routes.contact}>
              Déposer mes documents
            </Button>
            <button
              type="button"
              onClick={restart}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 16,
                color: 'rgba(0,0,0,.6)',
              }}
            >
              Plus tard
            </button>
          </div>
          <p
            style={{
              margin: '18px 0 0',
              paddingTop: 16,
              borderTop: '1px solid rgba(0,0,0,.08)',
              fontFamily: 'var(--font-alt)',
              fontWeight: 300,
              fontSize: 14,
              lineHeight: '22px',
              color: 'rgba(0,0,0,.62)',
            }}
          >
            Le dépôt ne conditionne ni votre orientation, ni votre rappel. Aucun fichier n’est public ni transmis à un
            financeur sans votre accord préalable ; accès, hébergement et durées de conservation sont précisés avant tout
            envoi.
          </p>
        </div>

        <button
          type="button"
          onClick={restart}
          style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontWeight: 500, fontSize: 16, color: 'var(--lb-ink)' }}
        >
          <span className="lb-arrowlink" style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-.01em' }}>
              Renseigner un autre dossier
            </span>
            <span
              className="lb-arrowlink__dot"
              style={{
                flex: 'none',
                display: 'grid',
                placeItems: 'center',
                width: 28,
                height: 27,
                borderRadius: 999,
                background: 'var(--lb-rose)',
                color: 'var(--lb-white)',
              }}
            >
              <Icon name="arrow" size={10} color="var(--lb-white)" />
            </span>
          </span>
        </button>
      </div>
    );
  }

  if (stepIndex === screens.length) {
    const setField = (k: keyof Contact) => (e: { target: { value: string } }) =>
      setContact((c) => ({ ...c, [k]: e.target.value }));
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
          <span style={stepLabel}>Étape 6/7 — Vos coordonnées</span>
          <span style={pctLabel}>91 %</span>
        </div>
        <ProgressBar pct="91%" />
        <div
          style={{
            marginTop: 24,
            display: 'flex',
            gap: 13,
            alignItems: 'flex-start',
            padding: '16px 18px',
            borderRadius: 'var(--r-16)',
            background: 'rgba(0,0,0,.035)',
          }}
        >
          <Fa name="circle-info" style={{ flex: 'none', marginTop: 3, fontSize: 15, lineHeight: 1, color: 'var(--lb-navy)' }} />
          <span style={{ fontWeight: 300, fontSize: 16, lineHeight: '25px', color: 'rgba(0,0,0,.74)' }}>
            Dernière étape : renseignez vos coordonnées pour recevoir votre orientation indicative et être recontacté par
            Bluelease.
          </span>
        </div>

        <div className="lb-coord" style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 16 }}>
          <div>
            <label htmlFor="lb-w-prenom" style={coordLabel}>
              Prénom *
            </label>
            <div className="lb-simfield" style={coordField}>
              <input id="lb-w-prenom" value={contact.prenom} onChange={setField('prenom')} placeholder="Jean" style={coordInput} />
            </div>
          </div>
          <div>
            <label htmlFor="lb-w-nom" style={coordLabel}>
              Nom *
            </label>
            <div className="lb-simfield" style={coordField}>
              <input id="lb-w-nom" value={contact.nom} onChange={setField('nom')} placeholder="Dupont" style={coordInput} />
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label htmlFor="lb-w-soc" style={coordLabel}>
              Société *
            </label>
            <div className="lb-simfield" style={coordField}>
              <input
                id="lb-w-soc"
                value={contact.societe}
                onChange={setField('societe')}
                placeholder="Nom de la société"
                style={coordInput}
              />
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label htmlFor="lb-w-fonction" style={coordLabel}>
              Fonction *
            </label>
            <div className="lb-simfield" style={coordField}>
              <select id="lb-w-fonction" value={contact.fonction} onChange={setField('fonction')} style={coordInput}>
                <option value="">Sélectionner…</option>
                <option>Dirigeant</option>
                <option>Directeur financier</option>
                <option>Expert-comptable</option>
                <option>Avocat</option>
                <option>Notaire</option>
                <option>Autre</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="lb-w-tel" style={coordLabel}>
              Téléphone *
            </label>
            <div className="lb-simfield" style={coordField}>
              <input
                id="lb-w-tel"
                type="tel"
                value={contact.tel}
                onChange={setField('tel')}
                placeholder="+33 6 00 00 00 00"
                style={coordInput}
              />
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label htmlFor="lb-w-mail" style={coordLabel}>
              E-mail *
            </label>
            <div className="lb-simfield" style={coordField}>
              <input
                id="lb-w-mail"
                type="email"
                value={contact.email}
                onChange={setField('email')}
                placeholder="jean@entreprise.fr"
                style={coordInput}
              />
            </div>
          </div>
          <div style={{ gridColumn: '1/-1' }}>
            <label htmlFor="lb-w-msg" style={coordLabel}>
              Message (optionnel)
            </label>
            <div className="lb-simfield" style={coordField}>
              <textarea
                id="lb-w-msg"
                value={contact.message}
                onChange={setField('message')}
                rows={3}
                placeholder="Précisions sur votre dossier…"
                style={{ ...coordInput, resize: 'vertical', lineHeight: '26px' }}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-pressed={consent}
          onClick={() => setConsent((c) => !c)}
          style={{
            display: 'flex',
            gap: 13,
            alignItems: 'flex-start',
            width: '100%',
            marginTop: 22,
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              flex: 'none',
              display: 'grid',
              placeItems: 'center',
              width: 20,
              height: 20,
              borderRadius: 5,
              marginTop: 2,
              background: consent ? 'var(--lb-rose)' : 'transparent',
              boxShadow: `inset 0 0 0 1.5px ${consent ? 'var(--lb-rose)' : 'rgba(0,0,0,.22)'}`,
              color: 'var(--lb-white)',
            }}
          >
            <Fa name="check" style={{ fontSize: 10, lineHeight: 1, opacity: consent ? 1 : 0 }} />
          </span>
          <span style={{ fontWeight: 300, fontSize: 14, lineHeight: '23px', color: 'rgba(0,0,0,.66)' }}>
            J’accepte que mes données soient utilisées pour l’analyse de mon dossier. Les informations transmises sont
            strictement confidentielles. Aucun dossier n’est transmis à un partenaire financier sans accord préalable. *
          </span>
        </button>

        <div style={{ marginTop: 22 }}>
          {errors && (
            <div
              role="alert"
              style={{
                display: 'flex',
                gap: 12,
                alignItems: 'flex-start',
                marginBottom: 14,
                padding: '13px 15px',
                borderRadius: 'var(--r-16)',
                background: 'rgba(254,199,98,.18)',
              }}
            >
              <Fa name="circle-exclamation" style={{ flex: 'none', marginTop: 3, fontSize: 14, lineHeight: 1, color: 'var(--lb-navy)' }} />
              <span style={{ fontWeight: 400, fontSize: 15, lineHeight: '23px', color: 'var(--lb-navy)' }}>{errors}</span>
            </div>
          )}
          <ActionButton tone="primary" full onClick={submit}>
            Recevoir mon orientation indicative
          </ActionButton>
        </div>
        <button
          type="button"
          onClick={() => setStepIndex((i) => i - 1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 14,
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 14,
            color: 'rgba(0,0,0,.5)',
          }}
        >
          <Fa name="arrow-left" style={{ fontSize: 12, lineHeight: 1 }} />
          Retour
        </button>
      </div>
    );
  }

  if (stepIndex < 0) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 22 }}>
          <span style={{ width: 26, height: 2, background: 'var(--lb-rose)' }} />
          <span
            style={{
              fontFamily: 'var(--font-alt)',
              fontWeight: 500,
              fontSize: 12,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--lb-rose)',
            }}
          >
            Test d’éligibilité
          </span>
        </div>
        <h2
          style={{
            margin: '22px 0 0',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(21px,1.9vw,30px)',
            lineHeight: 1.22,
            letterSpacing: '-.03em',
            color: 'var(--text-heading)',
          }}
        >
          Évaluez votre éligibilité au refinancement immobilier
        </h2>
        <p style={{ margin: '14px 0 0', fontWeight: 300, fontSize: 16, lineHeight: '26px', color: 'rgba(0,0,0,.7)' }}>
          Évaluez en quelques minutes si votre immeuble peut faire l’objet d’une étude en lease-back immobilier,
          crédit-bail immobilier ou fiducie-sûreté.
        </p>
        <p
          style={{
            margin: '14px 0 0',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 16,
            lineHeight: '26px',
            color: 'rgba(0,0,0,.5)',
          }}
        >
          Un actif immobilier inscrit au bilan peut devenir un levier de refinancement, de restructuration ou
          d’investissement. Encore faut-il choisir le bon montage.
        </p>
        <div
          style={{
            marginTop: 26,
            display: 'flex',
            gap: 14,
            alignItems: 'flex-start',
            padding: '18px 20px',
            borderRadius: 'var(--r-16)',
            background: 'var(--lb-rose-tint)',
          }}
        >
          <span
            style={{
              flex: 'none',
              display: 'grid',
              placeItems: 'center',
              width: 20,
              height: 20,
              borderRadius: 10,
              marginTop: 3,
              background: 'var(--lb-rose)',
              color: 'var(--lb-white)',
            }}
          >
            <Fa name="info" style={{ fontSize: 10, lineHeight: 1 }} />
          </span>
          <span style={{ fontWeight: 300, fontSize: 14, lineHeight: '26px', color: 'var(--lb-ink)' }}>
            Ce test donne une orientation indicative. Il ne constitue ni un accord de financement, ni une offre de
            crédit, ni une validation juridique ou fiscale. Toute opération devra faire l’objet d’une analyse financière,
            immobilière, juridique et fiscale complète.
          </span>
        </div>
        <div className="lb-testcta" style={{ marginTop: 26, padding: '10px 10px 10px 20px', border: '1px solid #E34454', borderRadius: 50 }}>
          <ActionButton tone="primary" full onClick={() => setStepIndex(0)}>
            Commencer le test
          </ActionButton>
        </div>
        <div
          style={{
            marginTop: 14,
            textAlign: 'center',
            fontFamily: 'var(--font-alt)',
            fontWeight: 300,
            fontSize: 14,
            color: 'rgba(0,0,0,.5)',
          }}
        >
          Test en 3 à 5 minutes · Confidentiel · Sans engagement
        </div>
      </div>
    );
  }

  const pct = `${Math.round((stepIndex / total) * 100)}%`;

  const renderGroup = (g: Group) => {
    const value = answers[g.key];
    if (g.type === 'choice') {
      return (
        <div
          className="lb-wizopts"
          style={{
            marginTop: 16,
            display: 'grid',
            gridTemplateColumns: g.cols === 2 ? 'repeat(2,minmax(0,1fr))' : 'minmax(0,1fr)',
            gap: 10,
          }}
        >
          {g.options.map((label) => {
            const picked = g.multi ? Array.isArray(value) && value.includes(label) : value === label;
            const solid = picked && !g.multi;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={picked}
                onClick={() => (g.multi ? toggle(g.key, label, g.exclusive) : set(g.key, label))}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 13,
                  width: '100%',
                  padding: '14px 16px',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  borderRadius: 'var(--r-16)',
                  background: solid ? 'var(--lb-rose)' : picked ? 'var(--lb-rose-tint)' : 'transparent',
                  boxShadow: picked ? 'inset 0 0 0 1.5px var(--lb-rose)' : 'inset 0 0 0 1px rgba(0,0,0,.13)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: picked ? 500 : 400,
                  fontSize: 16,
                  color: solid ? 'var(--lb-white)' : 'var(--lb-ink)',
                }}
              >
                {g.multi && (
                  <span
                    style={{
                      flex: 'none',
                      display: 'grid',
                      placeItems: 'center',
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      background: picked ? 'var(--lb-rose)' : 'transparent',
                      boxShadow: `inset 0 0 0 1.5px ${picked ? 'var(--lb-rose)' : 'rgba(0,0,0,.22)'}`,
                      color: 'var(--lb-white)',
                    }}
                  >
                    <Fa name="check" style={{ fontSize: 10, lineHeight: 1, opacity: picked ? 1 : 0 }} />
                  </span>
                )}
                <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
                {solid && (
                  <Fa name="r-circle-check" style={{ flex: 'none', fontSize: 15, lineHeight: 1, color: 'var(--lb-white)' }} />
                )}
              </button>
            );
          })}
        </div>
      );
    }

    if (g.type === 'area') {
      const text = typeof value === 'string' ? value : '';
      return (
        <div>
          <div className="lb-simfield" style={fieldBox}>
            <textarea
              id={`lb-w-${g.key}`}
              value={text}
              onChange={(e) => set(g.key, e.target.value)}
              rows={4}
              maxLength={500}
              placeholder={g.placeholder}
              style={{ ...bareInput, width: '100%', flex: undefined, resize: 'vertical', lineHeight: '26px' }}
            />
          </div>
          <div
            style={{
              marginTop: 6,
              textAlign: 'right',
              fontFamily: 'var(--font-alt)',
              fontWeight: 300,
              fontSize: 13,
              color: 'rgba(0,0,0,.42)',
            }}
          >
            {text.length}/500
          </div>
        </div>
      );
    }

    return (
      <div className="lb-simfield" style={fieldBox}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <input
            id={`lb-w-${g.key}`}
            inputMode={g.type === 'number' ? 'numeric' : 'text'}
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => set(g.key, e.target.value)}
            placeholder={g.placeholder}
            style={bareInput}
          />
          {g.unit && (
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16, color: 'rgba(0,0,0,.5)' }}>
              {g.unit}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
        <span style={stepLabel}>
          Étape {screen.step}/7 — {screen.label}
        </span>
        <span style={pctLabel}>{pct}</span>
      </div>
      <ProgressBar pct={pct} />

      {groups.map((g) => (
        <div key={g.key} style={{ marginTop: 'clamp(24px,2.4vw,34px)' }}>
          <div style={groupTitle}>{g.title}</div>
          {g.hint && (
            <div style={{ marginTop: 5, fontFamily: 'var(--font-alt)', fontWeight: 300, fontSize: 14, color: 'rgba(0,0,0,.5)' }}>
              {g.hint}
            </div>
          )}
          {renderGroup(g)}
        </div>
      ))}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginTop: 'clamp(26px,2.6vw,38px)',
        }}
      >
        <button
          type="button"
          onClick={() => setStepIndex((i) => i - 1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 11,
            height: 52,
            padding: '0 22px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: 'var(--r-16)',
            background: 'transparent',
            boxShadow: 'var(--ring-hairline)',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 16,
            color: 'var(--lb-ink)',
          }}
        >
          <Fa name="arrow-left" style={{ fontSize: 13, lineHeight: 1 }} />
          Retour
        </button>
        <button
          type="button"
          onClick={() => answered && setStepIndex((i) => i + 1)}
          disabled={!answered}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 11,
            height: 52,
            padding: '0 24px',
            border: 'none',
            cursor: answered ? 'pointer' : 'not-allowed',
            borderRadius: 'var(--r-16)',
            background: answered ? 'var(--lb-rose)' : 'rgba(0,0,0,.22)',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 16,
            color: 'var(--lb-white)',
          }}
        >
          Continuer
          <Fa name="arrow-right" style={{ fontSize: 13, lineHeight: 1 }} />
        </button>
      </div>
    </div>
  );
}
