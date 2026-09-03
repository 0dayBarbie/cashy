"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, HandHeart } from "lucide-react"

export function ChoosePathSection() {
  return (
    <section id="take-action" className="py-20 md:py-32 bg-foreground text-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-balance">
            Choose Your Path
          </h2>
          <p className="text-card/70 text-lg max-w-2xl mx-auto">
            We don&apos;t do weak. We command. Whether you&apos;re here to give or here to receive, 
            there&apos;s no judgment—only action.
          </p>
        </div>

        {/* Cashy Image - The Intense Stare */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 md:mb-16">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8af87f29-2e36-4772-b57f-59f5bf175531.jpeg"
            alt="Cashy - Choose your path"
            fill
            className="object-cover rounded-full border-4 border-accent shadow-2xl relative z-10"
          />
        </div>

        {/* The Two Paths */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Donate Path - Gold/Regal */}
          <Link 
            href="/donate"
            className="group relative bg-gradient-to-br from-yellow-900/40 to-yellow-950/60 rounded-2xl p-8 md:p-10 border border-yellow-600/40 hover:border-yellow-500/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-900/20"
          >
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
            
            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
              <Heart className="w-8 h-8 text-yellow-400" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-yellow-100">
              Donate Now
            </h3>
            
            <p className="text-card/70 mb-6 leading-relaxed">
              Even $1 helps. One dollar equals one vaccine. Your contribution funds pet insurance 
              and emergency care for animals in need.
            </p>
            
            <div className="flex items-center gap-2 text-yellow-400 font-semibold">
              <span>Give Support</span>
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </div>
          </Link>

          {/* Help Path - Deep Navy/Forest */}
          <Link 
            href="/help"
            className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900 rounded-2xl p-8 md:p-10 border border-slate-600/50 hover:border-slate-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-800/30"
          >
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-slate-400 animate-pulse" />
            
            <div className="w-16 h-16 rounded-full bg-slate-500/20 flex items-center justify-center mb-6 group-hover:bg-slate-500/30 transition-colors">
              <HandHeart className="w-8 h-8 text-slate-300" />
            </div>
            
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-slate-100">
              Need Help?
            </h3>
            
            <p className="text-card/70 mb-6 leading-relaxed">
              No judgment, just support. If your pet needs care and you&apos;re struggling, 
              reach out. We&apos;re here to help you through it.
            </p>
            
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <span>Request Support</span>
              <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
            </div>
          </Link>
        </div>

        {/* Tagline */}
        <p className="text-center mt-12">
          <span className="text-primary font-bold text-lg">#DonateOrDie</span>
          <span className="text-card/60 text-base"> — because loyalty without action is worthless.</span>
        </p>
      </div>
    </section>
  )
}
