import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { routes, SITE_URL } from '@/lib/routes';

/** Priority reflects how central each page is to the conversion path. */
const PRIORITY: Record<string, number> = {
  [routes.accueil]: 1,
  [routes.creditBail]: 0.9,
  [routes.fiducie]: 0.9,
  [routes.eligibilite]: 0.9,
  [routes.contact]: 0.8,
  [routes.mentions]: 0.3,
  [routes.confidentialite]: 0.3,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = Object.values(routes).map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: PRIORITY[path] ?? 0.7,
  }));

  const articles = posts.map((post) => ({
    url: `${SITE_URL}${routes.blog}/${post.slug}`,
    lastModified: new Date(post.published),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
