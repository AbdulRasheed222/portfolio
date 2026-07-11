# Font Assets

Self-hosted WOFF2 files for the portfolio design system.

## Source Sans 3

| File | Weight | Source |
|------|--------|--------|
| `source-sans-3-latin-400-normal.woff2` | 400 (Regular) | [Fontsource CDN](https://cdn.jsdelivr.net/fontsource/fonts/source-sans-3@5.2.5/) — derived from [Adobe Source Sans 3](https://github.com/adobe-fonts/source-sans) |
| `source-sans-3-latin-600-normal.woff2` | 600 (Semibold) | Same as above |

**License:** [SIL Open Font License 1.1](https://openfontlicense.org/)

## IBM Plex Mono

| File | Weight | Source |
|------|--------|--------|
| `ibm-plex-mono-latin-400-normal.woff2` | 400 (Regular) | [Fontsource CDN](https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-mono@5.2.5/) — derived from [IBM Plex](https://github.com/IBM/plex) |

**License:** [SIL Open Font License 1.1](https://openfontlicense.org/)

## Subset and format

- **Format:** WOFF2 only
- **Subset:** Latin (`latin-400-normal`, `latin-600-normal`)
- **Excluded:** Italic, bold (700), medium (500), and non-Latin subsets to minimize payload

## Approximate payload

~46 KB total (three files combined).

## Loading strategy

- `@font-face` declarations in `src/styles/global.css`
- `font-display: swap`
- System font fallbacks in `--font-sans` and `--font-mono` tokens
