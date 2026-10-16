# Public-site design implementation

The **first clean-modern** Brierfield Pathway mock-up was selected on 15 October 2026. The homepage follows that original specification, rather than inventing a replacement design.

## Adopted design characteristics

- Soft pale green-blue landscape hero, original softly layered hill illustration, generous spacing and an immediately visible search field.
- Four independently named organisation cards, using muted blue, cream, green and lilac backgrounds. Brierfield Pathway is shared documentation, **not** a legal parent.
- Four task entry points and a separate list of currently available, genuinely public resources.
- Large readable headings, accessible focus indicators, light/dark variants and four-column desktop and two-column mobile cards.
- Starlight remains responsible for actual documentation navigation, keyboard shortcuts, Pagefind search and article routes.

## Not ported from the original prototype

- Simulated “Mike”, “Debi” and “Public visitor” user selectors. There is no authenticated public/private toggle on this public site.
- Illustrative procedures concerning backups, manuscript handling or confidential client forms. Fake procedure text must not be presented as an approved document.
- Private inventory paths, internal network details, unpublished work, CT206 metadata and unreviewed sources.

## Publication scope

Homepage cards link only to this public site or independently verified public websites/repositories. Public and private publishing gates remain entirely separate. The restored original hillside design and layout are for visual review, **not final approval of a brand asset**.

Track related design and access decisions in the coordinator's internal issue #17. The private documentation site remains unconfigured.

## Public project selection

The directory is **editorially curated**. Public GitHub visibility does not automatically mean a repository belongs in documentation. Older personal experiments, learning-course forks and unrelated archival projects are excluded unless specifically approved for inclusion. Repository visibility and contents are never changed by editorial removal.

## Direct prototype comparison (16 October 2026)

The actual 15 October prototype HTML on the Debian IdeaPad was rendered and compared directly with the rebuilt site in a real Chromium browser. The prototype itself is **not copied into this public repository** because it includes simulated user identities and unapproved sample procedures.

Matching elements: 78px branded header plus a 31px public-preview strip; original Browse/By organisation/By task/Recovery navigation; compact rolling-hill hero and searchable input; four compact pastel organisation cards; four compact task cards; six compact resource rows with organisation labels; and a simple footer. The public homepage retains real search, theme switching and Starlight reading pages.

At a **1440px desktop width** both original prototype and rebuilt page place the hero at x=62px, y=144px, width=1316px, height=394.53px. At a **390px mobile width**, the rebuilt hero starts at y=209px and measures 454.86px high, closely matching the reference. Browser checks also covered 820px and 320px screens, with no horizontal overflow, functional search, one visible heading and theme controls.

Deliberate differences: the original fake owner selector becomes a non-interactive *Public site* label; sample internal clinical, backup and publishing guides are replaced by links to six real public resources; no private website login is simulated. The public website continues to use Starlight for non-homepage article layouts.

Overall design approval is still a separate user decision, tracked in coordinator issue #17 and this repository issue #3.
## Wayfinding path restored (16 October 2026)

The selected prototype's layered hills remain the main background. A **filled, two-edged winding footpath** is now layered into the hills as a decorative inline SVG, with light paving joints and a destination sign. It broadens into the foreground and narrows towards the horizon. It replaces the missing route motif without changing the prototype-matched hero dimensions or reintroducing the dotted, tentacle-like line. On narrow screens the path is subdued behind content.

No external assets or new packages were added. The visual result was checked in Chromium at desktop and phone sizes; search, article navigation and dark mode remain functional. Overall design acceptance is still open in issue #3.
## Recognisable pathway artwork (16 October 2026)

The earlier narrow S-shaped mark was not an effective depiction of a pathway. User review explicitly rejected it even after deployment. The new artwork is a **broad footpath with perspective**: pale stone-coloured walking surface, clear left/right edges, paving joints, grassy banks and a distant signpost. The foreground is deliberately wide and the route narrows towards the hillside horizon.

The SVG is purely decorative and embedded locally. It occupies the right side of the existing prototype-matched hero. The layout geometry, Starlight search, navigation and content have not changed. Mobile rendering uses reduced prominence behind the text, but the pathway remains visible. Visual acceptance is a **separate user decision**, not proven by build/CI checks.

This supersedes the prior claim that the much narrower trail artwork had resolved the design feedback.
