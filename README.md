# Research Projects — Linzhe Jiang

An independently built Astro project collection at `https://linzhe001.github.io/projects/`. The visual system matches the [academic homepage](https://linzhe001.github.io/) and [research notes](https://linzhe001.github.io/blog/).

Based on [Case](https://github.com/erlandv/case) (MIT). Projects are written in `src/content/projects/*.mdx`, with structured metadata in `src/content.config.ts`. Media live in `public/images/`. The Astro `base` is `/projects` — links and static assets must retain this prefix when published.

Run `npm ci && npm run build` to build to `dist/`. GitHub Actions publishes `dist/` to the project Pages site.
