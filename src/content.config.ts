import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const subsectionSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

const sectionSchema = z.object({
  title: z.string(),
  anchor: z.string(),
  paragraphs: z.array(z.string()),
  bullets: z.array(z.string()).optional(),
  subsections: z.array(subsectionSchema).optional(),
});

const figureSchema = z.object({
  reference: z.string(),
  caption: z.string(),
  alt: z.string(),
  evidenceType: z
    .enum(['screenshot', 'architecture-diagram', 'workflow-diagram', 'structural-placeholder'])
    .optional(),
  placeholder: z.boolean().optional(),
});

const decisionSchema = z.object({
  reference: z.string(),
  title: z.string(),
  context: z.string(),
  decision: z.string(),
  tradeoff: z.string(),
  status: z.string().optional(),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/publications' }),
  schema: z.object({
    format: z.enum(['flagship', 'case-study', 'project-brief']),
    title: z.string(),
    slug: z.string(),
    reference: z.string(),
    summary: z.string(),
    status: z.enum([
      'IN DEVELOPMENT',
      'DEVELOPED — NOT LAUNCHED',
      'DEVELOPED 2022 – 2024',
    ]),
    role: z.string(),
    timeframe: z.string().optional(),
    technologies: z.array(z.string()),
    contributionSummary: z.string(),
    maturityNotice: z.string().optional(),
    order: z.number(),
    sections: z.array(sectionSchema),
    figures: z.array(figureSchema).optional(),
    decisions: z.array(decisionSchema).optional(),
    statusNote: z.string().optional(),
    readingTime: z.string().optional(),
    accent: z.enum(['cobalt', 'indigo', 'slate', 'gold']).optional(),
    /**
     * Explicit opt-out from search indexing. Defaults to false so a new
     * publication is indexable unless deliberately excluded.
     */
    noindex: z.boolean().default(false),
    relatedSlugs: z.array(z.string()).optional(),
  }),
});

export const collections = { publications };
