# YayCommerce Website Redesign

A minimal-style redesign of [yaycommerce.com](https://yaycommerce.com) — built with Next.js (App Router), Tailwind CSS v4, and shadcn/ui.

**Live demo:** [tommyclaude.github.io/platfourm2](https://tommyclaude.github.io/platfourm2/) — deployed automatically to GitHub Pages via `.github/workflows/deploy-pages.yml` (static export with `output: "export"`, published to the `gh-pages` branch).

## Status

- ✅ Homepage (hero, plugin catalog with search + category filters, why-us, testimonials, bundle CTA, FAQ, footer)
- ⏳ Inner pages (plugin detail, pricing, blog…) — planned

## Tech stack

- **Next.js 16** with App Router and Turbopack
- **Tailwind CSS v4** with CSS-variable design tokens (light + dark palettes defined)
- **shadcn/ui** components (button, card, badge, input, separator, accordion) — vendored under `src/components/ui`
- **Geist** font family, **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/               # Root layout, homepage, global styles/tokens
├── components/
│   ├── ui/            # shadcn/ui primitives
│   ├── logo.tsx       # YayCommerce logo mark + wordmark (SVG)
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── plugin-grid.tsx  # Client component: search + category filter grid
│   └── sections.tsx   # Homepage sections
└── lib/
    ├── plugins.ts     # Plugin catalog data (designed to scale to 100+ entries)
    └── content.ts     # Stats, testimonials, FAQ copy
```

## Scaling the catalog

The plugin grid is data-driven from `src/lib/plugins.ts`. Adding a plugin is one array entry; search and category filters pick it up automatically. When the catalog grows large, the same data shape can back a dedicated `/plugins` index page with pagination.

## Content notes

Plugin names, descriptions, install counts, ratings, and testimonials are sourced from yaycommerce.com, WordPress.org, and public reviews. Numbers that could not be verified are intentionally omitted rather than estimated.
