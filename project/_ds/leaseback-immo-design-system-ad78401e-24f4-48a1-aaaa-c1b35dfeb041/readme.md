# leaseback.immo — Design System

## 1. Context

**leaseback.immo** is a French B2B financing brand: it helps companies that own their
commercial premises turn that property into cash without giving up the use of it.
Two instruments sit at the centre of everything the site says:

| Instrument | Threshold | Mechanism |
| --- | --- | --- |
| **Crédit-bail immobilier** (leaseback) | from 1 000 000 € | The company sells the building to a *crédit-bailleur*, who leases it straight back. Rent is tax-deductible; a purchase option is fixed at signature. |
| **Fiducie-sûreté** | from 5 M€ | The asset is transferred temporarily to a *fiduciaire* as security for a financing. Economic use is retained; the asset returns automatically once the debt is extinguished. |

The brand is operated by **Bluelease**, an independent structuring firm (ORIAS n° 25000436),
based at 15 Boulevard Gabriel Guist'hau, 44000 Nantes — 02 55 99 44 07 —
contact@leasebackimmo.fr. The audience is strictly business: entreprises, holdings,
sociétés patrimoniales, dirigeants and their advisers. Never consumers.

### Sources this system was built from

- **Figma file** `Leaseback immobilier.fig` ("Leaseback-immobilier---08-10-2026", 314 frames,
  1 page, 8 local symbols). Mounted read-only; every value here was transcribed from it.
  Reference frames: `Accueil V2` (node 1:23) — the primary visual reference —
  `Crédit-bail immobilier` (1:676), `fiducie-sûreté` (1:1363), `Notre approche` (1:4016),
  `FAQ` (1:4751), `Qu'est-ce que le leaseback` (1:3447), `Avantages-leaseback` (1:5374),
  `Contact` (1:2209, actually a 404 page), `obtenir trésorerie` (1:2447),
  `Débloquer de la trésorerie` (1:2969).
- **Logo** supplied by the client as `uploads/Leaseback-immo-logo.svg` → `assets/logo.svg`.
- No codebase, no live URL and no slide deck were provided.

### The brief this system answers

The homepage is polished; the inner pages had drifted (a green success callout, ad-hoc
chip rows, coloured left-border cards, inconsistent hero treatments). This system takes
**Accueil V2 as the single source of truth** and re-expresses every inner page through the
same components, so the pages read as one site.

---

## 2. CONTENT FUNDAMENTALS

**Language.** French only, formal register, *vous* throughout. The brand refers to itself
as "nous" ("Nous analysons votre dossier") or by name in lowercase — **leaseback.immo**,
never capitalised, never "Leaseback Immo".

**Tone.** Advisory and precise, never salesy. Copy states conditions and limits as
readily as benefits — *"L'accès dépend de la qualité de l'actif, de sa valeur vénale, de
sa liquidité"*, *"Un cycle de traitement de plusieurs mois est habituel"*. Nothing is
promised; the verbs are *permet*, *peut*, *est généralement adaptée*, *sous réserve de*.

**Structure of a section.** Eyebrow (2–3 words) → question or claim as an H2 →
one-sentence intro → the content. Titles are very often literal questions:
"Pour quels besoins ?", "Comment ça fonctionne ?", "Qu'est-ce que le crédit-bail
immobilier ?", "Qui est concerné ?".

**Casing.** Sentence case everywhere. Two exceptions in the source: the footer heading
`CONTACT` is set in caps, and step tags read "Étape". Eyebrow pills are sentence case
("Leaseback immobilier professionnel", "Exclusivement B2B", "Accompagnement", "En bref").

**Punctuation.** French spacing conventions are respected — a space before `?` and `:`,
`«  »` for quotation, `—` em dashes for asides, `·` middots as separators in reassurance
lines ("Gratuit · Sans engagement · Réponse en 24h"). Money is written `1 000 000 €` or
`5 M€` with a non-breaking-style space.

