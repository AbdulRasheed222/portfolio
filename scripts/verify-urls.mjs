import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import {
  isExternalUrl,
  joinBaseAndPath,
  withBasePathFromBase,
} from '../src/lib/url-normalize.mjs';

const PORTFOLIO_BASE = '/portfolio';
const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

/** @type {Array<[string, () => void]>} */
const tests = [
  [
    'root path under /portfolio/',
    () => {
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, '/'), '/portfolio/');
    },
  ],
  [
    'directory path under /portfolio/',
    () => {
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, '/work/'), '/portfolio/work/');
    },
  ],
  [
    'relative directory path under /portfolio/',
    () => {
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, 'about/'), '/portfolio/about/');
    },
  ],
  [
    'no duplicate slashes',
    () => {
      const result = withBasePathFromBase('/portfolio/', '//work//');
      assert.equal(result, '/portfolio/work/');
      assert.doesNotMatch(result, /\/{2,}/);
    },
  ],
  [
    'external HTTPS URL remains unchanged',
    () => {
      const external = 'https://github.com/AbdulRasheed222';
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, external), external);
      assert.equal(isExternalUrl(external), true);
    },
  ],
  [
    'mailto URL remains unchanged',
    () => {
      const mailto = 'mailto:hello@example.com';
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, mailto), mailto);
      assert.equal(isExternalUrl(mailto), true);
    },
  ],
  [
    'hash anchor remains unchanged',
    () => {
      const hash = '#main-content';
      assert.equal(withBasePathFromBase(PORTFOLIO_BASE, hash), hash);
      assert.equal(isExternalUrl(hash), true);
    },
  ],
  [
    'root base behavior',
    () => {
      assert.equal(joinBaseAndPath('/', '/'), '/');
      assert.equal(joinBaseAndPath('/', '/work/'), '/work/');
      assert.equal(joinBaseAndPath('/', 'about/'), '/about/');
    },
  ],
  [
    'publication route under /portfolio/',
    () => {
      assert.equal(
        withBasePathFromBase(PORTFOLIO_BASE, '/work/leen-ai-operating-system/'),
        '/portfolio/work/leen-ai-operating-system/',
      );
    },
  ],
  [
    'all publication slugs resolve under base',
    () => {
      const slugs = [
        'leen-ai-operating-system',
        'omnichannel-ai-support-platform',
        'hotel-management-system',
        'inventory-management-system',
      ];

      for (const slug of slugs) {
        const logical = `/work/${slug}/`;
        const resolved = withBasePathFromBase(PORTFOLIO_BASE, logical);
        assert.equal(resolved, `/portfolio${logical}`);
        assert.doesNotMatch(resolved, /\/{2,}/);
      }
    },
  ],
  [
    'core site routes resolve under base',
    () => {
      const routes = ['/', '/work/', '/about/', '/resume/', '/contact/'];

      for (const route of routes) {
        const resolved = withBasePathFromBase(PORTFOLIO_BASE, route);
        assert.match(resolved, /^\/portfolio\//);
        assert.doesNotMatch(resolved, /\/{2,}/);
      }
    },
  ],
  [
    'publication data slugs match filenames',
    () => {
      const publicationsDir = join(ROOT, 'src/content/publications');
      const files = readdirSync(publicationsDir).filter((file) => file.endsWith('.json'));

      for (const file of files) {
        const raw = readFileSync(join(publicationsDir, file), 'utf8');
        const data = JSON.parse(raw);
        const stem = file.replace(/\.json$/, '');
        assert.equal(data.slug, stem, `slug mismatch in ${file}`);
      }
    },
  ],
];

let passed = 0;

for (const [name, run] of tests) {
  run();
  passed += 1;
  console.log(`PASS: ${name}`);
}

console.log(`\n${passed}/${tests.length} URL verification checks passed.`);
