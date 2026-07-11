export type SiteConfig = {
  readonly ownerName: string;
  readonly title: string;
  readonly description: string;
  readonly locale: string;
  readonly repositoryUrl: string;
  readonly productionUrl: string;
};

export const site = {
  ownerName: 'Abdul Rasheed',

  /** Provisional public site title — refine after résumé and positioning review. */
  title: 'Abdul Rasheed | Software Engineer',

  /**
   * Provisional public description — derived from the approved positioning
   * statement in PORTFOLIO_BRIEF.md. Not a verified résumé claim.
   */
  description:
    'Full-stack software engineer building AI systems, workflow automation, and scalable business software.',

  locale: 'en',
  repositoryUrl: 'https://github.com/AbdulRasheed222/portfolio',
  productionUrl: 'https://abdulrasheed222.github.io/portfolio/',
} as const satisfies SiteConfig;
