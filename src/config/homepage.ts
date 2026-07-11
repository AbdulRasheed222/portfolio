export type PublicationStatus =
  | 'IN DEVELOPMENT'
  | 'EVIDENCE GATHERING'
  | 'COMPLETED — NOT LAUNCHED'
  | 'PROVISIONAL';

export type EvidenceLevel = 'VERIFIED' | 'PARTIAL' | 'GATHERING' | 'PROVISIONAL';

export type EngineeringDossier = {
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
    systemLabel: 'ARRIVAL SURFACE',
    version: 'VER 1.0',
    eosVersion: 'EOS v1.0',
    eyebrow: '01 — ARRIVAL',
    name: 'Abdul Rasheed',
    positioning:
      'Full-stack software engineer building AI systems, workflow automation, and scalable business software.',
    supporting:
      'I work across full-stack product engineering, AI systems, workflow automation, integrations, and technical architecture.',
    metadata: ['SYS-ARR', 'VER 1.0', 'EOS v1.0'] as const,
  },

  featuredPublication: {
    ref: 'REF-LEEN-001',
    pub: 'PUB-LEEN',
    title: 'Leen — AI Operating System',
    summary:
      'Flagship engineering publication documenting platform architecture — AI operating primitives, workflow execution, agent runtime, integrations, and governance.',
    slug: 'leen-ai-operating-system',
    href: workRegistryHref,
    status: 'IN DEVELOPMENT',
    classification: 'FEATURED',
    tier: 'FLAGSHIP',
    evidenceLevel: 'GATHERING',
    version: 'VER 0.1',
    readTime: '18 min',
  } satisfies EngineeringDossier,

  publications: [
    {
      ref: 'REF-OMNI-001',
      pub: 'PUB-OMNI',
      title: 'Omnichannel AI Support Platform',
      summary:
        'Completed customer-support engineering — knowledge base, RAG, and channel adapters — that informed the evolution toward Leen.',
      slug: 'omnichannel-ai-support-platform',
      href: workRegistryHref,
      status: 'COMPLETED — NOT LAUNCHED',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'GATHERING',
      version: 'VER 1.0',
      readTime: '12 min',
    },
    {
      ref: 'REF-HOTEL-001',
      pub: 'PUB-HOTEL',
      title: 'Hotel Management System',
      summary:
        'Full-stack hospitality operations software — reservations, inventory, and guest workflows for SME hotel operations.',
      slug: 'hotel-management-system',
      href: workRegistryHref,
      status: 'EVIDENCE GATHERING',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'PROVISIONAL',
      version: 'VER 0.1',
      readTime: '8 min',
    },
    {
      ref: 'REF-INV-001',
      pub: 'PUB-INV',
      title: 'Inventory Management System',
      summary:
        'SME inventory and stock-integrity system — product tracking, adjustments, and operational reporting.',
      slug: 'inventory-management-system',
      href: workRegistryHref,
      status: 'EVIDENCE GATHERING',
      classification: 'SUPPORTING',
      tier: 'SUPPORTING',
      evidenceLevel: 'PROVISIONAL',
      version: 'VER 0.1',
      readTime: '8 min',
    },
  ] as const satisfies readonly EngineeringDossier[],

  principles: [
    {
      index: '01',
      title: 'Evidence before claims',
      description:
        'Capabilities are demonstrated through engineering publications, diagrams, and verified contribution — not technology lists.',
    },
    {
      index: '02',
      title: 'Architecture over accumulation',
      description:
        'System boundaries, data flows, and tradeoffs matter more than framework selection.',
    },
    {
      index: '03',
      title: 'Honest evolution',
      description:
        'Completed work that informed later systems is presented as engineering lineage — not failure.',
    },
    {
      index: '04',
      title: 'Problem-first delivery',
      description:
        'Every publication begins with a concrete problem, constraints, and thinking — then implementation.',
    },
    {
      index: '05',
      title: 'Contribution clarity',
      description:
        'Personal scope and team scope are stated explicitly in every engineering publication.',
    },
    {
      index: '06',
      title: 'Calm precision',
      description:
        'Interfaces, motion, and metadata communicate state without noise or spectacle.',
    },
  ] as const satisfies readonly EngineeringPrinciple[],

  currentFocus: {
    systemIndex: '05 — CURRENT FOCUS',
    statement:
      'Open to full-stack and AI engineering roles in Istanbul and remote — building platform systems, intelligent workflows, and maintainable product software.',
    metadata: ['ROLE: FULL-STACK / AI', 'LOC: ISTANBUL · REMOTE'] as const,
  },

  operatorProfile: {
    systemIndex: '06 — OPERATOR PROFILE',
    title: 'Operator profile',
    summary:
      'I build software that connects business problems to maintainable systems — from product interfaces to AI workflows and platform integrations.',
    href: '/about/',
  },

  contactCta: {
    systemIndex: '07 — CHANNEL',
    heading: "Let's discuss the work",
    supporting:
      'For engineering opportunities in Istanbul or remote. Reach out by email or LinkedIn.',
    email: 'keramat.rasheed222@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abdul-rasheed-keramat-1b26b3277/',
    github: 'https://github.com/AbdulRasheed222',
    primaryLabel: 'View résumé',
    secondaryLabel: 'Contact',
  },
} as const;
