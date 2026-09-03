import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react"

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d05a041-5319-42c5-8ab1-ec7cf7a45fdf.jpeg"
                alt="Cashy's Legacy"
                width={48}
                height={48}
                className="rounded-full"
              />
              <h3 className="font-serif text-2xl font-bold">
                Cashy&apos;s Legacy
              </h3>
            </div>
            <p className="text-card/70 leading-relaxed mb-4">
              Built on Loyalty. Driven by Legacy. We are here to make impacts 
              and strong connections. Respect the hierarchy.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://instagram.com/cash_the_pomeranian" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://x.com/cashyslegacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="https://linkedin.com/company/cashys-legacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="mailto:info@cashyslegacy.org" 
                className="w-11 h-11 rounded-full bg-card/10 flex items-center justify-center hover:bg-card/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#story" className="text-card/70 hover:text-card transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-card/70 hover:text-card transition-colors">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-card/70 hover:text-card transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-card/70 hover:text-card transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-card/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Las Vegas, NV</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-card/70" />
                <Link 
                  href="mailto:info@cashyslegacy.org"
                  className="text-accent hover:underline"
                >
                  info@cashyslegacy.org
                </Link>
              </div>
            </div>
            <p className="text-card/70 mt-4 leading-relaxed text-sm">
              Have questions or want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        {/* #DonateOrDie Statement */}
        <div className="border-t border-card/20 pt-10 pb-6 text-center">
          <p className="text-2xl md:text-3xl font-bold text-primary tracking-wide mb-2">
            #DonateOrDie
          </p>
          <p className="text-card/70 text-base md:text-lg">
            Because loyalty without action is worthless.
          </p>
        </div>

        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/60">
          <p>
            &copy; {new Date().getFullYear()} Cashy&apos;s Legacy. All rights reserved.
          </p>
          <p>
            A 501(c)(3) Nonprofit Organization
          </p>
        </div>
      </div>
    </footer>
  )
}
