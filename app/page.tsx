import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SobreSection } from "@/components/sobre-section"
import { DiferenciaisSection } from "@/components/diferenciais-section"
import { RegioesSection } from "@/components/regioes-section"
import { ConfiancaSection } from "@/components/confianca-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2ef]">
      <Header />
      <HeroSection />
      <SobreSection />
      <DiferenciaisSection />
      <RegioesSection />
      <ConfiancaSection />
      <CTASection />
      <Footer />
    </main>
  )
}
