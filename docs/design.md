# Brierfield Pathway visual decision

**Approved direction:** design **1** of the **three original image concepts** supplied by the owner on 16 October 2026. The later plain-mint HTML prototype is **not** the authoritative design reference. Previous notes treating it as such are superseded.

The selected reference is the visual styleboard headed “Brierfield Pathway Documentation and Help Centre”, with the circular countryside logo and a white, unmistakable winding path; a warm photographic landscape behind the homepage; dark-blue serif branding and headings; glass-white organisation cards with coloured icons; a compact popular-resources section; and matching light and dark presentations. Content and authentication behaviour in the static mock-up are illustrative only.

## Current preview implementation

- The circular brand mark is an actual crop of the owner's uploaded chosen styleboard, **not** a new invented SVG.
- The wide hero uses a provisional independently licensed free photograph of UK countryside. It is **not** claimed to be the exact source photograph used in the generated concept. Credit: Jonny Gios, [Sunrise Over a Green Valley](https://unsplash.com/pt-br/fotografias/o-sol-brilha-intensamente-sobre-um-vale-verde-exuberante-KQQIglJhfuU), under the [Unsplash License](https://unsplash.com/license).
- The photographic hero, central welcome/search, overlaid cards and serif identity follow concept 1's overall composition. Starlight supplies the *real* accessible documentation reader, mobile navigation, theme switching and local Pagefind index.
- Brierfield Publishing uses the **gold outlined open-book icon** from the selected first styleboard, not a generic document glyph.
- Four distinct areas remain independent entities, not subsidiaries of a fictional parent. Homepage resources point to curated, already-public pages or public GitHub repositories.
- Excluded older Linux experiments and the personal maths course fork remain excluded. No simulated Mike/Debi login, client/clinical data, recovery secrets or unapproved guides are included.
- Static site hosting remains on GitHub Pages. Cloudflare Access, CT206 and private documentation remain separate and unchanged.

## Release decision

This is a **design review branch**, not user approval to deploy. Do not merge a substantial visual redesign of the current live site without the owner's review. Keep GitHub issue #3 open until the actual first styleboard design is accepted.

## Document reader design pass (17 October 2026)

The selected first styleboard includes matching article/guide layouts, not only a homepage. The public reader therefore retains **native Astro Starlight's** working left navigation, headings, on-page links and responsive behaviour while using the selected direction's dark-blue serif article titles and body copy, white reading surface, muted dividers and quiet blue/teal active-navigation highlight. No custom reader framework or additional dependencies were introduced.

The mobile header now leaves room for Starlight's existing menu control so the final **About** navigation link stays unobstructed, and the existing Pagefind search button is available on mobile reading pages. Example reader screenshots are in `docs/design-review/reader-light.jpg`, `reader-dark.jpg` and `reader-mobile.jpg`. The sample page is the existing curated public project directory; it contains no private documentation or invented approved procedures.

**Release remains blocked on owner design approval:** this reader pass is part of open review PR #17 and does not imply authorisation to deploy.