**Numbers.** Steps are zero-padded two digits (01–04). Thresholds are always stated with
"Dès" ("Dès 1 000 000 €", "Dès 5 M€") and always live in a rose pill.

**Emoji.** None, anywhere. Do not introduce them.

**Recurring phrases** worth reusing verbatim: "Tester mon éligibilité", "Parler à un
expert", "En savoir plus sur…", "Gratuit · Sans engagement · Réponse en 24h",
"Testez votre éligibilité en 5 minutes", "100 % B2B exclusivement entreprises
propriétaires".

---

## 3. VISUAL FOUNDATIONS

**Palette.** A cream page (`#F7F5F1`), white cards, a deep navy (`#0D1B2A`) for inverted
bands, and one loud accent: **rose `#E34454`** — the same red as the dot in the logo. Rose
carries eyebrows, step numbers, CTAs, bullets and footer column headings. **Gold
`#C9A84C`** appears in exactly two places: the hero CTA on the homepage and the titles of
the photo asset cards. Semantic green/amber exist in the file but are used sparingly;
prefer rose for emphasis. Two colour families per page maximum — cream+white, or navy.

**Type.** Two families do all the work. **Inter** for anything titular: Bold 48px for
H1/H2 (line-height 76.8px on page titles, 88px on section titles), Regular 36/50 and
25/40 for card titles. **Public Sans** for everything else: Light 300 is the default
reading weight (18/28.8 body, 25/40 intros), Regular 400 for leads (32/51.2), Medium 500
for nav and buttons (20px). **Hanken Grotesk** is the fine-print voice only — 14px meta
lines and 19px footer tagline. The size ramp is not modular; it is the literal list of
values in the file (14, 15, 17, 18, 19, 20, 21, 24, 25, 26, 27, 29, 30, 32, 34, 36, 46,
48, 51, 62, 75). Do not round to a scale.

**Spacing & grid.** 1920px artboard. Header inset 80px, section content inset 75px
(content column 1770px). Dark bands run 1749px wide, inset a further 11px, with a 48px
rose tab bleeding off their left edge. Section vertical rhythm is generous: ~110–120px
top and bottom, 60–76px between a heading block and its content, 96px between timeline
rows.

**Backgrounds.** Flat colour, never gradient-for-decoration. Two gradients exist and both
serve legibility: the hero's white-to-transparent veil over the building photo
(`180deg, #fff 0% → rgba(128,128,128,0) 100%`) and the black scrim on asset cards
(`180deg, rgba(0,0,0,0) → #000`). No patterns, no textures, no noise, no illustration.

**Imagery.** Real photography of real commercial property — offices, logistics, retail,
mixed-use — shot in warm daylight, slightly desaturated, wide and horizontal. People
appear only incidentally (hands, a key handover). Never stock-illustration, never 3D
render, never an icon standing in for a building.

**Corner radii.** 10px FAQ rows · 15px cards · 16px buttons · 20px step tags · 22px pills
· 25px dark bands · 51px step discs. Nothing is square; nothing is fully rounded except
pills and discs.

**Cards.** White, radius 15, no border, one soft shadow: `0 3px 10px rgba(0,0,0,.102)`.
The dark variants (`#121C2D`) carry a 0.1px white inset ring instead of a shadow. Cards
never nest inside cards.

**Borders.** Hairlines, not rules: the secondary button and the FAQ row both use
`inset 0 0 0 0.3px #000`. On dark surfaces, dividers are white at 24% opacity. The only
1px stroke in the system is the rose ring on the eyebrow pill.

**Shadows.** Four, and they are colour-matched to what casts them:
`0 3px 6px rgba(0,0,0,.16)` header · `0 3px 10px rgba(0,0,0,.10)` cards ·
`0 3px 6px rgba(227,68,84,.38)` rose CTA · `0 3px 6px rgba(201,168,76,.38)` gold CTA.
Step discs use the rose shadow at 10px blur.

