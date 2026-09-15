# leaseback.immo

Site vitrine de **leaseback.immo** (Bluelease) — refinancement immobilier professionnel :
crédit-bail immobilier et fiducie-sûreté.

Next.js (App Router) + TypeScript, sans framework CSS ni bibliothèque de composants.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | Rôle                                   |
| ------------------- | -------------------------------------- |
| `npm run dev`       | serveur de développement               |
| `npm run build`     | build de production (tout est statique) |
| `npm run start`     | sert le build de production            |
| `npm run lint`      | ESLint (`next/core-web-vitals`)        |
| `npm run typecheck` | `tsc --noEmit`                         |

## Arborescence

```
app/
  layout.tsx                 en-tête + pied de page, police Archivo, métadonnées globales
  globals.css                jetons du design system + règles de page (source unique du style)
  (site)/…                   pages qui se terminent par la bande « Test d’éligibilité »
  (bare)/eligibilite|contact pages de conversion (pas de bande finale)
  not-found.tsx              404
  sitemap.ts / robots.ts
components/
  site/                      en-tête (méga-menu, tiroir, compaction au scroll), pied de page, CTA
  ui/                        Logo, Icon (glyphes de marque), Fa (glyphes Font Awesome inlinés),
                             Button, Pill, SectionHeading, Eyebrow, ScrollReveal, FloatIcons
  home/HeroSimulator         simulateur de refinancement du hero
  faq/FaqAccordion           accordéon des questions fréquentes
  blog/PostList              recherche + filtre par rubrique
  contact/ContactForm        formulaire de contact (validation côté client)
  eligibilite/…              test d’éligibilité en 7 étapes
lib/
  routes.ts  faq.ts  posts.ts  eligibility.ts  fa-glyphs.ts
public/img/                  photographies et illustrations
```

Le formulaire de contact et le test d’éligibilité sont **entièrement côté client** : aucune
requête réseau n’est émise, la soumission bascule simplement sur l’écran de confirmation.

## Design

Le design provient d’un export Claude Design conservé dans le dépôt à titre de référence :

- `project/Site leaseback.immo.dc.html` — la maquette complète (source de vérité du balisage,
  de la typographie, des espacements et des textes) ;
- `project/_ds/…/tokens/*.css` — les jetons du design system, transcrits dans `app/globals.css` ;
- `project/assets/` — les visuels d’origine ;
- `chats/` — l’historique d’itération du design.

Ces dossiers ne sont pas utilisés à l’exécution et ne sont pas inclus dans le build.
