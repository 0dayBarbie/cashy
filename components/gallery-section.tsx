import Image from "next/image"

const photos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c23a7f1d-9b01-41cc-9cc1-080ed45e99ba.jpeg",
    alt: "Cashy in Burberry harness - Those iconic heterochromia eyes"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dcffe40c-b8a9-4e99-893c-9166cd894456.jpeg",
    alt: "Cashy on a private jet - We charted jets"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7483348d-0d21-46b4-8368-40116332f36f.jpeg",
    alt: "Cashy smiling outdoors - Pure joy"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/517c7998-c9b2-4bf2-9949-b5bdffe2ed99.jpeg",
    alt: "Cashy sleeping peacefully - At peace"
  }
]

export function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wider uppercase mb-4 text-sm">
            Memories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A Life Well Lived
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            15.5 years of love, luxury, and loyalty. These moments capture the spirit 
            that now lives on through every animal we help.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
