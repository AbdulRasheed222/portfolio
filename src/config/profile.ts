import { homepage, publicLocation } from './homepage';

/** Public PDF download is disabled until Abdul approves a redacted file. */
export const profilePublicPdfDownload = null;

export const profileMailtoSubject = 'Portfolio enquiry — Abdul Rasheed Keramat' as const;

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
  'I am open to full-stack, platform, backend, and AI engineering opportunities in Istanbul, remotely, or involving relocation.';

export const profileAbout = {
  introduction: [
    'I am a software engineer who builds products and platforms across full-stack delivery, AI systems, and workflow automation. I work from problem framing through architecture to maintainable implementation.',
    'My recent work spans enterprise platform leadership at AkwadX Technologies and co-founding the technical direction behind Leen — an AI operating environment currently in development.',
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
    'Chief Technology Officer at AkwadX Technologies — technology vision, system architecture, and engineering direction for enterprise digital platforms and AI systems.',
    'Co-Founder and Technical Architect for the Leen / Muazaf.ai platform direction — an AI operating environment for workflows, agents, and integrations. In active development; not presented as commercially launched.',
  ],
  approach: [
    'Start with the problem and constraints — not the framework list.',
    'Design boundaries before features: data flow, ownership, and failure modes.',
    'Ship maintainable systems — evidence and contribution clarity matter as much as output.',
  ],
} as const;

export const profileExperience = [
  {
    title: 'Chief Technology Officer',
    organization: 'AkwadX Technologies',
    location: 'Istanbul',
    period: '2024 – Present',
    summary:
      'Technology vision and architecture for enterprise digital platforms and AI systems — scalable SaaS design, backend architecture, engineering coordination, and technical strategy.',
  },
  {
    title: 'Co-Founder and Technical Architect',
    organization: 'Leen / Muazaf.ai platform work',
    location: null,
    period: '2025 – Present',
    summary:
      'Co-found and architect an AI operating environment for workflows, agents, memory, and integrations. Platform in active development — see the flagship case study for scope and status.',
    publicationSlug: 'leen-ai-operating-system',
  },
  {
    title: 'Full Stack Software Developer',
    organization: 'AkwadX Technologies / project and freelance context',
    location: null,
    period: '2022 – 2024',
    summary:
      'Full-stack applications across fintech, education, and hospitality — including school management SaaS, inventory systems, and hotel management software for SMEs.',
  },
] as const;

export const profileExperienceNote =
  'Roles are listed in reverse chronological order. Current positions at AkwadX Technologies and the Leen / Muazaf.ai platform direction are separate engagements.';

export const profileEducation = {
  qualification: 'Bachelor of Science in Software Engineering',
  institution: 'Üsküdar University',
  location: 'Istanbul',
  expectedGraduation: '2026',
} as const;

export const profileLanguages = [
  { language: 'Pashto', proficiency: 'Native' },
  { language: 'Dari', proficiency: 'Fluent' },
  { language: 'English', proficiency: 'Professional' },
] as const;

export const profileTechStack = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'FastAPI'] },
  { category: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'Qdrant'] },
  { category: 'Infrastructure', items: ['Docker', 'Nginx', 'VPS deployment'] },
  {
    category: 'AI and systems',
    items: ['LLM APIs', 'RAG architecture', 'API integrations', 'System design', 'Temporal workflow engine'],
  },
] as const;

export const profileSelectedWork = [
  {
    title: 'Leen — AI Operating System',
    slug: 'leen-ai-operating-system',
    role: 'Co-Founder and Technical Architect',
    period: '2025 – Present',
    note: 'Platform direction in active development. Scope, architecture, and contribution detail are documented in the flagship engineering publication.',
  },
] as const;

export const profileResumeSummary =
  'Software engineer with experience building SaaS platforms, AI systems, and full-stack products. Currently CTO at AkwadX Technologies and co-founder of the Leen platform direction. Focused on architecture, backend systems, AI integration, and product delivery across fintech, education, and SME operations.';

export const profileContactIntro = profileOpportunityStatement;

export const profileCapabilityAreas = homepage.capabilityProof.groups;
