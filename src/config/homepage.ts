export type EngineeringPrinciple = {
  readonly index: string;
  readonly title: string;
  readonly description: string;
};

export type ArtifactLayout = 'flow' | 'stack' | 'ledger';

/**
 * Presentation-only metadata for publication cards, keyed by publication slug.
 * All publication content (title, summary, status, role, reading time) comes
 * from the content collection in `src/content/publications/`.
 */
export const publicationPresentation: Record<
  string,
  { readonly pub: string; readonly layout?: ArtifactLayout }
> = {
  'leen-ai-operating-system': { pub: 'PUB-LEEN' },
  'omnichannel-ai-support-platform': { pub: 'PUB-OMNI', layout: 'flow' },
  'hotel-management-system': { pub: 'PUB-HOTEL', layout: 'stack' },
  'inventory-management-system': { pub: 'PUB-INV', layout: 'ledger' },
};

export const publicLocation = 'Istanbul · Remote · Open to relocation' as const;

export const homepage = {
  hero: {
    systemId: 'SYS-ARR',
    eyebrow: '01 — ARRIVAL',
    name: 'Abdul Rasheed Keramat',
    rolePrimary: 'Full-stack Software Engineer',
    roleSecondary: 'building AI platforms, workflow systems, and intelligent products.',
    supporting:
      'I design and ship platform software — from intelligent workflows and agent systems to full-stack products that hold up under real constraints.',
    metadata: [publicLocation] as const,
  },

  capabilityProof: {
    systemIndex: '03 — CAPABILITY PROOF',
    title: 'What gets built',
    groups: [
      {
        title: 'AI Platforms',
        context: 'Agent runtimes, copilots, and intelligent workflow systems',
      },
      {
        title: 'Workflow Systems',
        context: 'Durable automation engines and governed execution pipelines',
      },
      {
        title: 'Integration Architecture',
        context: 'Platform layers, APIs, and cross-system data flows',
      },
      {
        title: 'Full-stack Product Delivery',
        context: 'Interfaces, backends, and maintainable product software',
      },
      {
        title: 'Technical Leadership',
        context: 'Architecture decisions, boundaries, and team-scale delivery',
      },
    ] as const,
  },

  principles: [
    {
      index: '01',
      title: 'Evidence before claims',
      description:
        'Capabilities are demonstrated through publications and explicit contribution boundaries — not technology lists.',
    },
    {
      index: '02',
      title: 'Architecture over accumulation',
      description: 'Boundaries, data flows, and tradeoffs outlast framework choices.',
    },
    {
      index: '03',
      title: 'Honest evolution',
      description: 'Earlier systems that informed later work are lineage — not failure.',
    },
    {
      index: '04',
      title: 'Problem-first delivery',
      description: 'Every publication begins with constraints and thinking — then implementation.',
    },
    {
      index: '05',
      title: 'Contribution clarity',
      description: 'Personal and team scope are explicit in every engineering publication.',
    },
  ] as const satisfies readonly EngineeringPrinciple[],

  currentFocus: {
    systemIndex: '07 — CURRENT FOCUS',
    statusLabel: 'Open to Opportunities',
    locationLabel: publicLocation,
    statement:
      'Open to compelling full-stack, platform, backend, and AI engineering opportunities.',
  },

  operatorProfile: {
    systemIndex: '06 — OPERATOR PROFILE',
    title: 'Abdul Rasheed Keramat',
    role: 'Software Engineer · Platform Builder',
    summary:
      'I build software that connects business problems to maintainable systems — from product interfaces to AI workflows and platform integrations.',
    href: '/about/',
    metadata: [publicLocation, 'BSC SOFTWARE ENGINEERING', 'English • Pashto • Dari'] as const,
  },

  contactCta: {
    systemIndex: '08 — CHANNEL',
    heading: "Let's build what's next",
    supporting:
      'Open to engineering opportunities in Istanbul, remotely, or with relocation flexibility. Reach out directly — I read every message personally.',
    email: 'keramat.rasheed222@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abdul-rasheed-keramat-1b26b3277/',
    github: 'https://github.com/AbdulRasheed222',
    primaryLabel: 'View résumé',
    secondaryLabel: 'Contact page',
    channelMeta: ['EMAIL', 'LINKEDIN', 'GITHUB', publicLocation] as const,
  },
} as const;
