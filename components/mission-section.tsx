import { Heart, Shield, Users, PawPrint } from "lucide-react"

const missions = [
  {
    icon: Shield,
    title: "Fund Pet Insurance",
    description: "We help pet owners access quality healthcare for their fur babies, ensuring no pet goes without proper medical care."
  },
  {
    icon: Heart,
    title: "Save Lives",
    description: "Every donation helps rescue animals in need, giving them a second chance at life and finding their forever homes."
  },
  {
    icon: Users,
    title: "Build Community",
    description: "We connect pet lovers, advocates, and supporters to create a powerful network of compassion and action."
  },
  {
    icon: PawPrint,
    title: "Honor Legacies",
    description: "We carry forward the spirit of beloved pets who have passed, ensuring their love continues to make an impact."
  }
]

export function MissionSection() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Making Impacts. Building Connections.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Cashy&apos;s Legacy is dedicated to ensuring every pet receives the love, care, 
            and protection they deserve. Because loyalty without action is worthless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <mission.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {mission.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
