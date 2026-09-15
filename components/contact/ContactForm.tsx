'use client';

import { useState, type CSSProperties } from 'react';
import { ActionButton } from '@/components/ui/Button';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';

const field: CSSProperties = {
  height: 62,
  padding: '0 20px',
  border: 'none',
  borderRadius: 'var(--r-16)',
  background: 'rgba(0,0,0,.035)',
  boxShadow: 'var(--ring-hairline)',
  fontFamily: 'var(--font-body)',
  fontWeight: 300,
  fontSize: 16,
  color: 'var(--lb-ink)',
};

const label: CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 16,
  color: 'var(--lb-ink)',
};

const group: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10 };
const pair: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 };

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

type Values = { nom: string; societe: string; email: string; tel: string; objet: string; message: string };

const EMPTY: Values = {
  nom: '',
  societe: '',
  email: '',
  tel: '',
  objet: 'Question sur le crédit-bail immobilier',
  message: '',
};

/**
 * Client-side only: the design brief asks for no backend, so a valid submission
 * simply swaps the card for its confirmation state.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = () => {
    const missing: string[] = [];
    if (!values.nom.trim()) missing.push('nom et prénom');
    if (!values.societe.trim()) missing.push('société');
    if (!EMAIL.test(values.email.trim())) missing.push('e-mail professionnel');
    if (!values.message.trim()) missing.push('message');
    if (missing.length) {
      setError(`Merci de compléter : ${missing.join(', ')}.`);
      return;
    }
    setError('');
    setSent(true);
  };

  if (sent) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 16,
          padding: 'clamp(16px,2.4vw,32px) 0',
        }}
      >
        <Fa name="circle-check" style={{ flex: 'none', fontSize: 40, lineHeight: 1, color: 'var(--lb-rose)' }} />
        <h3
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(20px,1.6vw,26px)',
            letterSpacing: '-.02em',
            color: 'var(--text-heading)',
          }}
        >
          Message envoyé
        </h3>
        <p style={{ margin: 0, maxWidth: 460, fontWeight: 300, fontSize: 16, lineHeight: '26px', color: 'rgba(0,0,0,.7)' }}>
          Nous revenons vers vous sous 48 heures maximum à l&rsquo;adresse indiquée.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY);
            setSent(false);
          }}
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: 16,
            color: 'var(--lb-ink)',
          }}
        >
          <span className="lb-arrowlink" style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16 }}>
              Écrire un autre message
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

  return (
    <div>
      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(20px,1.6vw,26px)',
          letterSpacing: '-.02em',
          color: 'var(--text-heading)',
        }}
      >
        Nous écrire
      </h3>
      <p style={{ margin: '10px 0 0', fontWeight: 300, fontSize: 16, lineHeight: '26px', color: 'rgba(0,0,0,.68)' }}>
        Pour une question générale. Pour faire étudier un actif, le test d&rsquo;éligibilité est plus rapide.
      </p>
      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 26 }}
      >
        <div style={pair}>
          <div style={group}>
            <label htmlFor="lb-c-nom" style={label}>
              Nom et prénom
            </label>
            <input id="lb-c-nom" className="lb-field" style={field} value={values.nom} onChange={set('nom')} />
          </div>
          <div style={group}>
            <label htmlFor="lb-c-soc" style={label}>
              Société
            </label>
            <input id="lb-c-soc" className="lb-field" style={field} value={values.societe} onChange={set('societe')} />
          </div>
        </div>
        <div style={pair}>
          <div style={group}>
            <label htmlFor="lb-c-mail" style={label}>
              E-mail professionnel
            </label>
            <input
              id="lb-c-mail"
              type="email"
              className="lb-field"
              style={field}
              value={values.email}
              onChange={set('email')}
            />
          </div>
          <div style={group}>
            <label htmlFor="lb-c-tel" style={label}>
              Téléphone
            </label>
            <input id="lb-c-tel" type="tel" className="lb-field" style={field} value={values.tel} onChange={set('tel')} />
          </div>
        </div>
        <div style={group}>
          <label htmlFor="lb-c-obj" style={label}>
            Motif
          </label>
          <select id="lb-c-obj" className="lb-field" style={field} value={values.objet} onChange={set('objet')}>
            <option>Question sur le crédit-bail immobilier</option>
            <option>Question sur la fiducie-sûreté</option>
            <option>Dossier en cours</option>
            <option>Partenariat ou apport d&apos;affaires</option>
            <option>Presse</option>
            <option>Autre</option>
          </select>
        </div>
        <div style={group}>
          <label htmlFor="lb-c-msg" style={label}>
            Votre message
          </label>
          <textarea
            id="lb-c-msg"
            className="lb-field"
            rows={5}
            value={values.message}
            onChange={set('message')}
            style={{
              padding: '16px 20px',
              border: 'none',
              borderRadius: 'var(--r-16)',
              background: 'rgba(0,0,0,.035)',
              boxShadow: 'var(--ring-hairline)',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 16,
              lineHeight: '26px',
              color: 'var(--lb-ink)',
              resize: 'vertical',
            }}
          />
        </div>
        {error && (
          <p
            role="alert"
            style={{
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 400,
              fontSize: 14,
              color: 'var(--lb-rose)',
            }}
          >
            <Fa name="circle-exclamation" style={{ fontSize: 14, lineHeight: 1 }} />
            {error}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
          <ActionButton tone="primary" type="submit">
            Envoyer le message
          </ActionButton>
          <span style={{ fontFamily: 'var(--font-alt)', fontWeight: 400, fontSize: 14, color: 'rgba(0,0,0,.55)' }}>
            Réponse sous 48 h maximum
          </span>
        </div>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-alt)',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: '22px',
            color: 'rgba(0,0,0,.6)',
          }}
        >
          Les informations transmises servent uniquement à traiter votre demande. Elles ne sont communiquées à aucun
          établissement sans votre accord écrit.
        </p>
      </form>
    </div>
  );
}
