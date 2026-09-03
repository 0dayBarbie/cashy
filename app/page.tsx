import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { MissionSection } from "@/components/mission-section"
import { GallerySection } from "@/components/gallery-section"
import { ImpactSection } from "@/components/impact-section"
import { ChoosePathSection } from "@/components/choose-path-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StorySection />
      <MissionSection />
      <GallerySection />
      <ImpactSection />
      <ChoosePathSection />
      <Footer />
    </main>
  )
}
