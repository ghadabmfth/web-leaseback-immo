'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Progressive enhancement for the `[data-reveal]` sections: the opacity/translate
 * rules only apply once `.lb-rv-on` is on the site root, so without JS everything
 * is simply visible. Elements fade in as they enter the viewport, staggered like
 * the design canvas did.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.querySelector('.lb-site');
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('lb-rv-on');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el, i) => {
      if (el.classList.contains('is-in')) return;
      el.style.transitionDelay = `${Math.min(i, 4) * 60}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
