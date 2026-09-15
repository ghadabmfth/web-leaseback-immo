import type { CSSProperties } from 'react';
import { FA_GLYPHS, type FaName } from '@/lib/fa-glyphs';

/**
 * Inline replacement for the `<i class="fa-solid fa-…">` glyphs the design used.
 * Only the 62 glyphs the site actually references are bundled (lib/fa-glyphs.ts),
 * so nothing is fetched at runtime and there is no icon webfont to block paint.
 *
 * Sizing matches Font Awesome's own behaviour: the glyph is one em tall, so the
 * `font-size` the design set on the original `<i>` keeps working unchanged.
 */
export function Fa({
  name,
  style,
  className,
}: {
  name: FaName;
  style?: CSSProperties;
  className?: string;
}) {
  const [w, h, d] = FA_GLYPHS[name];
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{
        display: 'inline-block',
        height: '1em',
        width: `${(w / h).toFixed(4)}em`,
        verticalAlign: 'middle',
        overflow: 'visible',
        fill: 'currentColor',
        ...style,
      }}
    >
      <path d={d} />
    </svg>
  );
}
