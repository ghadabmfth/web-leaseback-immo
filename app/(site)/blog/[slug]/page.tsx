import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fa } from '@/components/ui/Fa';
import { getPost, posts } from '@/lib/posts';
import { routes, SITE_NAME } from '@/lib/routes';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Article introuvable' };
  const url = `${routes.blog}/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      images: [post.image],
      publishedTime: post.published,
      siteName: SITE_NAME,
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getPost(slug);
  if (!article) notFound();
  const related = posts.filter((p) => p.slug !== article.slug).slice(0, 2);

  return (
    <div>
      <section style={{ background: "var(--lb-white)", padding: "clamp(30px,3vw,52px) var(--page-x) 0" }}>
        <div style={{ maxWidth: "900px", marginInline: "auto" }}>
          <Link href="/blog" className="lb-flink" style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: "500", fontSize: "16px", color: "rgba(0,0,0,.6)" }}><Fa name="arrow-left" style={{ fontSize: "13px", lineHeight: "1", color: "var(--lb-rose)" }} />Tous les articles</Link>
          <div style={{ marginTop: "24px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lb-rose)" }}>{article.tag}<span style={{ width: "3px", height: "3px", borderRadius: "2px", background: "rgba(0,0,0,.25)" }}></span><span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "rgba(0,0,0,.45)" }}><Fa name="r-clock" style={{ fontSize: "12px", lineHeight: "1" }} />{article.read} de lecture</span></div>
          <h1 className="lb-editorial" style={{ margin: "16px 0 0", fontSize: "clamp(30px,3.2vw,54px)" }}>{article.title}</h1>
          <p style={{ margin: "18px 0 0", fontFamily: "var(--font-body)", fontWeight: "400", fontSize: "var(--type-lead-size)", lineHeight: "var(--type-lead-lh)", color: "var(--lb-ink-2)" }}>{article.excerpt}</p>
          <div style={{ marginTop: "24px", padding: "16px 0", borderTop: "1px solid rgba(0,0,0,.08)", borderBottom: "1px solid rgba(0,0,0,.08)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px" }}>
            <span style={{ display: "grid", placeItems: "center", width: "38px", height: "38px", borderRadius: "19px", background: "var(--lb-rose-tint)", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "13px", color: "var(--lb-rose)" }}>BL</span>
            <span><span style={{ display: "block", fontWeight: "500", fontSize: "16px", color: "var(--lb-ink)" }}>Bluelease</span><span style={{ display: "block", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.55)" }}>leaseback.immo · {article.date}</span></span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--lb-white)", padding: "clamp(28px,3vw,44px) var(--page-x) var(--section-y)" }}>
        <div style={{ maxWidth: "900px", marginInline: "auto" }}>
          <div style={{ height: "clamp(220px,24vw,380px)", borderRadius: "var(--r-25)", backgroundImage: `url(${article.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(26px,2.6vw,40px)", marginTop: "clamp(28px,3vw,48px)" }}>
            {article.blocks.map((block, i) => (<div key={i}>
                {block.heading && (
                  <h2 style={{ margin: "0 0 14px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "var(--type-h3-size)", lineHeight: "1.22", letterSpacing: "-.025em", color: "var(--text-heading)" }}>{block.heading}</h2>
                )}
                <p style={{ margin: "0", fontWeight: "300", fontSize: "16px", lineHeight: "var(--type-body-lh)", color: "var(--lb-black)" }}>{block.body}</p>
            </div>))}
            <div style={{ borderLeft: "3px solid var(--lb-rose)", paddingLeft: "clamp(18px,2vw,30px)" }}>
              <p style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "400", fontSize: "clamp(19px,1.6vw,26px)", lineHeight: "1.5", color: "var(--lb-ink)" }}>{article.pull}</p>
            </div>
            <p style={{ margin: "0", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", lineHeight: "22px", color: "rgba(0,0,0,.55)" }}>Cet article est fourni à titre informatif et ne constitue ni un conseil juridique, ni un conseil fiscal. Chaque situation doit être validée avec vos conseils.</p>
          </div>

          <div style={{ marginTop: "clamp(34px,3.4vw,56px)", paddingTop: "clamp(28px,2.8vw,44px)", borderTop: "1px solid rgba(0,0,0,.08)" }}>
            <div style={{ fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lb-rose)" }}>À lire ensuite</div>
            <div className="lb-related" style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "clamp(16px,1.8vw,24px)" }}>
              {related.map((post) => (
                <Link key={post.slug} href={`${routes.blog}/${post.slug}`} className="lb-cardhov" style={{ display: "flex", gap: "16px", alignItems: "center", padding: "16px", borderRadius: "var(--r-15)", boxShadow: "var(--ring-hairline)", color: "inherit" }}>
                  <span style={{ flex: "none", width: "74px", height: "74px", borderRadius: "12px", backgroundImage: `url(${post.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></span>
                  <span>
                    <span style={{ display: "block", fontFamily: "var(--font-alt)", fontWeight: "500", fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--lb-rose)" }}>{post.tag}</span>
                    <span style={{ display: "block", marginTop: "6px", fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "16px", lineHeight: "1.35", letterSpacing: "-.01em", color: "var(--lb-ink)" }}>{post.title}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "6px", fontFamily: "var(--font-alt)", fontWeight: "300", fontSize: "14px", color: "rgba(0,0,0,.5)" }}><Fa name="r-clock" style={{ fontSize: "12px", lineHeight: "1", color: "var(--lb-rose)" }} />{post.read} de lecture</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
