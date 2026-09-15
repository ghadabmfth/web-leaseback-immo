import type { CSSProperties, ReactNode } from 'react';

/** The rose eyebrow capsule that opens a section (design system: Pill). */
export function Pill({
  children,
  tone = 'outline',
  size = 'md',
  style,
}: {
  children: ReactNode;
  tone?: 'outline' | 'solid' | 'dark';
  size?: 'md' | 'lg';
  style?: CSSProperties;
}) {
  const solid = tone === 'solid';
  const dark = tone === 'dark';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: size === 'lg' ? 50 : 43,
        padding: '0 17px',
        borderRadius: 'var(--r-22)',
        background: dark ? 'var(--lb-navy)' : solid ? 'var(--lb-rose-tint-strong)' : 'var(--lb-rose-tint)',
        boxShadow: dark || solid ? 'none' : 'var(--ring-rose)',
        color: dark ? 'var(--lb-white)' : 'var(--lb-rose)',
        fontFamily: 'var(--font-body)',
        fontWeight: dark ? 300 : 400,
        fontSize: size === 'lg' ? 19 : 17,
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** Eyebrow rule + label — the small rose dash that precedes most section titles. */
export function Eyebrow({ children, marginBottom = 20 }: { children: ReactNode; marginBottom?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom }}>
      <span style={{ width: 36, height: 2, background: 'var(--lb-rose)' }} />
      <span
        style={{
          fontFamily: 'var(--font-alt)',
          fontWeight: 500,
          fontSize: 14,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--lb-rose)',
        }}
      >
        {children}
      </span>
    </div>
  );
}

/** Eyebrow pill → section title → intro. The rhythm every section opens with. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  style,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  style?: CSSProperties;
}) {
  const onDark = tone === 'dark';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        ...style,
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: 16 }}>
          <Pill>{eyebrow}</Pill>
        </div>
      )}
      {title && (
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'var(--type-h2-size)',
            lineHeight: 'var(--type-h2-lh)',
            color: onDark ? 'var(--lb-white)' : 'var(--text-heading)',
          }}
        >
          {title}
        </h2>
      )}
      {intro && (
        <p
          style={{
            margin: '12px 0 0',
            maxWidth: 880,
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 'var(--type-intro-size)',
            lineHeight: 'var(--type-intro-lh)',
            color: onDark ? 'rgba(255,255,255,.86)' : 'var(--lb-black)',
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
