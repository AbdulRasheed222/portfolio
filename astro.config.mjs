// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Pages excluded from the sitemap because they are deliberately noindexed
 * (see the matching `noindex` flag in src/content/publications/).
 * verify-build cross-checks that every noindexed page is absent from the
 * sitemap, so this list cannot silently drift out of sync.
 */
const NOINDEXED_PAGES = [];

// https://astro.build/config
export default defineConfig({
  site: 'https://abdulrasheed222.github.io',
  base: '/portfolio',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !NOINDEXED_PAGES.includes(page),
    }),
  ],
});
