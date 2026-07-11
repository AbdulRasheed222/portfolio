import {
  isExternalUrl as isExternalUrlCore,
  withBasePathFromBase,
} from './url-normalize.mjs';

/**
 * Returns true when a URL should not be prefixed with the site base path.
 */
export function isExternalUrl(url: string): boolean {
  return isExternalUrlCore(url);
}

/**
 * Prefixes a logical internal path with the configured Astro base URL.
 *
 * @param logicalPath - Internal route such as `/`, `/work/`, or `about/`
 * @returns Base-prefixed path for internal routes; external URLs unchanged
 *
 * @example
 * // When BASE_URL is `/portfolio/`
 * withBasePath('/work/') // => `/portfolio/work/`
 *
 * @example
 * // When BASE_URL is `/`
 * withBasePath('/work/') // => `/work/`
 */
export function withBasePath(logicalPath: string): string {
  return withBasePathFromBase(import.meta.env.BASE_URL, logicalPath);
}
