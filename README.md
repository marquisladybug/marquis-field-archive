# Marquis Ladybug Field Archive

Static Astro photo archive for Marquis Ladybug / てんとうむし侯爵.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

In a restricted Windows shell, use:

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'; npm.cmd run dev
```

## Build

```bash
npm run build
```

The site is static-only. Photo records live in `src/content/photos/`, and local image assets live in `src/assets/photos/`.

## Photo Content

Each photo is a Markdown file with this frontmatter:

```yaml
title: "Maintenance Procession"
slug: "maintenance-procession"
series: "Urban Structure Study"
date: "2026-01-12"
location: "Shinjuku, Tokyo"
image: "placeholder.svg"
instagram: "https://www.instagram.com/..."
featured: true
order: 10
zine_candidate: true
```

Replace `image` with a file name from `src/assets/photos/`, such as `maintenance-procession.jpg`. Raster images are rendered through Astro image components where possible. SVG placeholders are rendered directly.

## GitHub Pages

Deployment is prepared in `.github/workflows/deploy.yml`.

This repository is configured as a GitHub Pages project page:

```js
site: "https://marquisladybug.github.io"
base: "/marquis-field-archive"
```

Planetary Runtime is intentionally separate from this archive. The Runtime page links to `https://marquisladybug.github.io/marquis-ladybug-earth/index.html`.
