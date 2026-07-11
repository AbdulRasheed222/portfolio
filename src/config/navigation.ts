export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

/**
 * Approved V1 primary navigation model.
 * `href` values are logical site paths without the deployment base prefix.
 */
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Résumé', href: '/resume/' },
  { label: 'Contact', href: '/contact/' },
] as const satisfies readonly NavigationItem[];
