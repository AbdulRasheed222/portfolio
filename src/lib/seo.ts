import { site } from '../config/site';
import { withBasePath } from './url';

/**
 * Build an absolute canonical URL for a logical internal path.
 */
export function canonicalUrl(logicalPath: string): string {
  const base = site.productionUrl.replace(/\/$/, '');
  const path = withBasePath(logicalPath);
  return `${base}${path}`;
}
