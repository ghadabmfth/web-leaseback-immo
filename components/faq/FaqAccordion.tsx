'use client';

import { useId, useState } from 'react';
import { Fa } from '@/components/ui/Fa';
import type { FaqItem } from '@/lib/faq';

/** The disclosure list used on the home page and on /faq. One row open at a time. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,.12)' }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="lb-acc" style={{ borderTop: '1px solid rgba(0,0,0,.12)' }}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`${uid}-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(20px,2.4vw,44px)',
                width: '100%',
                padding: 'clamp(20px,1.9vw,28px) 0',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span
                className="lb-acc__q"
                style={{
                  flex: 1,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: 'clamp(18px,1.35vw,22px)',
                  lineHeight: 1.42,
                  letterSpacing: '-.015em',
                  color: 'var(--lb-ink)',
                  transition: 'color .24s',
                }}
              >
                {item.question}
              </span>
              <span
                className="lb-acc__dot"
                style={{
                  flex: 'none',
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  display: 'grid',
                  placeItems: 'center',
                  background: isOpen ? 'var(--lb-rose)' : 'rgba(0,0,0,.05)',
                  color: isOpen ? 'var(--lb-white)' : 'var(--lb-ink)',
                  transition: 'background .26s,color .26s,transform .3s cubic-bezier(.22,.61,.36,1)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <Fa name="chevron-down" style={{ fontSize: 12, lineHeight: 1 }} />
              </span>
            </button>
            <div
              id={`${uid}-${i}`}
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows .36s cubic-bezier(.22,.61,.36,1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p
                  style={{
                    margin: 0,
                    padding: '0 clamp(56px,7vw,120px) clamp(24px,2.2vw,34px) 0',
                    maxWidth: 920,
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: '28px',
                    color: 'rgba(0,0,0,.7)',
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
