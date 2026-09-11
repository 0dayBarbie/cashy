import type { Metadata } from 'next'
import { socialMetadata } from '@/lib/site'

const title = "Request Pet Assistance | Cashy's Legacy"
const description =
  'Request non-emergency help with veterinary care and pet insurance. Life-threatening emergencies should go to the nearest vet immediately.'

export const metadata: Metadata = {
  title: 'Request Pet Assistance',
  description:
    "Request non-emergency pet assistance from Cashy's Legacy in Las Vegas. We help with veterinary care and pet insurance. If your pet is in a life-threatening emergency, go to the nearest vet now.",
  alternates: {
    canonical: '/help',
  },
  ...socialMetadata({
    title,
    description,
    url: '/help',
  }),
}

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
