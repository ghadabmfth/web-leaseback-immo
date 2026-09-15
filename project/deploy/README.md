# leaseback.immo — déploiement Vercel

Site statique : aucune étape de build.

## Déployer

1. Décompressez ce dossier.
2. `npx vercel deploy --prod` depuis le dossier — ou glissez-le dans vercel.com/new.
3. Framework preset : **Other**. Build command : vide. Output directory : `.`

## Contenu

- `index.html` — le site complet (17 pages, navigation par fragment : #accueil, #credit-bail, #fiducie, #comparatif, #actifs, #approche, #leaseback, #avantages, #tresorerie, #liquidites, #faq, #blog, #article, #eligibilite, #contact, #mentions, #404)
- `support.js` — runtime des composants
- `_ds/` — design system (tokens, styles, bundle)
- `assets/` — logo et photographies

Font Awesome 6 Free et Archivo sont chargés depuis un CDN : le site a besoin d'une connexion.
