import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fc3e1db0-a40d-4b9f-9a12-d55e5fe68f8e.jpeg"
              alt="Cashy in a Prada bag - Her ride or die in her Birkin"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              I&apos;m Not Here for Cute. I&apos;m Here to Tell My Story.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My mother and I were inseparable for 15.5 years. She taught me to be brave, 
                I taught her how to nurture. We charted jets. I ate Wagyu. I never barked 
                because my presence spoke for itself.
              </p>
              <p>
                My mother had one fear. She knew one day that she&apos;d have to make that decision 
                that most pet owners do. And because she dedicated her life to me, in return, 
                I gave her a gift. I took away her only fear.
              </p>
              <p>
                I was never sick for a day in my life. I was her ride or die in her Birkin. 
                When the time came, we had a great day, and I left peacefully in my sleep.
              </p>
              <p className="text-foreground font-medium">
                Now my spirit and energy stays with my mother, and we would like to pass 
                that gift on. Fur baby lives matter. I set rules. A piece of my soul will 
                carry through to every animal we can help save.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
