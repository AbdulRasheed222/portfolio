import { site } from '../config/site';

/**
 * Build an absolute canonical URL for a logical internal path.
 * `productionUrl` already includes the GitHub Pages base segment.
 */
export function canonicalUrl(logicalPath: string): string {
  const origin = site.productionUrl.replace(/\/$/, '');
  const path = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`;
  const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;

  return `${origin}${normalizedPath}`;
}
