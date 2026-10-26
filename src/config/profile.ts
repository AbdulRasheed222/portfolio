import { homepage, publicLocation } from './homepage';

export const profileMailtoSubject = 'Portfolio enquiry — Abdul Rasheed Keramat' as const;

/** Public, sanitized résumé PDF generated from the /resume/ page. */
export const profileResumePdfPath = '/Abdul-Rasheed-Keramat-Resume.pdf' as const;

export const profileContact = {
  email: 'keramat.rasheed222@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/abdul-rasheed-keramat-1b26b3277/',
  github: 'https://github.com/AbdulRasheed222',
  location: 'Istanbul, Türkiye',
  workPreference: publicLocation,
} as const;

export function profileMailtoHref(
  email: string = profileContact.email,
  subject: string = profileMailtoSubject,
): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const profileIdentity = {
  fullName: 'Abdul Rasheed Keramat',
  shortName: 'Abdul Rasheed',
  role: 'Full-stack Software Engineer',
  tagline: 'Software Engineer · Platform Builder',
} as const;

export const profileOpportunityStatement =
  'Available for freelance AI and full-stack projects worldwide, and open to full-time roles in Istanbul, remotely, or with relocation.';

export const profileAbout = {
  introduction: [
    'I am a software engineer who builds products and platforms across full-stack delivery, AI systems, and workflow automation. I work from problem framing through architecture to maintainable implementation.',
    'I am CTO at AkwadX Technologies in Istanbul, where I led the architecture and development of Leen — an AI operating environment built inside AkwadX and now being registered as an independent company. I am in the final semester of a BSc in Software Engineering at Üsküdar University.',
  ],
  builds: [
    {
      title: 'AI platforms and intelligent workflows',
      detail: 'Agent systems, retrieval pipelines, copilots, and governed automation.',
    },
    {
      title: 'Full-stack product software',
      detail: 'Interfaces, APIs, and data layers for SaaS and operations products.',
    },
    {
      title: 'Integration and platform architecture',
      detail: 'Multi-tenant boundaries, API-first backends, and cross-system delivery.',
    },
  ],
  currentWork: [
    'Chief Technology Officer at AkwadX Technologies — system architecture, relational database design, APIs and integrations, secure access control, and deployment for enterprise SaaS platforms and AI systems.',
    'Leen (formerly Muazaf) — the AI operating environment for workflows, agents, and integrations that I led within AkwadX. It is now being registered as a separate company, where I am Co-Founder and CTO. Open for sign-up at leen.so, and still early.',
    'AnswerVera — a live AI support bot for small businesses that answers only from the business’s own documents, with a cited source behind every claim. Built solo, end to end.',
  ],
  approach: [
    'Start with the problem and constraints — not the framework list.',
    'Design boundaries before features: data flow, ownership, and failure modes.',
    'Ship maintainable systems — evidence and contribution clarity matter as much as output.',
  ],
} as const;

type ExperienceEntry = {
  readonly title: string;
  readonly organization: string;
  readonly location: string | null;
  readonly period: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly publicationSlug?: string;
};

export const profileExperience: readonly ExperienceEntry[] = [
  {
    title: 'Chief Technology Officer',
    organization: 'AkwadX Technologies',
    location: 'Istanbul',
    period: 'Mar 2024 – Present',
    summary:
      'Lead technology architecture and delivery for enterprise SaaS platforms and AI systems. Design multi-tenant SaaS architecture and backend services; design and maintain relational databases (PostgreSQL); build REST APIs and system integrations; implement secure data infrastructure, including authentication and access control; manage deployments using Docker, Nginx and CI/CD on VPS/cloud environments.',
    highlights: [
      'Led the architecture and development of Leen (formerly Muazaf), AkwadX’s AI operating platform for agents, durable workflows and system integrations (Next.js, FastAPI, PostgreSQL, Redis, Qdrant, Temporal, Docker). Leen is now being registered as a separate company.',
      'Built the Omnichannel AI Support Platform, an earlier AkwadX product with voice and chat agents and knowledge-backed support across multiple channels.',
    ],
    publicationSlug: 'leen-ai-operating-system',
  },
  {
    title: 'Full Stack Software Developer',
    organization: 'AkwadX Technologies',
    location: 'Istanbul',
    period: 'Mar 2022 – Feb 2024',
    summary:
      'Designed and developed full-stack web applications across fintech, education and hospitality. Built backend services and REST APIs (Node.js/Express, Python FastAPI), designed relational database schemas (PostgreSQL, MySQL), developed React/Next.js front ends, managed code in Git, and deployed applications on VPS environments.',
    highlights: [
      'Delivered a hotel management system covering reservations, room inventory and front-desk guest workflows.',
      'Delivered an inventory management system for SMEs with stock-movement tracking, low-stock threshold alerts and operational reporting.',
      'Built school management SaaS platforms serving educational organisations.',
    ],
  },
];

export const profileExperienceNote =
  'Leen (formerly Muazaf) was developed within AkwadX Technologies and is now being registered as an independent company.';

export const profileEducation = {
  qualification: 'Bachelor of Science in Software Engineering',
  institution: 'Üsküdar University',
  location: 'Istanbul',
  period: '2022 – Expected 2027',
  status: 'Final semester in progress',
} as const;

export const profileSecondaryEducation = {
  qualification: 'High School Diploma',
  institution: 'Hera Private High School',
} as const;

export const profileLanguages = [
  { language: 'Pashto', proficiency: 'Native' },
  { language: 'Dari', proficiency: 'Fluent' },
  { language: 'English', proficiency: 'Professional' },
] as const;

export const profileTechStack = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'FastAPI'] },
  { category: 'Data', items: ['SQL', 'PostgreSQL', 'MySQL', 'Redis', 'Qdrant'] },
  { category: 'Infrastructure', items: ['Docker', 'Nginx', 'VPS deployment', 'CI/CD', 'Git'] },
  {
    category: 'Engineering practice',
    items: ['REST API design', 'Authentication and access control', 'Multi-tenant SaaS architecture'],
  },
  {
    category: 'AI and systems',
    items: ['LLM APIs', 'RAG architecture', 'API integrations', 'System design', 'Temporal workflow engine'],
  },
] as const;

export const profileSelectedWork = [
  {
    title: 'Leen — AI Operating System',
    slug: 'leen-ai-operating-system',
    role: 'Lead architect at AkwadX · Co-Founder and CTO of the spin-out',
    period: '2025 – Present',
    note: 'Developed within AkwadX Technologies; now being registered as an independent company. In active development. Scope, architecture, and contribution are documented in the flagship engineering publication.',
  },
] as const;

export const profileResumeSummary =
  'Software engineer and CTO at AkwadX Technologies with 4+ years building SaaS platforms, AI systems, and full-stack products. Hands-on across relational database design (PostgreSQL, MySQL), REST APIs and system integrations, authentication and access control, and Docker-based deployment. Led the architecture of Leen (formerly Muazaf), an AI operating platform developed within AkwadX and now being registered as an independent company. Final-semester BSc Software Engineering student at Üsküdar University.';

export const profileContactIntro = profileOpportunityStatement;

export const profileCapabilityAreas = homepage.capabilityProof.groups;
