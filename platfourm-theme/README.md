# Platfourm — WordPress Block Theme

Block-theme (Full Site Editing) port of the static Platfourm site
(https://tommyclaude.github.io/platfourm2/v3/). The whole home page ships as
editable Gutenberg blocks; every section is also registered as a block
pattern under the **Platfourm** category.

## Install

1. Zip this folder (or use the provided `platfourm-theme.zip`).
2. In wp-admin: **Appearance → Themes → Add New Theme → Upload Theme** → choose the zip → **Install** → **Activate**.
3. Done — the front page renders the full site immediately (no import step).

Requires WordPress 6.4+ and PHP 7.4+.

## Editing content

- **Appearance → Editor** (Site Editor) → edit the Front Page template.
- Text, headings, images, service cards, project cards: normal blocks — click and type, or replace images from the Media Library.
- Header & footer are template parts; a few decorative fragments (hero slideshow, icons, buttons with brand classes) are Custom HTML blocks — editable as HTML.
- Each home section is available under **Patterns → Platfourm** to re-insert or duplicate.

## Project detail modal

Clicking a project card opens the detail modal. Cards are matched to their
modal content by the block's **HTML anchor** (e.g. `genesian-theatre`) —
the titles, descriptions and gallery image counts live in
`assets/js/main.js` (`PROJECTS` map). To add/edit a project's modal
content, edit that map and drop the gallery images into
`assets/img/projects/<slug>-<n>.jpg`.

(A more WordPress-native upgrade — projects as a custom post type with a
Query Loop grid and per-project pages — can replace the modal later.)

## Notes

- The visual system lives in `assets/css/style.css`, shared with the static
  build; patterns reproduce the same class structure so it applies as-is.
- Interactions (sticky header, hero slideshow, scroll reveal, mobile nav,
  modal) live in `assets/js/main.js`.
- Nav links are same-page anchors (`#about`, `#projects`, …) — the site is a
  one-pager; on subpages they are inert.
