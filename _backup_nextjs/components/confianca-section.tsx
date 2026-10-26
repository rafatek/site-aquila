"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Award, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const depoimentos = [
  {
    nome: "Maria Silva",
    texto: "A Aquila tornou meu sonho realidade! Atendimento impecável do início ao fim.",
    regiao: "Interlagos",
  },
  {
    nome: "João Santos",
    texto: "Transparência total em todas as etapas. Recomendo de olhos fechados!",
    regiao: "Grajaú",
  },
  {
    nome: "Ana Oliveira",
    texto: "Consegui usar meu FGTS graças à orientação da equipe. Muito obrigada!",
    regiao: "Campo Limpo",
  },
]

export function ConfiancaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentDepoimento, setCurrentDepoimento] = useState(0)
  const [familias, setFamilias] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated counter
  useEffect(() => {
    if (isVisible && familias < 1000) {
      const interval = setInterval(() => {
        setFamilias((prev) => {
          const next = prev + 25
          if (next >= 1000) {
            clearInterval(interval)
            return 1000
          }
          return next
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isVisible, familias])

  const nextDepoimento = () => {
    setCurrentDepoimento((prev) => (prev + 1) % depoimentos.length)
  }

  const prevDepoimento = () => {
    setCurrentDepoimento((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#354e72] mb-4">
            Por que <span className="text-[#d25525]">Confiar</span> na Aquila?
          </h2>
        </div>

        {/* Trust Badges */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* CRECI Badge */}
          <div className="text-center p-8 bg-[#f5f2ef] rounded-2xl">
            <Shield className="w-16 h-16 text-[#354e72] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#354e72] mb-2">CRECI SP 299970</h3>
            <p className="text-[#354e72]/70">Corretora regularizada e autorizada</p>
          </div>

          {/* Counter */}
          <div className="text-center p-8 bg-[#f5f2ef] rounded-2xl">
            <Users className="w-16 h-16 text-[#d25525] mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-[#354e72] mb-2">+{familias.toLocaleString("pt-BR")}</h3>
            <p className="text-[#354e72]/70">Famílias realizadas</p>
          </div>

          {/* Quality Seal */}
          <div className="text-center p-8 bg-[#f5f2ef] rounded-2xl">
            <Award className="w-16 h-16 text-[#354e72] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#354e72] mb-2">Transparência Total</h3>
            <p className="text-[#354e72]/70">Clareza em todas as etapas</p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-[#354e72] rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#d25525] opacity-50" />

            <div className="text-center">
              <p className="text-xl md:text-2xl text-white mb-6 italic">"{depoimentos[currentDepoimento].texto}"</p>
              <p className="text-[#d25525] font-semibold">{depoimentos[currentDepoimento].nome}</p>
              <p className="text-white/60 text-sm">{depoimentos[currentDepoimento].regiao}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevDepoimento}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentDepoimento(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentDepoimento ? "w-6 bg-[#d25525]" : "bg-white/30"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextDepoimento}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
