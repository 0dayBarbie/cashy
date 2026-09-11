import Image from "next/image"

const stats = [
  { value: "2,500+", label: "Real Connections Built" },
  { value: "15.5", label: "Years of Loyalty" },
  { value: "100%", label: "Heart & Soul" },
  { value: "0", label: "Days We Do Weak" }
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">
              Our Impact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              We Built 2,500 Real Ones Before You Knew What Influencer Meant
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              This isn&apos;t about followers or likes. It&apos;s about real impact, real connections, 
              and real change. Every animal we help, every pet insurance policy we fund, 
              carries a piece of Cashy&apos;s fierce spirit.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary rounded-lg">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3611ca4d-f55e-4345-991a-40fe98f6e765.jpeg"
              alt="Cashy sitting happy with Burberry bandana"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
