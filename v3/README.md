# Platfourm — Building & Construction Website (v3, minimal edition)

Static marketing website for **Platfourm**, an Australian building & construction
company (est. 2016) — new builds, renovations and commercial fit-outs for private
and public sectors.

**v3** keeps every section and all content of the previous version, restyled with
a minimal aesthetic inspired by [platfourm.thiswp.io](https://platfourm.thiswp.io/):
white space, hairline dividers, uppercase letter-spaced micro-labels, flat
square imagery, and a three-column footer split by vertical rules.

## Live URL

**https://tommyclaude.github.io/platfourm2/v3/**

Every push to the `v3` branch runs `.github/workflows/deploy.yml`, which
publishes the site into the `v3/` subfolder of the `gh-pages` branch. The
existing site at the branch root (`/platfourm2/`) is left untouched.

All asset paths are relative, so the site works from any base path with no
build step — to serve it at a different URL such as
`https://tommyclaude.github.io/platfourm3/`, copy the contents of the `v3`
branch into a repository named `platfourm3` and enable GitHub Pages there
(project-site URLs always match the repository name).

## Stack

- Pure static HTML / CSS / vanilla JS — no build step required
- Fonts: [Jost](https://fonts.google.com/specimen/Jost) (headings + labels) + [Inter](https://fonts.google.com/specimen/Inter) (body)
- Palette: near-black `#141414`, warm hairline `#e6e3dd`, soft `#f7f5f2`,
  brand blue `#02A3DA` reserved for the logo mark

## Structure

```
index.html            Home page
css/style.css         All styles (responsive, mobile-first breakpoints)
js/main.js            Header, hero slideshow, scroll reveal, mobile nav
assets/logo.svg       Color logo (light backgrounds)
assets/logo-white.svg White logo (dark backgrounds)
assets/favicon.svg    Fan icon favicon
assets/img/           Project photography (extracted from company profile PDF)
```

## Pages

- **Home** — done (hero, stats, who we are, services, featured projects, why us, contact CTA)
- About, Projects, Services, Contact Us — planned

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
