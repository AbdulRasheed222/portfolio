export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

/**
 * Primary site navigation.
 * `href` values are logical site paths without the deployment base prefix.
 */
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Résumé', href: '/resume/' },
  { label: 'Contact', href: '/contact/' },
] as const satisfies readonly NavigationItem[];
