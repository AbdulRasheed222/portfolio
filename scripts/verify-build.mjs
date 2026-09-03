import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const PRODUCTION_ORIGIN = 'https://abdulrasheed222.github.io/portfolio';

const REQUIRED_ROUTES = [
  'index.html',
  'work/index.html',
  'work/leen-ai-operating-system/index.html',
  'work/omnichannel-ai-support-platform/index.html',
  'work/hotel-management-system/index.html',
  'work/inventory-management-system/index.html',
  'about/index.html',
  'resume/index.html',
  'contact/index.html',
  '404.html',
];

const REQUIRED_ASSETS = [
  'favicon.svg',
  'social-card.png',
  'robots.txt',
  'sitemap-index.xml',
  'Abdul-Rasheed-Keramat-Resume.pdf',
];

const FORBIDDEN_PATTERNS = [
  { name: 'duplicate base path', pattern: /\/portfolio\/portfolio\// },
  { name: 'internal launch status', pattern: /STATUS:\s*LAUNCH READY/i },
  { name: 'framework credit', pattern: /Built with Astro/i },
  { name: 'internal version label', pattern: /VER 1\.1/ },
  { name: 'internal EOS version', pattern: /EOS v1\.1/i },
  { name: 'phone-like number sequence', pattern: /\+\d{1,3}[\s().-]*\d{3}[\s().-]*\d{3}[\s().-]*\d{2}[\s().-]*\d{2}/ },
];

const FORBIDDEN_PATH_FRAGMENTS = [
  'content-sources',
  'Abdul-Rasheed-Keramat-CV.pdf',
];

/** @type {string[]} */
const failures = [];

function fail(message) {
  failures.push(message);
}

function walkFiles(dir) {
  /** @type {string[]} */
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function checkDistExists() {
  if (!existsSync(DIST)) {
    fail('dist/ directory does not exist — run npm run build first');
    return false;
  }
  return true;
}

function checkRequiredRoutes() {
  for (const route of REQUIRED_ROUTES) {
    const fullPath = join(DIST, route);
    if (!existsSync(fullPath)) {
      fail(`missing required route: dist/${route}`);
    }
  }
}

function checkRequiredAssets() {
  for (const asset of REQUIRED_ASSETS) {
    if (!existsSync(join(DIST, asset))) {
      fail(`missing required asset: dist/${asset}`);
    }
  }
}

/**
 * Every page that declares robots noindex must be absent from the sitemap,
 * and every indexable canonical route must be present in it.
 */
function checkSitemapConsistency(allFiles) {
  const sitemapFiles = allFiles.filter((file) => /sitemap.*\.xml$/.test(file));
  const sitemapContent = sitemapFiles.map((file) => readFileSync(file, 'utf8')).join('\n');

  if (sitemapContent.includes('localhost')) {
    fail('sitemap contains a localhost URL');
  }

  for (const file of allFiles.filter((f) => f.endsWith('index.html'))) {
    const rel = relative(DIST, file).replace(/\\/g, '/');
    const route = rel === 'index.html' ? '' : rel.replace(/index\.html$/, '');
    const url = `${PRODUCTION_ORIGIN}/${route}`;
    const content = readFileSync(file, 'utf8');
    const isNoindex = /<meta name="robots" content="noindex/.test(content);

    if (isNoindex && sitemapContent.includes(url)) {
      fail(`noindexed page advertised in sitemap: ${url}`);
    }
    if (!isNoindex && !sitemapContent.includes(url)) {
      fail(`indexable page missing from sitemap: ${url}`);
    }
  }
}

function checkForbiddenPaths(allFiles) {
  for (const file of allFiles) {
    const rel = relative(DIST, file).replace(/\\/g, '/');
    for (const fragment of FORBIDDEN_PATH_FRAGMENTS) {
      if (rel.includes(fragment)) {
        fail(`forbidden path in dist: ${rel}`);
      }
    }
    if (file.endsWith('.pdf') && file.includes('Abdul-Rasheed-Keramat-CV')) {
      fail(`private CV PDF found in dist: ${rel}`);
    }
  }

  if (existsSync(join(DIST, 'content-sources'))) {
    fail('content-sources/ directory exists in dist/');
  }
}

function checkHtmlContent(allFiles) {
  const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));

  for (const file of htmlFiles) {
    const rel = relative(DIST, file).replace(/\\/g, '/');
    const content = readFileSync(file, 'utf8');

    for (const { name, pattern } of FORBIDDEN_PATTERNS) {
      if (pattern.test(content)) {
        fail(`${name} found in dist/${rel}`);
      }
    }

    if (content.includes('rel="canonical"') && !content.includes(`${PRODUCTION_ORIGIN}/`)) {
      fail(`canonical production URL missing or incorrect in dist/${rel}`);
    }
  }
}

function checkPortraitAsset(allFiles) {
  const portrait = allFiles.find(
    (file) =>
      file.includes('_astro') &&
      /abdul-rasheed-keramat/i.test(file) &&
      /\.(webp|png|jpe?g)$/i.test(file),
  );

  if (!portrait) {
    fail('optimized portrait asset not found under dist/_astro/');
    return;
  }

  if (statSync(portrait).size < 100) {
    fail('optimized portrait asset appears too small');
  }
}

console.log('Production build verification\n');

if (!checkDistExists()) {
  console.error(failures.join('\n'));
  process.exit(1);
}

const allFiles = walkFiles(DIST);

checkRequiredRoutes();
checkRequiredAssets();
checkForbiddenPaths(allFiles);
checkHtmlContent(allFiles);
checkPortraitAsset(allFiles);
checkSitemapConsistency(allFiles);

const routeCount = REQUIRED_ROUTES.filter((route) => existsSync(join(DIST, route))).length;

console.log(`PASS: ${routeCount}/${REQUIRED_ROUTES.length} required routes present`);
console.log('PASS: required public assets present');
console.log('PASS: no forbidden paths in dist/');
console.log('PASS: HTML privacy and metadata checks');
console.log('PASS: optimized portrait asset present');
console.log('PASS: sitemap consistent with robots directives');
console.log(`\n${routeCount}/${REQUIRED_ROUTES.length} routes verified in dist/.`);

if (failures.length > 0) {
  console.error('\nBuild verification failed:\n');
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}
