import { getCollection, type CollectionEntry } from 'astro:content';

export type PublicationEntry = CollectionEntry<'publications'>;
export type PublicationFormat = PublicationEntry['data']['format'];

export const WORK_REGISTRY_PATH = '/work/' as const;

export function publicationPath(slug: string): string {
  return `/work/${slug}/`;
}

export async function getPublications(): Promise<PublicationEntry[]> {
  const entries = await getCollection('publications');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublicationBySlug(slug: string): Promise<PublicationEntry | undefined> {
  const publications = await getPublications();
  return publications.find((entry) => entry.data.slug === slug);
}

export function getAdjacentPublications(
  publications: PublicationEntry[],
  currentSlug: string,
): { previous?: PublicationEntry; next?: PublicationEntry } {
  const index = publications.findIndex((entry) => entry.data.slug === currentSlug);
  if (index === -1) return {};

  return {
    previous: index > 0 ? publications[index - 1] : undefined,
    next: index < publications.length - 1 ? publications[index + 1] : undefined,
  };
}

export function getFlagshipPublication(
  publications: PublicationEntry[],
): PublicationEntry | undefined {
  return publications.find((entry) => entry.data.format === 'flagship');
}

export function getSupportingPublications(
  publications: PublicationEntry[],
): PublicationEntry[] {
  return publications.filter((entry) => entry.data.format !== 'flagship');
}

export function formatEvidenceLevel(level: PublicationEntry['data']['evidenceLevel']): string {
  return level.toUpperCase();
}

export function formatLabel(format: PublicationFormat): string {
  const labels: Record<PublicationFormat, string> = {
    flagship: 'Flagship case study',
    'case-study': 'Case study',
    'project-brief': 'Project brief',
  };
  return labels[format];
}
