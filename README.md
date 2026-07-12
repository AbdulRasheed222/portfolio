# Portfolio

Professional software engineering portfolio for Abdul Rasheed.

This project is a static Astro site built for GitHub Pages, presenting evidence-based case studies across full-stack engineering, AI systems, workflow automation, and technical leadership. Public-facing content remains provisional until verified.

## Current status

**Stage 7A — GitHub Pages deployment** configured on `main`. About, Résumé, Contact, Work registry, and homepage are complete. Production URL: `https://abdulrasheed222.github.io/portfolio/` (pending first successful deploy).

## Stack

- Astro 7
- TypeScript (strict)
- Static site generation
- Custom CSS
- npm

## Local setup

```bash
npm install
npm run dev
```

Development server: `http://localhost:4321/portfolio/`

## Available scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm start` | Alias for development server |
| `npm run build` | Build static output to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run verify:urls` | Validate base-path URL utilities and publication routes |
| `npm run verify:build` | Validate production `dist/` routes, privacy, and metadata |
| `npm run astro` | Run Astro CLI |

## Deployment

| Item | Value |
|------|-------|
| Workflow | `.github/workflows/deploy.yml` |
| Trigger | Push to `main` or manual workflow dispatch |
| Production URL | `https://abdulrasheed222.github.io/portfolio/` (pending until first deploy succeeds) |

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) for GitHub Pages setup, verification, and rollback.

## Deployment target

Production URL: `https://abdulrasheed222.github.io/portfolio/`

## Documentation

- [PORTFOLIO_BRIEF.md](./PORTFOLIO_BRIEF.md) — Governing project brief
- [docs/ENGINEERING_OS.md](./docs/ENGINEERING_OS.md) — Brand language constitution
- [docs/VISUAL_IDENTITY_V2.md](./docs/VISUAL_IDENTITY_V2.md) — Experience visual spec (Stage 2D-R implemented)
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — Technical architecture
- [docs/CONTENT_MODEL.md](./docs/CONTENT_MODEL.md) — Content strategy and case-study policy
- [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) — Hosting and deployment plan
- [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) — Tokens, surfaces, motion, components

## Core pages (Stage 3B)

| Route | Purpose |
|-------|---------|
| `/about/` | Professional narrative, portrait, career path, opportunity preferences |
| `/resume/` | Structured web résumé with print support (`window.print()`) |
| `/contact/` | Direct email, LinkedIn, and GitHub channels |

Profile data: `src/config/profile.ts` (verified facts from CV inventory and approved homepage metadata).

Public PDF résumé download is **disabled** until Abdul approves a redacted file. Private CV remains in `content-sources/` (not published).

## Content notice

Title, description, and all case-study material are provisional until Abdul Rasheed verifies accuracy, contribution, and confidentiality clearance.
