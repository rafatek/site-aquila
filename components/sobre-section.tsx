"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function SobreSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="sobre" className="py-20 md:py-28 bg-[#f5f2ef]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#d25525]/20 rounded-2xl transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/aquila-profile.png"
                  alt="Aquila Maresia - Especialista em Imóveis"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#354e72] rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="inline-block text-[#d25525] font-semibold text-sm uppercase tracking-wider mb-4">
              Conheça a Especialista
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#354e72] mb-6 text-balance">Sobre Mim</h2>
            <div className="space-y-4 text-lg text-[#354e72]/80 leading-relaxed">
              <p>
                Ajudo famílias da Grande São Paulo a realizarem o sonho da casa própria, superando custos elevados,
                burocracia e inseguranças financeiras.
              </p>
              <p>
                Atuo como especialista em imóveis na Zona Sul de SP, oferecendo um atendimento humanizado e soluções
                personalizadas para cada etapa da compra.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/5511986966302?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d25525] hover:bg-[#b84920] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
