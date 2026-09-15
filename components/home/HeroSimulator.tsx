'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { routes } from '@/lib/routes';

/* Hero simulator. Ratios are indicative orders of magnitude, not quotes:
   crédit-bail advances ~80% of appraised value, fiducie ~70%. Each vehicle has
   its own asset-value band; the caps are simulator bounds, not eligibility ceilings. */
const BANDS = {
  'credit-bail': { floor: 1_000_000, ceil: 10_000_000, quota: 0.8, start: 2_400_000, floorLabel: '1', ceilLabel: '10' },
  fiducie: { floor: 5_000_000, ceil: 20_000_000, quota: 0.7, start: 8_000_000, floorLabel: '5', ceilLabel: '20' },
} as const;

type Mode = keyof typeof BANDS;

const fr = (n: number) => Math.round(n).toLocaleString('fr-FR').replace(/[\u202f\u00a0]/g, ' ');

const on = { bg: 'var(--lb-white)', ring: 'var(--shadow-soft)', fg: 'var(--lb-ink)' };
const off = { bg: 'transparent', ring: 'none', fg: 'rgba(0,0,0,.55)' };

export function HeroSimulator() {
  const [mode, setMode] = useState<Mode>('credit-bail');
  const [raw, setRaw] = useState<number>(BANDS['credit-bail'].start);
  /* While the field has focus the typed string is rendered verbatim; parsing,
     clamping and formatting happen on blur so typing is never rewritten. */
  const [text, setText] = useState<string | null>(null);
  const [years, setYears] = useState(15);
  const [ratePerMille, setRatePerMille] = useState(40);

  const band = BANDS[mode];
  const value = Math.min(band.ceil, Math.max(band.floor, raw));
  const rate = ratePerMille / 1000;
  const cash = value * band.quota;
  /* Constant year-end annuities, no residual value: A = C × i / [1 − (1 + i)^−n] */
  const annuity = (cash * rate) / (1 - Math.pow(1 + rate, -years));

  const pick = (next: Mode) => {
    const b = BANDS[next];
    setMode(next);
    setText(null);
    setRaw((v) => Math.min(b.ceil, Math.max(b.floor, v)));
  };

  const commit = () => {
    const n = Number(String(text ?? '').replace(/[^\d]/g, ''));
    setText(null);
    if (n) setRaw(Math.min(band.ceil, Math.max(band.floor, n)));
  };

  const cb = mode === 'fiducie' ? off : on;
  const fi = mode === 'fiducie' ? on : off;
  const yearsLabel = `${years} ans`;

  return (
    <div
      className="lb-herosim"
      style={{
        borderRadius: 'var(--r-15)',
        background: 'var(--lb-white)',
        boxShadow: '0 12px 34px rgba(0,0,0,.14)',
        padding: 'clamp(20px,1.4vw,22px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(21px,1.6vw,26px)',
            letterSpacing: '-.02em',
            color: 'var(--lb-ink)',
          }}
        >
          Mon refinancement
        </div>
        <span
          style={{
            flex: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            height: 32,
            padding: '0 14px',
            borderRadius: 16,
            background: 'var(--lb-rose-tint)',
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'var(--lb-rose)',
          }}
        >
          {yearsLabel}
        </span>
      </div>

      <div
        style={{
          marginTop: 11,
          display: 'flex',
          padding: 3,
          borderRadius: 'var(--r-16)',
          background: 'rgba(0,0,0,.045)',
        }}
      >
        <button
          type="button"
          onClick={() => pick('credit-bail')}
          style={{
            flex: 1,
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center',
            padding: '13px 8px',
            borderRadius: 12,
            background: cb.bg,
            boxShadow: cb.ring,
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 14,
            color: cb.fg,
          }}
        >
          Crédit-bail
        </button>
        <button
          type="button"
          onClick={() => pick('fiducie')}
          style={{
            flex: 1,
            border: 'none',
            cursor: 'pointer',
            textAlign: 'center',
            padding: '13px 8px',
            borderRadius: 12,
            background: fi.bg,
            boxShadow: fi.ring,
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: 14,
            color: fi.fg,
          }}
        >
          Fiducie
        </button>
      </div>

      <label
        htmlFor="lb-sim-value"
        style={{
          display: 'block',
          marginTop: 13,
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: 14,
          color: 'rgba(0,0,0,.6)',
        }}
      >
        Valeur des murs
      </label>
      <div
        className="lb-simfield"
        style={{
          marginTop: 6,
          display: 'flex',
          alignItems: 'baseline',
          gap: 8,
          padding: '9px 14px',
          borderRadius: 'var(--r-16)',
          boxShadow: 'var(--ring-hairline)',
        }}
      >
        <input
          id="lb-sim-value"
          inputMode="numeric"
          value={text ?? fr(value)}
          onChange={(e) => setText(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === 'Enter') e.currentTarget.blur();
          }}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            background: 'none',
            padding: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 22,
            letterSpacing: '-.02em',
            color: 'var(--lb-ink)',
          }}
        />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'rgba(0,0,0,.4)' }}>
          €
        </span>
      </div>
      <input
        type="range"
        min={band.floor}
        max={band.ceil}
        step={100000}
        value={value}
        onChange={(e) => {
          setRaw(Number(e.target.value));
          setText(null);
        }}
        aria-label="Valeur des murs"
        style={{ width: '100%', marginTop: 12, accentColor: 'var(--lb-rose)' }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 2,
          fontFamily: 'var(--font-alt)',
          fontWeight: 300,
          fontSize: 13,
          color: 'rgba(0,0,0,.6)',
        }}
      >
        <span>{band.floorLabel} M€ de valeur d&rsquo;actif</span>
        <span>{band.ceilLabel} M€</span>
      </div>

      <div
        className="lb-simrow"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
          gap: 'clamp(12px,1.2vw,18px)',
          marginTop: 14,
        }}
      >
        <div>
          <label
            htmlFor="lb-sim-years"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: 14,
              color: 'rgba(0,0,0,.6)',
            }}
          >
            Durée
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--lb-ink)' }}>
              {yearsLabel}
            </span>
          </label>
          <input
            id="lb-sim-years"
            type="range"
            min={8}
            max={15}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{ width: '100%', marginTop: 8, accentColor: 'var(--lb-rose)' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-alt)',
              fontWeight: 300,
              fontSize: 12,
              color: 'rgba(0,0,0,.6)',
            }}
          >
            <span>8 ans</span>
            <span>15 ans</span>
          </div>
        </div>
        <div>
          <label
            htmlFor="lb-sim-rate"
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 8,
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: 14,
              color: 'rgba(0,0,0,.6)',
            }}
          >
            Taux annuel
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--lb-ink)' }}>
              {(rate * 100).toFixed(1).replace('.', ',')} %
            </span>
          </label>
          <input
            id="lb-sim-rate"
            type="range"
            min={30}
            max={50}
            step={1}
            value={ratePerMille}
            onChange={(e) => setRatePerMille(Number(e.target.value))}
            style={{ width: '100%', marginTop: 8, accentColor: 'var(--lb-rose)' }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-alt)',
              fontWeight: 300,
              fontSize: 12,
              color: 'rgba(0,0,0,.6)',
            }}
          >
            <span>3 %</span>
            <span>5 %</span>
          </div>
        </div>
      </div>

      <div className="lb-ondark" style={{ marginTop: 18, borderRadius: 14, background: 'var(--lb-navy)', padding: '22px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,.78)' }}>
            Financement potentiel brut
          </span>
          <span style={{ fontFamily: 'var(--font-alt)', fontWeight: 400, fontSize: 14, color: 'var(--lb-gold)' }}>
            Quotité {Math.round(band.quota * 100)} %
          </span>
        </div>
        <div
          style={{
            marginTop: 6,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(21px,1.5vw,26px)',
            letterSpacing: '-.02em',
            color: 'var(--lb-white)',
          }}
        >
          ≈ {fr(cash)} €
        </div>
        <div
          style={{
            marginTop: 8,
            fontFamily: 'var(--font-alt)',
            fontWeight: 300,
            fontSize: 12,
            lineHeight: 1.4,
            color: 'rgba(255,255,255,.6)',
          }}
        >
          Généralement à partir de {band.floorLabel} M€ de valeur d&rsquo;actif · quotité indicative de{' '}
          {Math.round(band.quota * 100)} % sur {fr(value)} €
        </div>
        <div style={{ marginTop: 18, height: 1, background: 'var(--lb-line-on-dark)' }} />
        <div
          style={{
            marginTop: 16,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            color: 'var(--lb-white)',
          }}
        >
          <span style={{ fontSize: 14 }}>
            {mode === 'fiducie' ? 'Échéance annuelle indicative' : 'Loyer annuel indicatif'}
          </span>
          <span style={{ color: 'var(--lb-gold)', fontSize: 14 }}>≈ {fr(annuity)} € / an</span>
        </div>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 12,
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            color: 'var(--lb-white)',
          }}
        >
          <span style={{ fontSize: 14 }}>Instrument pressenti</span>
          <span style={{ color: 'var(--lb-gold)', fontSize: 14 }}>
            {mode === 'fiducie' ? 'Fiducie-sûreté' : 'Crédit-bail immobilier'}
          </span>
        </div>
      </div>

      <Link
        href={routes.eligibilite}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginTop: 22,
          padding: '10px 10px 10px 20px',
          border: '1px solid #E34454',
          borderRadius: 50,
          color: 'var(--lb-ink)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, letterSpacing: '-.01em' }}>
          Affiner mon estimation
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
      </Link>
      <div
        style={{
          marginTop: 10,
          fontFamily: 'var(--font-alt)',
          fontWeight: 300,
          fontSize: 12,
          lineHeight: '16px',
          color: 'rgba(0,0,0,.55)',
        }}
      >
        Simulation indicative, sans valeur d&rsquo;offre. Montant brut hors encours, fiscalité et frais. Conditions
        selon l&rsquo;actif et le montage retenu.
      </div>
    </div>
  );
}
