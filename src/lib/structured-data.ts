import { profileContact, profileEducation, profileIdentity } from '../config/profile';
import { site } from '../config/site';
import { canonicalUrl } from './seo';

/**
 * schema.org Person node for Abdul Rasheed Keramat.
 * Every field mirrors information already visible on the public site;
 * nothing here goes beyond the published résumé and contact pages.
 */
function personNode() {
  return {
    '@type': 'Person',
    '@id': `${site.productionUrl}#person`,
    name: profileIdentity.fullName,
    alternateName: profileIdentity.shortName,
    url: site.productionUrl,
    email: `mailto:${profileContact.email}`,
    jobTitle: profileIdentity.role,
    description: site.description,
    sameAs: [profileContact.github, profileContact.linkedIn],
    /*
     * AkwadX Technologies is the registered company; Leen is a platform/project
     * role and is deliberately not encoded as a schema.org Organization —
     * the visible pages describe that role.
     */
    worksFor: { '@type': 'Organization', name: 'AkwadX Technologies' },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: profileEducation.institution,
    },
    homeLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Istanbul',
        addressCountry: 'TR',
      },
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Retrieval-augmented generation (RAG)',
      'LLM integration',
      'Multi-tenant SaaS architecture',
    ],
    knowsLanguage: ['Pashto', 'Dari', 'English'],
  };
}

/** Homepage graph: the site plus its owner. */
export function homeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.productionUrl}#website`,
        name: site.title,
        url: site.productionUrl,
        about: { '@id': `${site.productionUrl}#person` },
      },
      personNode(),
    ],
  };
}

/** Profile-style pages (about, résumé): the page is about the person. */
export function profileStructuredData(logicalPath: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        url: canonicalUrl(logicalPath),
        mainEntity: { '@id': `${site.productionUrl}#person` },
      },
      personNode(),
    ],
  };
}
