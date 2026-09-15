'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Fa } from '@/components/ui/Fa';
import { Icon } from '@/components/ui/Icon';
import { routes } from '@/lib/routes';
import { posts, postTags } from '@/lib/posts';

/** Search field + tag filter + card grid. Filtering happens in the browser. */
export function PostList() {
  const [tag, setTag] = useState('Tous');
  const [query, setQuery] = useState('');

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => tag === 'Tous' || p.tag === tag)
      .filter((p) => !q || `${p.title} ${p.excerpt} ${p.tag}`.toLowerCase().includes(q));
  }, [tag, query]);

  return (
    <>
      <div
        className="lb-search"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: 'clamp(16px,2vw,32px)',
          alignItems: 'center',
          marginBottom: 'clamp(20px,2vw,30px)',
        }}
      >
        <label
          htmlFor="lb-blog-q"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(19px,1.5vw,25px)',
            letterSpacing: '-.02em',
            color: 'var(--lb-ink)',
          }}
        >
          Je recherche un article sur…
        </label>
        <div
          className="lb-simfield"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxSizing: 'border-box',
            minWidth: 'min(100%,360px)',
            padding: '14px 18px',
            borderRadius: 'var(--r-16)',
            boxShadow: 'var(--ring-hairline)',
          }}
        >
          <Fa name="magnifying-glass" style={{ flex: 'none', fontSize: 15, lineHeight: 1, color: 'var(--lb-rose)' }} />
          <input
            id="lb-blog-q"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Fiscalité, délais, sortie anticipée…"
            style={{
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
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {postTags.map((label) => {
          const active = label === tag;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={active}
              onClick={() => setTag(label)}
              style={{
                border: 'none',
                cursor: 'pointer',
                height: 38,
                padding: '0 18px',
                borderRadius: 19,
                background: active ? 'var(--lb-rose)' : 'transparent',
                boxShadow: 'var(--ring-hairline)',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 16,
                color: active ? 'var(--lb-white)' : 'var(--lb-ink)',
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div
        className="lb-posts"
        style={{
          marginTop: 'clamp(28px,3vw,44px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
          gap: 'clamp(20px,2.2vw,34px)',
        }}
      >
        {shown.map((post) => (
          <Link
            key={post.slug}
            href={`${routes.blog}/${post.slug}`}
            className="lb-cardhov"
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              borderRadius: 'var(--r-15)',
              background: 'var(--lb-white)',
              boxShadow: 'var(--shadow-card)',
              color: 'inherit',
            }}
          >
            <span
              style={{
                display: 'block',
                height: 'clamp(170px,14vw,210px)',
                backgroundImage: `url(${post.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 'clamp(20px,1.9vw,28px)' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'var(--font-alt)',
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--lb-rose)',
                }}
              >
                {post.tag}
                <span style={{ width: 3, height: 3, borderRadius: 2, background: 'rgba(0,0,0,.25)' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(0,0,0,.45)' }}>
                  <Fa name="r-clock" style={{ fontSize: 12, lineHeight: 1 }} />
                  {post.read} de lecture
                </span>
              </span>
              <span
                style={{
                  marginTop: 12,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'clamp(18px,1.35vw,22px)',
                  lineHeight: 1.28,
                  letterSpacing: '-.02em',
                  color: 'var(--lb-ink)',
                }}
              >
                {post.title}
              </span>
              <span style={{ marginTop: 10, fontWeight: 300, fontSize: 16, lineHeight: '25px', color: 'rgba(0,0,0,.68)' }}>
                {post.excerpt}
              </span>
              <span
                style={{
                  marginTop: 18,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(0,0,0,.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                <span style={{ fontFamily: 'var(--font-alt)', fontWeight: 300, fontSize: 14, color: 'rgba(0,0,0,.5)' }}>
                  {post.date}
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
            </span>
          </Link>
        ))}
        {shown.length === 0 && (
          <p style={{ margin: 0, fontWeight: 300, fontSize: 16, color: 'rgba(0,0,0,.6)' }}>
            Aucun article ne correspond à cette recherche.
          </p>
        )}
      </div>
    </>
  );
}
