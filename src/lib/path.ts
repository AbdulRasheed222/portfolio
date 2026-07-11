/**
 * Converts an Astro request pathname to a logical site path without the deployment base.
 */
export function getLogicalPath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  let path = pathname;

  if (base && path.startsWith(base)) {
    path = path.slice(base.length) || '/';
  }

  if (path === '/index.html' || path === '') {
    path = '/';
  }

  if (path !== '/' && !path.endsWith('/')) {
    path = `${path}/`;
  }

  return path;
}

/**
 * Returns true when a navigation href matches the current logical path.
 */
export function isCurrentPath(href: string, pathname: string): boolean {
  const logical = getLogicalPath(pathname);
  const normalizedHref = href === '/' ? '/' : href.endsWith('/') ? href : `${href}/`;
  return logical === normalizedHref;
}
