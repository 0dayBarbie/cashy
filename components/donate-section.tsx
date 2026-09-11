"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const donationAmounts = [25, 50, 100, 250, 500]

export function DonateSection() {
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
    <section id="donate" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
          <Heart className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Welcome to My Legacy
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          My mother doesn&apos;t need a salary from this. She needs my soul to live on 
          through your fur kids. This page? It&apos;s the start of a revolution.
        </p>
        <p className="text-accent font-medium mb-12">
          #DonateOrDie — because loyalty without action is worthless.
        </p>

        {/* Donation Options */}
        <div className="bg-primary-foreground/10 rounded-xl p-6 md:p-8 max-w-xl mx-auto">
          <p className="text-primary-foreground/80 mb-6">
            Choose your contribution amount
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                className={`py-3 px-2 rounded-lg font-medium transition-all min-h-[48px] ${
                  selectedAmount === amount
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30"
                }`}
              >
                ${amount}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/60">$</span>
              <input
                id="custom-amount"
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-lg bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 border border-primary-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 min-h-[48px] text-base"
              />
            </div>
          </div>

          <Button 
            size="lg" 
            className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-h-[52px] text-lg font-semibold"
          >
            Donate ${displayAmount || "0"}
          </Button>

          <p className="text-sm text-primary-foreground/60 mt-4">
            100% of donations go directly to helping animals
          </p>
        </div>
      </div>
    </section>
  )
}
