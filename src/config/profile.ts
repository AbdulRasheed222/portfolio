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
  'Open to compelling full-stack, platform, backend, and AI engineering opportunities — in Istanbul, remotely, or with relocation.';

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
    'Co-Founder and CTO at Leen (formerly Muazaf) — an AI operating environment for workflows, agents, and integrations. In active development; not presented as commercially launched.',
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
    title: 'Co-Founder and CTO',
    organization: 'Leen (formerly Muazaf)',
    location: null,
    period: '2025 – Present',
    summary:
      'Co-found and architect an AI operating environment for workflows, agents, memory, and integrations. Platform in active development — see the flagship case study for scope and status.',
    publicationSlug: 'leen-ai-operating-system',
  },
  {
    title: 'Full Stack Software Developer',
    organization: 'AkwadX Technologies / Freelance',
    location: null,
    period: '2022 – 2024',
    summary:
      'Full-stack applications across fintech, education, and hospitality — including school management SaaS platforms, inventory systems for SMEs, and hotel management software.',
  },
] as const;

export const profileExperienceNote =
  'The AkwadX Technologies and Leen roles are separate, current professional engagements.';

export const profileEducation = {
  qualification: 'Bachelor of Science in Software Engineering',
  institution: 'Üsküdar University',
  location: 'Istanbul',
  graduationYear: '2026',
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
    role: 'Co-Founder and CTO',
    period: '2025 – Present',
    note: 'In active development. Scope, architecture, and contribution are documented in the flagship engineering publication.',
  },
] as const;

export const profileResumeSummary =
  'Software engineer with experience building SaaS platforms, AI systems, and full-stack products. Currently CTO at AkwadX Technologies and co-founder of Leen (formerly Muazaf), an AI operating environment in active development. Focused on architecture, backend systems, AI integration, and product delivery across fintech, education, and SME operations.';

export const profileContactIntro = profileOpportunityStatement;

export const profileCapabilityAreas = homepage.capabilityProof.groups;
