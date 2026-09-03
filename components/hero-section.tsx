import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dcffe40c-b8a9-4e99-893c-9166cd894456.jpeg"
          alt="Cashy on a private jet - The beloved Pomeranian who inspired this legacy"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-card font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
          A Nonprofit Born from a Lifetime of Unconditional Love and Loyalty
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-card mb-6 text-balance">
          Cashy&apos;s Legacy
        </h1>
        <p className="text-xl md:text-2xl text-card/90 mb-4 font-serif italic">
          Built on Loyalty. Driven by Legacy.
        </p>
        <p className="text-lg md:text-xl text-card/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          We are here to make impacts and strong connections. We don&apos;t do weak. We command.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-h-[48px] px-8 text-lg">
            <Link href="#donate">Donate Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-card/10 border-card text-card hover:bg-card/20 min-h-[48px] px-8 text-lg">
            <Link href="#story">Read Our Story</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
