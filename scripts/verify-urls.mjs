import assert from 'node:assert/strict';
import {
  isExternalUrl,
  joinBaseAndPath,
  withBasePathFromBase,
} from '../src/lib/url-normalize.mjs';

const PORTFOLIO_BASE = '/portfolio';

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
];

let passed = 0;

for (const [name, run] of tests) {
  run();
  passed += 1;
  console.log(`PASS: ${name}`);
}

console.log(`\n${passed}/${tests.length} URL verification checks passed.`);
