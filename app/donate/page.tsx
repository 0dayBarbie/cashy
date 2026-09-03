"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, ArrowLeft, Instagram, Linkedin, Mail } from "lucide-react"

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const donationAmounts = [1, 25, 50, 100, 250, 500]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState("")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const displayAmount = customAmount || selectedAmount || 0

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Logo */}
          <div className="text-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0d05a041-5319-42c5-8ab1-ec7cf7a45fdf.jpeg"
              alt="Cashy's Legacy"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 border-2 border-primary"
            />
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Welcome to My Legacy
            </h1>
            <p className="text-muted-foreground">
              Your contribution saves lives
            </p>
          </div>

          {/* Donation Card */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium text-foreground">Choose Your Amount</span>
            </div>

            {/* $1 = 1 Vaccine callout */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-6 text-center">
              <p className="text-primary font-medium">$1 = 1 Vaccine</p>
              <p className="text-sm text-muted-foreground">Every dollar makes a difference</p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-4 px-2 rounded-lg font-semibold transition-all min-h-[56px] text-lg ${
                    selectedAmount === amount
                      ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-card"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label htmlFor="custom-amount" className="block text-sm font-medium text-muted-foreground mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">$</span>
                <input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 rounded-lg bg-input text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-[56px] text-lg"
                />
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 min-h-[56px] text-lg font-bold shadow-lg"
            >
              Donate ${displayAmount || "0"}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              100% of donations go directly to helping animals
            </p>
          </div>

          {/* Tagline */}
          <p className="text-center text-primary font-bold mt-8 text-xl md:text-2xl">
            #DonateOrDie
          </p>
          <p className="text-center text-muted-foreground text-base mt-2">
            Because loyalty without action is worthless.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <Link 
              href="https://instagram.com/cash_the_pomeranian" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </Link>
            <Link 
              href="https://x.com/cashyslegacy" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon className="w-5 h-5 text-foreground" />
            </Link>
            <Link 
              href="https://linkedin.com/company/cashys-legacy" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </Link>
            <Link 
              href="mailto:info@cashyslegacy.org" 
              className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">
            info@cashyslegacy.org &bull; Las Vegas, NV
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            &copy; {new Date().getFullYear()} Cashy&apos;s Legacy. Built on Loyalty. Driven by Legacy.
          </p>
        </div>
      </footer>
    </div>
  )
}
