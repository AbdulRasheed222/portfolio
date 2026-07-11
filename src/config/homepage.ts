export type PublicationStatus =
  | 'IN DEVELOPMENT'
  | 'EVIDENCE GATHERING'
  | 'COMPLETED — NOT LAUNCHED'
  | 'PROVISIONAL';

export type EvidenceLevel = 'VERIFIED' | 'PARTIAL' | 'GATHERING' | 'PROVISIONAL';

export type ArtifactLayout = 'cinematic' | 'flow' | 'stack' | 'ledger';

export type EngineeringPublication = {
  readonly ref: string;
  readonly pub: string;
  readonly title: string;
  readonly summary: string;
  readonly slug: string;
  readonly href: string;
  readonly status: PublicationStatus;
  readonly classification: 'FEATURED' | 'SUPPORTING';
  readonly tier: 'FLAGSHIP' | 'SUPPORTING';
  readonly evidenceLevel: EvidenceLevel;
  readonly version: string;
  readonly readTime?: string;
  readonly layout?: ArtifactLayout;
  readonly chapters?: readonly string[];
  readonly accent?: 'cobalt' | 'indigo' | 'slate' | 'gold';
};

export type EngineeringPrinciple = {
  readonly index: string;
  readonly title: string;
  readonly description: string;
};

const workRegistryHref = '/work/';

function publicationHref(slug: string): string {
  return `/work/${slug}/`;
}

/** Approved public location line — do not imply visa/sponsorship status */
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
    metadata: ['SYS-ARR', 'VER 1.1', 'EOS v1.1'] as const,
  },

  featuredPublication: {
    ref: 'REF-LEEN-001',
    pub: 'PUB-LEEN',
    title: 'Leen — AI Operating System',
    summary:
      'Flagship engineering publication documenting an AI operating environment — primitives for agents, durable workflows, memory, integrations, and governed execution.',
    slug: 'leen-ai-operating-system',
    href: publicationHref('leen-ai-operating-system'),
    status: 'IN DEVELOPMENT',
    classification: 'FEATURED',
    tier: 'FLAGSHIP',
    evidenceLevel: 'GATHERING',
    version: 'VER 0.1',
    readTime: '8 min',
    layout: 'cinematic',
    accent: 'cobalt',
    chapters: [
      'Vision',
      'Copilot V2',
      'Workflow Engine',
      'Agent Runtime',
      'Memory',
      'Apps Platform',
      'Governance',
    ],
  } satisfies EngineeringPublication,

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

  publications: [
    {
      ref: 'REF-OMNI-001',
      pub: 'PUB-OMNI',
      title: 'Omnichannel AI Support Platform',
      summary:
        'Completed support engineering — knowledge base, RAG, Telegram and web channels — that evolved into the Leen platform direction.',
      slug: 'omnichannel-ai-support-platform',
      href: publicationHref('omnichannel-ai-support-platform'),
      status: 'COMPLETED — NOT LAUNCHED',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'GATHERING',
      version: 'VER 1.0',
      readTime: '12 min',
      layout: 'flow',
      accent: 'indigo',
    },
    {
      ref: 'REF-HOTEL-001',
      pub: 'PUB-HOTEL',
      title: 'Hotel Management System',
      summary:
        'Hospitality operations software — reservations, room inventory, and guest workflows for SME properties.',
      slug: 'hotel-management-system',
      href: publicationHref('hotel-management-system'),
      status: 'EVIDENCE GATHERING',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'PROVISIONAL',
      version: 'VER 0.1',
      readTime: '8 min',
      layout: 'stack',
      accent: 'slate',
    },
    {
      ref: 'REF-INV-001',
      pub: 'PUB-INV',
      title: 'Inventory Management System',
      summary:
        'SME stock-integrity platform — movements, alerts, and operational reporting with concurrent update discipline.',
      slug: 'inventory-management-system',
      href: publicationHref('inventory-management-system'),
      status: 'EVIDENCE GATHERING',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'PROVISIONAL',
      version: 'VER 0.1',
      readTime: '8 min',
      layout: 'ledger',
      accent: 'gold',
    },
  ] as const satisfies readonly EngineeringPublication[],

  principles: [
    {
      index: '01',
      title: 'Evidence before claims',
      description:
        'Capabilities are demonstrated through publications, diagrams, and verified contribution — not technology lists.',
    },
    {
      index: '02',
      title: 'Architecture over accumulation',
      description: 'Boundaries, data flows, and tradeoffs outlast framework choices.',
    },
    {
      index: '03',
      title: 'Honest evolution',
      description: 'Completed systems that informed later work are lineage — not failure.',
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
      'Seeking full-stack and AI engineering roles — platform systems, intelligent workflows, and maintainable product software.',
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
