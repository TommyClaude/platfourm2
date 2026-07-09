# Platfourm — Building & Construction Website

Static marketing website for **Platfourm**, an Australian building & construction
company (est. 2016) — new builds, renovations and commercial fit-outs for private
and public sectors.

## Live demo

Deployed automatically to GitHub Pages on every push:
**https://tommyclaude.github.io/platfourm2/**

## Stack

- Pure static HTML / CSS / vanilla JS — no build step required
- Fonts: [Jost](https://fonts.google.com/specimen/Jost) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body)
- Brand colors extracted from the logo: `#02A3DA` (light blue), `#286AA6` (dark blue), `#333333` (charcoal)
- Logos recreated as SVG (color + white tone) from the original brand asset

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

- **Home** — done (hero, who we are, services, featured projects, why us, contact CTA)
- About, Projects, Services, Contact Us — planned

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
