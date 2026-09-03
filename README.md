# Abdul Rasheed — Portfolio

Source for my software engineering portfolio, live at **[abdulrasheed222.github.io/portfolio](https://abdulrasheed222.github.io/portfolio/)**.

The site presents selected work as engineering publications — a flagship case study of Leen (formerly Muazaf), the AI operating environment I co-founded, an earlier AI support-platform case study, and two concise project briefs — alongside an about page, a print-ready web résumé with a downloadable PDF, and direct contact channels.

## Stack

- [Astro 7](https://astro.build/) — fully static output, no client framework
- TypeScript (strict)
- Hand-written CSS — design tokens plus CSS Modules, no CSS frameworks
- Self-hosted subset fonts (Source Sans 3, IBM Plex Mono)
- Content modeled as an Astro content collection (`src/content/publications/`)

## Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/portfolio/` (the site is served under the `/portfolio` base path).

## Build and verification

```bash
npm run build         # static build to dist/
npm run verify:urls   # URL/base-path helper checks
npm run verify:build  # route, privacy, and metadata checks on dist/
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site, runs the verification scripts, and deploys to GitHub Pages.

---

© Abdul Rasheed. Site content and design are not licensed for reuse.