**Transparency & blur.** Used only where content sits over a photo: the sticky header is
white with a 40px backdrop blur on the homepage, and the two rose tints (11% for the
eyebrow pill, 38% for the solid pill and CTA shadow) are the only alpha fills.

**Buttons.** 308×71, radius 16, label Public Sans 500/20 on the left, a diagonal arrow on
the right. Exactly one filled button per pairing; the partner is the cream 0.3px-hairline
secondary. The arrow is a real vector from the file, rotated -90°, never a text "→"
(although the *inline text links* do use a literal "→", as in "En savoir plus sur le
crédit-bail immobilier →").

**Motion.** The source is static, so this system defines a restrained default:
200ms `cubic-bezier(.22,.61,.36,1)` on colour, shadow and transform. Hover on a filled
button = 4% darker plus a 1px lift; hover on a card = shadow blur 10 → 16px; hover on a
link or nav item = rose. Press = return to 0 offset, no scale-down. Accordion chevron
rotates 180° over the same duration. No bounce, no parallax, no scroll-jacking, no
entrance animation on body copy.

**Layout rules.** The header is fixed at 104px and always carries both conversion paths
(phone number and "Tester mon éligibilité"). The footer always closes the page with the
eligibility CTA, so no page repeats a standalone CTA section immediately above it.

---

## 4. ICONOGRAPHY

The source is icon-light and deliberately so. Three things carry meaning visually: the
rose check, the photograph, and the numeral.

- **Shipped vectors** (`assets/icons/`, all extracted from the .fig and exposed through
  the `Icon` component): `check-circle` (filled disc with a tick, used on reassurance
  lines), `check-badge` (a scalloped 12-point badge with a tick — the bullet marker for
  every list on the site), `phone` (filled handset, header and footer), `arrow` (the
  diagonal CTA arrow), `chevron` (FAQ and dropdown caret), `mail` and `pin` (the footer's outline glyphs).
- **No icon font is bundled.** The Figma file calls **Font Awesome 6 Pro Solid** at 12px
  for roughly a hundred small inline markers. That font is licensed and cannot be shipped
  — **flagged substitution:** use [Lucide](https://lucide.dev) from CDN at 1.75–2px stroke
  where a glyph is needed that this system does not ship, and colour it rose. Ask the
  client for the FA Pro kit if exact parity matters.
- **No emoji, ever. No unicode dingbats** except the `·` middot separator and the `→`
  arrow inside inline text links.
- **Numerals as icons.** The 62px translucent rose numeral in the corner of an index card
  and the 51px white numeral in a rose disc are the system's strongest "icons" — prefer
  them to a picture whenever the content is a sequence.

---

## 5. Components

Built from the eight symbols the Figma file defines, plus the repeated (but
un-symbolised) group patterns the homepage relies on.

| Component | Directory | Figma origin |
| --- | --- | --- |
| `Logo` | `components/brand/` | client SVG (`assets/logo.svg`) |
| `Icon` | `components/brand/` | extracted vectors — *intentional addition* (see below) |
| `Button` | `components/core/` | **Component 1 – 1** (rose) + **Component 2 – 1** (outline) |
| `Pill` | `components/core/` | eyebrow / threshold capsule, repeated group |
| `Card` | `components/core/` | **Component 16 – 1** (light) + **Component 5 – 2** / **Component 6 – 1** (dark) |
| `SectionHeading` | `components/core/` | the pill→H2→intro rhythm, repeated group |
| `SolutionCard` | `components/content/` | Accueil V2 crédit-bail / fiducie pair |
| `AssetCard` | `components/content/` | "Pour quels besoins ?" photo cards |
| `StepBadge` | `components/content/` | Group 4331 |
| `StepRow` | `components/content/` | Group 4326 + Group 4331 |
| `CheckList` | `components/content/` | Objectifs bullet list |
| `ObjectivesBand` | `components/content/` | Objectifs navy band |
| `FeatureStat` | `components/content/` | Group 4430 ("En bref") |
| `Accordion`, `AccordionItem` | `components/disclosure/` | **Component 15 – 1** |
| `SiteHeader` | `components/layout/` | **Component 9 – 1** |
| `SiteFooter` | `components/layout/` | **Component 8 – 1** |

**Confirmed intentional naming.** The Figma file's eight symbols carry Figma's
auto-generated names ("Component 1 – 1", "Component 15 – 1", …), which carry no meaning.
Every component here is therefore given a descriptive name, and the table above is the
authoritative mapping. All sixteen — `Logo`, `Icon`, `Button`, `Pill`, `Card`,
`SectionHeading`, `SolutionCard`, `AssetCard`, `StepBadge`, `StepRow`, `CheckList`,
`ObjectivesBand`, `FeatureStat`, `Accordion` (with `AccordionItem`), `SiteHeader` and
`SiteFooter` — are intentional and correspond to real, repeated structures in the source.

**Intentional additions.** Every component name below is an intentional addition: the
Figma file's symbols are auto-named ("Component 1 – 1", "Component 5 – 2", …), so there
is no kit vocabulary to inherit and each component is renamed descriptively.

- `Logo` — intentional addition: wraps the client-supplied brand SVG, which the .fig
  carries only as loose vector paths.
- `Icon` — intentional addition: the file's glyphs are loose vectors with no symbol
  wrapper; one component keeps them consistent and typed.
- `Button` — intentional addition: descriptive rename of **Component 1 – 1** (rose) and
  **Component 2 – 1** (outline), merged into one tone-driven component.
- `Card` — intentional addition: descriptive rename of **Component 16 – 1** (light) and
  **Component 5 – 2** / **Component 6 – 1** (dark).
- `Accordion` / `AccordionItem` — intentional addition: descriptive rename of
  **Component 15 – 1**, split into list and row.
- `SiteHeader` — intentional addition: descriptive rename of **Component 9 – 1**.
- `SiteFooter` — intentional addition: descriptive rename of **Component 8 – 1**.
- `Pill`, `SectionHeading`, `SolutionCard`, `AssetCard`, `StepBadge`, `StepRow`,
  `CheckList`, `ObjectivesBand`, `FeatureStat` — intentional additions: each is a pattern
  the source repeats verbatim on three or more frames as a Figma *Group* rather than a
  Component. Promoting them is what makes the inner pages consistent, which is the point
  of the brief.

Nothing here is invented from outside the file.

---

## 6. Index

```
readme.md              this file
SKILL.md               Agent-Skills front matter
styles.css             the single entry point consumers link (imports only)
thumbnail.html         homepage tile
tokens/                colors.css · typography.css · spacing.css · fonts.css · base.css
assets/logo.svg        the brand wordmark (client-supplied)
assets/img/            six photographs lifted from the .fig
assets/icons/          the shipped vector glyphs
components/brand/      Logo, Icon
components/core/       Button, Pill, Card, SectionHeading
components/content/    SolutionCard, AssetCard, StepBadge, StepRow, CheckList,
                       ObjectivesBand, FeatureStat
components/disclosure/ Accordion, AccordionItem
components/layout/     SiteHeader, SiteFooter
guidelines/            17 foundation specimen cards (Colors, Type, Spacing, Brand)
ui_kits/website/       the click-through site recreation — start at index.html
```

## 7. Known gaps

- **No form design exists in the source.** The frame named `Contact` is in fact a 404
  page ("Oups… il manque une tuile."), and `Test d'éligibilité` is an empty text node.
  No input, select, checkbox, radio or textarea is drawn anywhere in the file, so this
  system deliberately ships **no form primitives** and the UI kit has no eligibility
  wizard. Provide the form screens and they will be added.
- **Font Awesome 6 Pro Solid** is referenced but not licensable here (see ICONOGRAPHY).
- **Responsive behaviour** is inferred, not drawn: the file contains desktop frames only
  (1920px). Breakpoints in the kit are a proposal, not a transcription.
