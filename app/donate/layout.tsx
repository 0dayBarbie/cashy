import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate — $1 Funds 1 Vaccine',
  description:
    "Donate to Cashy's Legacy. Every $1 funds 1 vaccine, and 100% of donations go directly to helping animals. Support a Las Vegas pet charity built on loyalty.",
  alternates: {
    canonical: '/donate',
  },
  openGraph: {
    title: "Donate to Cashy's Legacy | $1 = 1 Vaccine",
    description:
      'Every $1 funds 1 vaccine. 100% of donations go directly to helping animals.',
    url: '/donate',
  },
  twitter: {
    title: "Donate to Cashy's Legacy | $1 = 1 Vaccine",
    description:
      'Every $1 funds 1 vaccine. 100% of donations go directly to helping animals.',
  },
}

export default function DonateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
