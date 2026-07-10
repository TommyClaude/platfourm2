# Platfourm — Building & Construction Website (v4, construction edition)

Static marketing website for **Platfourm**, an Australian building & construction
company (est. 2016) — new builds, renovations and commercial fit-outs for private
and public sectors.

**v4** restyles `v3` in a bold construction-industry aesthetic while keeping
every section's content and imagery unchanged: dark steel surfaces + safety
yellow `#FFB400`, hazard-tape stripes, blueprint grids on dark plates,
chamfered corners, hard offset shadows, condensed uppercase Oswald headlines,
stencilled index stamps, and click-to-open project detail modals.

## Live URL

**https://tommyclaude.github.io/platfourm2/v4/**

Every push to the `v4` branch runs `.github/workflows/deploy.yml`, which
publishes the site into the `v4/` subfolder of the `gh-pages` branch. The
root site (`/platfourm2/`) and `/platfourm2/v3/` are left untouched.

All asset paths are relative, so the site works from any base path with no
build step.

## Stack

- Pure static HTML / CSS / vanilla JS — no build step required
- Fonts: [Oswald](https://fonts.google.com/specimen/Oswald) (headings + labels) + [Inter](https://fonts.google.com/specimen/Inter) (body)
- Palette: steel `#15181d` / `#1b1f25`, safety yellow `#FFB400`, concrete
  `#f1efe9`, brand blue reserved for the logo mark

## Structure

```
index.html            Home page
css/style.css         All styles (responsive, mobile-first breakpoints)
js/main.js            Header, hero slideshow, scroll reveal, mobile nav
assets/img/platfourm-horizontal.png           Horizontal lock-up, dark text (scrolled header)
assets/img/platfourm-horizontal-white.png     Horizontal lock-up, white text (header over hero)
assets/img/platfourm-combination-vertical.png Vertical lock-up (footer)
assets/favicon.png    Fan mark favicon (cropped from the vertical lock-up)
assets/logo.svg       Legacy SVG logo (unused)
assets/logo-white.svg Legacy SVG logo (unused)
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
