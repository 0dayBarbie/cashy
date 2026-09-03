"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d05a041-5319-42c5-8ab1-ec7cf7a45fdf.jpeg"
              alt="Cashy's Legacy"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-serif text-lg font-bold text-foreground hidden sm:block">
              Cashy&apos;s Legacy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#story" className="text-muted-foreground hover:text-foreground transition-colors">
              Our Story
            </Link>
            <Link href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
              Mission
            </Link>
            <Link href="#take-action" className="text-muted-foreground hover:text-foreground transition-colors">
              Take Action
            </Link>
            <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
              Need Help?
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="#story" 
                className="text-foreground py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Story
              </Link>
              <Link 
                href="#mission" 
                className="text-foreground py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </Link>
              <Link 
                href="#take-action" 
                className="text-foreground py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Take Action
              </Link>
              <Link 
                href="/help" 
                className="text-foreground py-2 min-h-[44px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Need Help?
              </Link>
              <Button asChild className="bg-primary text-primary-foreground w-full min-h-[44px]">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>Donate</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
