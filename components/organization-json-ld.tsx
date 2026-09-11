import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'info@cashyslegacy.org',
  description: SITE_DESCRIPTION,
  logo: `${SITE_URL}/apple-icon.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    addressCountry: 'US',
  },
  sameAs: [
    'https://instagram.com/cash_the_pomeranian',
    'https://x.com/cashyslegacy',
    'https://linkedin.com/company/cashys-legacy',
  ],
}

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}
