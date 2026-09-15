import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { Icon } from './Icon';

/* Component 1 (rose) / Component 2 (outline) from the design system, plus the gold
   hero variant. The `.lb-site .lb-btn` rules in globals.css restyle these into the
   wordmark-echoing "bold label + rose arrow disc" treatment used across the site. */
type ToneSpec = { bg: string; fg: string; shadow: string; ring: string };
type SizeSpec = { h: string; px: string; fs: string };

const TONES = {
  primary: { bg: 'var(--lb-rose)', fg: 'var(--lb-white)', shadow: 'var(--shadow-rose)', ring: 'none' },
  gold: { bg: 'var(--lb-gold)', fg: 'var(--lb-white)', shadow: 'var(--shadow-gold)', ring: 'none' },
  secondary: { bg: 'var(--lb-cream)', fg: 'var(--lb-ink)', shadow: 'none', ring: 'var(--ring-hairline)' },
  dark: { bg: 'var(--lb-navy)', fg: 'var(--lb-white)', shadow: 'var(--shadow-card-ink)', ring: 'none' },
  ghost: { bg: 'transparent', fg: 'var(--lb-white)', shadow: 'none', ring: 'inset 0 0 0 1px rgba(255,255,255,.4)' },
} satisfies Record<string, ToneSpec>;

const SIZES = {
  md: { h: 'var(--btn-h)', px: 'var(--btn-pad-x)', fs: 'var(--type-nav-size)' },
  sm: { h: '52px', px: '26px', fs: '18px' },
} satisfies Record<string, SizeSpec>;

export type ButtonTone = keyof typeof TONES;

type CommonProps = {
  children: ReactNode;
  tone?: ButtonTone;
  size?: keyof typeof SIZES;
  arrow?: boolean;
  full?: boolean;
  style?: CSSProperties;
};

function buttonStyle({ tone = 'primary', size = 'md', full, style }: CommonProps): CSSProperties {
  const t: ToneSpec = TONES[tone];
  const s: SizeSpec = SIZES[size];
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    boxSizing: 'border-box',
    width: full ? '100%' : undefined,
    minWidth: full ? undefined : 'var(--btn-w)',
    maxWidth: '100%',
    height: s.h,
    padding: `0 ${s.px}`,
    borderRadius: 'var(--r-16)',
    border: 'none',
    background: t.bg,
    color: t.fg,
    boxShadow: t.shadow === 'none' ? t.ring : t.ring === 'none' ? t.shadow : `${t.shadow}, ${t.ring}`,
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: s.fs,
    lineHeight: 1,
    letterSpacing: 0,
    textDecoration: 'none',
    cursor: 'pointer',
    transition:
      'transform var(--dur) var(--ease-standard), filter var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)',
    ...style,
  };
}

function Inner({ children, tone = 'primary', arrow = true }: CommonProps) {
  return (
    <>
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={16.384} color={TONES[tone].fg} />}
    </>
  );
}

/** Button rendered as a link to another page of the site. */
export function Button(props: CommonProps & { href: string }) {
  const { href, ...rest } = props;
  return (
    <Link className="lb-btn" href={href} style={buttonStyle(rest)}>
      <Inner {...rest} />
    </Link>
  );
}

/** Button rendered as a real `<button>` — used by the client-side forms. */
export function ActionButton(
  props: CommonProps & { onClick?: () => void; type?: 'button' | 'submit'; disabled?: boolean },
) {
  const { onClick, type = 'button', disabled, ...rest } = props;
  return (
    <button
      className="lb-btn"
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...buttonStyle(rest), cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1 }}
    >
      <Inner {...rest} />
    </button>
  );
}
