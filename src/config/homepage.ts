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

export const homepage = {
  hero: {
    systemId: 'SYS-ARR',
    eyebrow: '01 — ARRIVAL',
    name: 'Abdul Rasheed',
    positioning:
      'Full-stack software engineer building AI systems, workflow automation, and scalable business software.',
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
    href: workRegistryHref,
    status: 'IN DEVELOPMENT',
    classification: 'FEATURED',
    tier: 'FLAGSHIP',
    evidenceLevel: 'GATHERING',
    version: 'VER 0.1',
    readTime: '18 min',
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
    domains: [
      'AI systems & agent platforms',
      'Workflow & automation engines',
      'Full-stack product delivery',
      'Integration & platform layers',
      'Architecture & technical leadership',
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
      href: workRegistryHref,
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
      href: workRegistryHref,
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
      href: workRegistryHref,
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
    statement:
      'Open to full-stack and AI engineering roles in Istanbul and remote — platform systems, intelligent workflows, and maintainable product software.',
    metadata: ['ROLE: FULL-STACK / AI', 'LOC: ISTANBUL · REMOTE'] as const,
  },

  operatorProfile: {
    systemIndex: '06 — OPERATOR PROFILE',
    title: 'Abdul Rasheed Keramat',
    role: 'Software Engineer · Platform Builder',
    summary:
      'I build software that connects business problems to maintainable systems — from product interfaces to AI workflows and platform integrations.',
    href: '/about/',
    metadata: ['ISTANBUL', 'BSC SOFTWARE ENGINEERING', 'EN · PS · DR'] as const,
  },

  contactCta: {
    systemIndex: '08 — CHANNEL',
    heading: "Let's build what's next",
    supporting:
      'For engineering opportunities in Istanbul or remote. Reach out directly — responses are read personally.',
    email: 'keramat.rasheed222@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abdul-rasheed-keramat-1b26b3277/',
    github: 'https://github.com/AbdulRasheed222',
    primaryLabel: 'View résumé',
    secondaryLabel: 'Contact page',
  },
} as const;
