# Platfourm — WordPress Block Theme

Block-theme (Full Site Editing) port of the static Platfourm site
(https://tommyclaude.github.io/platfourm2/v3/). The home page ships as editable
Gutenberg blocks, projects are a custom post type, and all imagery is managed in
the Media Library.

## Install

1. Zip this folder (or use the provided `platfourm-theme.zip`).
2. In wp-admin: **Appearance → Themes → Add New Theme → Upload Theme** → choose the zip → **Install** → **Activate**.
3. On activation the theme runs a **one-time setup**: it imports the bundled
   imagery into the Media Library and creates the seven projects. No manual
   import step.

Requires WordPress 6.4+ and PHP 7.4+.

## Editing content

### Projects (Featured Projects grid + detail modal)

- Edit them under the **Projects** menu in wp-admin — each project is a normal
  post with:
  - **Title** — project name (card + modal heading)
  - **Featured image** — the card image
  - **Excerpt** — the short description shown in the modal
  - **Content** — the gallery: add/reorder Image blocks; these appear in the modal
  - **Location** — a field in the sidebar (e.g. “Sydney, NSW”)
  - **Category** — the badge (e.g. “Commercial Fit-out”), from the Project Categories taxonomy
- The home-page grid and the pop-up modal are generated from these posts, so
  adding or editing a project updates the site automatically. Add a new project
  and it appears in the grid.

### Home page (hero, about, services, why, CTA)

- **Appearance → Editor** → Front Page template.
- Text, headings and images are normal blocks — click and type, or use **Replace**
  on an image to pick another from the Media Library.
- The **hero background slides** are Image blocks: click a slide and Replace it.
- A few decorative fragments (icons, brand buttons) are Custom HTML blocks.
- Each section is also available under **Patterns → Platfourm**.

## Images

The one-time setup copies every content image into the **Media Library**, so
they’re managed there rather than in the theme source. The bundled copies under
`assets/img/` remain only as import sources / fallbacks. (The brand logos stay in
the theme as they are identity, not content.)

## How it fits together

- `inc/projects.php` — Project custom post type, Project Categories taxonomy, the
  Location field, and helpers shared by the grid and modal.
- `inc/setup.php` — the one-time Media Library import + project seeding.
- `patterns/projects.php` — dynamic grid generated from the Project posts.
- `functions.php` — enqueues `assets/css/style.css` + `assets/js/main.js`, and
  passes the project data to the modal via `window.PLATFOURM_PROJECTS`.
- `assets/css/style.css` — the visual system, shared with the static build.
- `assets/js/main.js` — sticky header, hero slideshow, scroll reveal, mobile nav,
  and the project modal (populated from the localized project data).

Nav links are same-page anchors (`#about`, `#projects`, …) — the home page is a
one-pager.
