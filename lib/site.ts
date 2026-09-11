import type { Metadata } from 'next'

export const SITE_URL = 'https://cashyslegacy.org'
export const SITE_NAME = "Cashy's Legacy"

export const SITE_DESCRIPTION =
  "A Las Vegas nonprofit funding pet insurance and veterinary care. Cashy's Legacy helps save animals and connect pet owners with the care they need. Fur baby lives matter."

export const OG_IMAGE = {
  url: '/images/hero-dog.jpg',
  width: 1024,
  height: 1024,
  alt: "Cashy, the Pomeranian who inspired Cashy's Legacy",
} as const

const ogImages = [
  {
    url: OG_IMAGE.url,
    width: OG_IMAGE.width,
    height: OG_IMAGE.height,
    alt: OG_IMAGE.alt,
  },
]

/** Repeat OG/Twitter image fields: Next.js replaces those objects per route. */
export function socialMetadata({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
