'use client';

import { useMemo, useRef, useState, type CSSProperties } from 'react';
import { ActionButton } from '@/components/ui/Button';
import { Fa } from '@/components/ui/Fa';
import { DEFAULT_SIGNATURE, buildSignatureHtml, wrapSignatureDocument, type SignatureData } from '@/lib/signature';

const fieldStyle: CSSProperties = {
  height: 52,
  padding: '0 18px',
  border: 'none',
  borderRadius: 'var(--r-16)',
  background: 'rgba(0,0,0,.035)',
  boxShadow: 'var(--ring-hairline)',
  fontFamily: 'var(--font-body)',
  fontWeight: 300,
  fontSize: 15,
  color: 'var(--lb-ink)',
  width: '100%',
  boxSizing: 'border-box',
};

const labelStyle: CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 500,
  fontSize: 14,
  color: 'var(--lb-ink)',
};

const group: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 };
const pair: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 };

type Field = keyof SignatureData;

function Input({
  data,
  set,
  field,
  label,
  placeholder,
  type = 'text',
}: {
  data: SignatureData;
  set: (field: Field) => (e: { target: { value: string } }) => void;
  field: Field;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  const id = `lb-sig-${field}`;
  return (
    <div style={group}>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="lb-field"
        style={fieldStyle}
        value={data[field]}
        placeholder={placeholder}
        onChange={set(field)}
      />
    </div>
  );
}

/** Two-state copy button: shows a confirmation label for a couple of seconds after a successful copy. */
function CopyButton({ label, doneLabel, onCopy }: { label: string; doneLabel: string; onCopy: () => Promise<boolean> }) {
  const [state, setState] = useState<'idle' | 'done' | 'error'>('idle');

  const handle = async () => {
    const ok = await onCopy();
    setState(ok ? 'done' : 'error');
    setTimeout(() => setState('idle'), 2200);
  };

  return (
    <ActionButton tone={state === 'error' ? 'secondary' : 'primary'} onClick={handle} arrow={state === 'idle'}>
      {state === 'idle' ? label : state === 'done' ? doneLabel : 'Copie impossible — copiez le code ci-dessous'}
    </ActionButton>
  );
}

export function SignatureGenerator() {
  const [data, setData] = useState<SignatureData>(DEFAULT_SIGNATURE);
  const [showSource, setShowSource] = useState(false);
  const [previewHeight, setPreviewHeight] = useState(220);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const resizeToContent = () => {
    const doc = iframeRef.current?.contentWindow?.document;
    if (doc) setPreviewHeight(doc.documentElement.scrollHeight);
  };

  const set = (field: Field) => (e: { target: { value: string } }) => setData((d) => ({ ...d, [field]: e.target.value }));

  const html = useMemo(() => buildSignatureHtml(data), [data]);
  const previewDoc = useMemo(() => wrapSignatureDocument(html), [html]);

  const copyRichHtml = async () => {
    try {
      if (navigator.clipboard && 'write' in navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        const item = new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([data.name], { type: 'text/plain' }),
        });
        await navigator.clipboard.write([item]);
        return true;
      }
      await navigator.clipboard.writeText(html);
      return true;
    } catch {
      return false;
    }
  };

  const copySource = async () => {
    try {
      await navigator.clipboard.writeText(html);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="lb-split" style={{ maxWidth: '1770px', marginInline: 'auto' }}>
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
          Vos informations
        </h3>
        <p style={{ margin: '10px 0 0', fontWeight: 300, fontSize: 16, lineHeight: '26px', color: 'rgba(0,0,0,.68)' }}>
          Modifiez les champs pour votre propre signature — l&rsquo;aperçu à droite se met à jour en direct. Laissez un
          champ vide pour qu&rsquo;il n&rsquo;apparaisse pas dans la signature.
        </p>

        <form
          noValidate
          onSubmit={(e) => e.preventDefault()}
          style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 26 }}
        >
          <div style={pair}>
            <Input data={data} set={set} field="name" label="Nom et prénom" />
            <Input data={data} set={set} field="title" label="Fonction" />
          </div>
          <div style={pair}>
            <Input data={data} set={set} field="mobile" label="Mobile" type="tel" />
            <Input data={data} set={set} field="phone" label="Téléphone fixe" type="tel" />
          </div>
          <Input data={data} set={set} field="email" label="E-mail (optionnel)" type="email" placeholder="prenom.nom@leaseback.immo" />
          <div style={pair}>
            <Input data={data} set={set} field="website1Label" label="Site web 1 — libellé" />
            <Input data={data} set={set} field="website1" label="Site web 1 — lien" placeholder="https://" />
          </div>
          <div style={pair}>
            <Input data={data} set={set} field="website2Label" label="Site web 2 — libellé (optionnel)" />
            <Input data={data} set={set} field="website2" label="Site web 2 — lien" placeholder="https://" />
          </div>
          <Input data={data} set={set} field="address" label="Adresse" />
          <Input data={data} set={set} field="orias" label="N° ORIAS (optionnel)" placeholder="25000436" />

          <div style={{ borderTop: '1px solid rgba(0,0,0,.09)', paddingTop: 20 }}>
            <p style={{ margin: '0 0 14px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--lb-ink)' }}>
              Zone d&rsquo;actualité (optionnel — affichée au-dessus de la signature)
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input data={data} set={set} field="highlightText" label="Texte" placeholder="Nouveau site leaseback.immo en ligne" />
              <Input data={data} set={set} field="highlightUrl" label="Lien (optionnel)" placeholder="https://" />
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,.09)', paddingTop: 20 }}>
            <p style={{ margin: '0 0 14px', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14, color: 'var(--lb-ink)' }}>
              Liens LinkedIn (optionnel)
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input data={data} set={set} field="linkedinPersonal" label="Profil personnel — à côté du nom" placeholder="https://www.linkedin.com/in/…" />
              <Input data={data} set={set} field="linkedinBluelease" label="Page Bluelease — à côté de son logo" placeholder="https://www.linkedin.com/company/…" />
              <Input data={data} set={set} field="linkedinLeaseback" label="Page leaseback.immo — à côté de son logo" placeholder="https://www.linkedin.com/company/…" />
            </div>
          </div>

          <details>
            <summary
              style={{
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 14,
                color: 'var(--lb-rose)',
              }}
            >
              Options avancées — photo et logos
            </summary>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 18 }}>
              <Input data={data} set={set} field="photoUrl" label="URL de la photo (publique)" placeholder="https://" />
              <Input data={data} set={set} field="blueleaseLogoUrl" label="URL du logo Bluelease (publique)" placeholder="https://" />
              <Input data={data} set={set} field="leasebackLogoUrl" label="URL du logo leaseback.immo (publique)" placeholder="https://" />
              <Input data={data} set={set} field="oriasBadgeUrl" label="URL du logo ORIAS — optionnel" placeholder="https://" />
              <Input data={data} set={set} field="linkedinIconUrl" label="URL de l'icône LinkedIn" placeholder="https://" />
              <p style={{ margin: 0, fontFamily: 'var(--font-alt)', fontWeight: 300, fontSize: 13, lineHeight: '20px', color: 'rgba(0,0,0,.55)' }}>
                Les images d&rsquo;un e-mail doivent être hébergées sur une adresse publique stable — un chemin local ne
                s&rsquo;affichera pas chez le destinataire. Remplacez la photo par la vôtre une fois mise en ligne.
              </p>
            </div>
          </details>
        </form>
      </div>

      <div>
        <div
          data-reveal=""
          style={{
            borderRadius: 'var(--r-15)',
            background: 'var(--lb-white)',
            boxShadow: '0 10px 30px rgba(0,0,0,.10)',
            padding: 'clamp(20px,2.4vw,32px)',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(18px,1.4vw,22px)',
              letterSpacing: '-.02em',
              color: 'var(--text-heading)',
            }}
          >
            Aperçu
          </h3>
          <div
            style={{
              marginTop: 18,
              borderRadius: 'var(--r-16)',
              boxShadow: 'var(--ring-hairline)',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            <iframe
              ref={iframeRef}
              title="Aperçu de la signature"
              srcDoc={previewDoc}
              onLoad={resizeToContent}
              style={{ display: 'block', width: '100%', height: previewHeight, border: 'none', transition: 'height .15s ease' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 22 }}>
            <CopyButton label="Copier la signature" doneLabel="Signature copiée ✓" onCopy={copyRichHtml} />
            <button
              type="button"
              onClick={() => setShowSource((s) => !s)}
              style={{
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: 15,
                color: 'var(--lb-ink)',
              }}
            >
              <span className="lb-arrowlink" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15 }}>
                  {showSource ? 'Masquer le code HTML' : 'Voir le code HTML'}
                </span>
                <Fa name="chevron-down" style={{ fontSize: 12, transform: showSource ? 'rotate(180deg)' : 'none' }} />
              </span>
            </button>
          </div>

          {showSource && (
            <div style={{ marginTop: 20 }}>
              <textarea
                readOnly
                value={html}
                rows={8}
                onFocus={(e) => e.currentTarget.select()}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '14px 16px',
                  border: 'none',
                  borderRadius: 'var(--r-16)',
                  background: 'rgba(0,0,0,.035)',
                  boxShadow: 'var(--ring-hairline)',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                  fontSize: 12,
                  lineHeight: '18px',
                  color: 'var(--lb-ink)',
                  resize: 'vertical',
                }}
              />
              <div style={{ marginTop: 14 }}>
                <CopyButton label="Copier le code HTML" doneLabel="Code copié ✓" onCopy={copySource} />
              </div>
              <p style={{ margin: '14px 0 0', fontFamily: 'var(--font-alt)', fontWeight: 300, fontSize: 13, lineHeight: '20px', color: 'rgba(0,0,0,.55)' }}>
                <strong>Apple Mail (Mac)</strong> n&rsquo;accepte pas de code source dans ses réglages de signature :
                utilisez le bouton « Copier la signature » ci-dessus, puis collez (Cmd+V) directement dans
                Mail → Réglages → Signatures. Le code HTML ci-dessous sert à une installation manuelle dans les
                clients qui acceptent du code (Outlook : Fichier → Options → Courrier → Signatures ; Gmail :
                Paramètres → Général → Signature, en collant l&rsquo;aperçu plutôt que le code source).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
