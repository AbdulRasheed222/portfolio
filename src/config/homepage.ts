export type HomepageProject = {
  readonly title: string;
  readonly summary: string;
  readonly slug: string;
  readonly status: string;
  readonly category: string;
  readonly featured: boolean;
};

export type CapabilityArea = {
  readonly title: string;
  readonly description: string;
};

export const homepage = {
  hero: {
    eyebrow: 'Software Engineer',
    name: 'Abdul Rasheed',
    /** Provisional — from approved positioning statement in PORTFOLIO_BRIEF.md */
    positioning:
      'Full-stack software engineer building AI systems, workflow automation, and scalable business software.',
    supporting:
      'I work across full-stack product engineering, AI systems, workflow automation, integrations, and technical architecture.',
  },

  selectedWork: [
    {
      title: 'Muazaf AI Platform',
      summary:
        'An AI and workflow platform exploring agents, teams, automation, integrations, governance, and product execution.',
      slug: 'muazaf-ai-platform',
      status: 'Case study in preparation',
      category: 'AI & Workflow Platform',
      featured: true,
    },
    {
      title: 'Copilot V2 — AI Solution Architect',
      summary:
        'A business-oriented AI experience designed to understand intent and recommend agents, workflows, teams, or focused actions.',
      slug: 'copilot-v2-ai-solution-architect',
      status: 'Case study in preparation',
      category: 'AI Solution Architecture',
      featured: true,
    },
    {
      title: 'Apps and Integration Platform',
      summary:
        'A platform foundation for OAuth, API credentials, MCP servers, provider abstraction, and runtime integrations.',
      slug: 'apps-and-integration-platform',
      status: 'Case study in preparation',
      category: 'Integration Platform',
      featured: true,
    },
  ] as const satisfies readonly HomepageProject[],

  capabilities: [
    {
      title: 'AI systems and automation',
      description:
        'Agentic workflows, intelligent product features, and automation pipelines that connect business intent to execution.',
    },
    {
      title: 'Full-stack product engineering',
      description:
        'End-to-end product delivery across interfaces, services, data flows, and deployment-ready software.',
    },
    {
      title: 'Backend and platform engineering',
      description:
        'APIs, services, platform reliability, and the systems that keep product features dependable at scale.',
    },
    {
      title: 'Frontend and UX engineering',
      description:
        'Responsive product interfaces, interaction implementation, and clear user-facing experiences.',
    },
    {
      title: 'Integrations and infrastructure',
      description:
        'OAuth, third-party APIs, provider abstraction, and the runtime wiring that connects platforms.',
    },
    {
      title: 'Architecture and technical leadership',
      description:
        'System design, technical planning, governance, and cross-functional delivery under real constraints.',
    },
  ] as const satisfies readonly CapabilityArea[],

  professionalFocus: {
    /** Provisional — refine after role-target confirmation */
    statement:
      'Currently focused on engineering roles where software, AI, automation, and product thinking come together.',
  },

  aboutIntro: {
    summary:
      'I am interested in building systems that connect complex business problems to clear, maintainable software.',
  },

  contactCta: {
    heading: "Let's discuss the work",
    supporting: 'Verified contact details will be added before public launch.',
    primaryLabel: 'View résumé',
    secondaryLabel: 'Contact',
  },
} as const;
