/**
 * Pure URL normalization utilities shared by Astro runtime code and
 * `scripts/verify-urls.mjs`.
 *
 * This module is environment-independent and does not read `import.meta.env`.
 * Astro-facing wrappers in `url.ts` supply the runtime base URL.
 */

/**
 * @param {string} baseUrl
 * @returns {string}
 */
export function normalizeBaseUrl(baseUrl) {
  if (!baseUrl || baseUrl === '/') {
    return '/';
  }

  let base = baseUrl.startsWith('/') ? baseUrl : `/${baseUrl}`;

  if (!base.endsWith('/')) {
    base = `${base}/`;
  }

  return base.replace(/\/{2,}/g, '/');
}

/**
 * @param {string} path
 * @returns {string}
 */
export function normalizeLogicalPath(path) {
  if (!path || path === '/') {
    return '/';
  }

  const normalized = (path.startsWith('/') ? path : `/${path}`).replace(/\/{2,}/g, '/');

  return normalized;
}

/**
 * @param {string} url
 * @returns {boolean}
 */
export function isExternalUrl(url) {
  const trimmed = url.trim();

  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:')
  ) {
    return true;
  }

  return /^https?:\/\//i.test(trimmed);
}

/**
 * @param {string} baseUrl
 * @param {string} logicalPath
 * @returns {string}
 */
export function joinBaseAndPath(baseUrl, logicalPath) {
  const base = normalizeBaseUrl(baseUrl);
  const path = normalizeLogicalPath(logicalPath);

  if (base === '/') {
    return path;
  }

  if (path === '/') {
    return base;
  }

  const pathWithoutLeadingSlash = path.replace(/^\/+/, '');
  const joined = `${base}${pathWithoutLeadingSlash}`.replace(/\/{2,}/g, '/');

  return joined;
}

/**
 * @param {string} baseUrl
 * @param {string} logicalPath
 * @returns {string}
 */
export function withBasePathFromBase(baseUrl, logicalPath) {
  if (isExternalUrl(logicalPath)) {
    return logicalPath;
  }

  const base = normalizeBaseUrl(baseUrl);
  const path = normalizeLogicalPath(logicalPath);

  if (base !== '/') {
    const basePrefix = base.replace(/\/$/, '');

    if (path === basePrefix || path === base || path.startsWith(`${basePrefix}/`)) {
      return path.endsWith('/') ? path : `${path}/`;
    }
  }

  return joinBaseAndPath(baseUrl, logicalPath);
}
