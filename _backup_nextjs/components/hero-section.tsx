"use client"

import { useEffect, useState } from "react"
import { Home, Key, FileText } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappSimulacao =
    "https://wa.me/5511986966302?text=Olá!%20Gostaria%20de%20fazer%20uma%20simulação%20de%20financiamento%20imobiliário."

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-luxury-house-exterior-architecture-sunset.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#354e72]/75"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] animate-float-slow opacity-30">
          <Home className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-1/3 right-[15%] animate-float-medium opacity-30">
          <Key className="w-12 h-12 text-[#d25525]" />
        </div>
        <div className="absolute bottom-1/3 left-[20%] animate-float-fast opacity-30">
          <FileText className="w-14 h-14 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            Realize o Sonho da <span className="text-[#d25525]">Casa Própria</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
            Simulação gratuita, transparência total e atendimento humanizado
          </p>

          <div className="flex justify-center">
            <a
              href={whatsappSimulacao}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#d25525] hover:bg-[#b84920] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10">Simulação Online</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}
