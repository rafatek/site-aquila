"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

const regioes = [
  { nome: "Interlagos", x: 55, y: 35 },
  { nome: "Grajaú", x: 70, y: 65 },
  { nome: "Parelheiros", x: 45, y: 80 },
  { nome: "Campo Limpo", x: 25, y: 40 },
  { nome: "Jurubatuba", x: 40, y: 25 },
  { nome: "Vila das Mercês", x: 60, y: 50 },
]

export function RegioesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="regioes" ref={sectionRef} className="py-20 md:py-32 bg-[#f5f2ef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#354e72] mb-4">
            Regiões <span className="text-[#d25525]">Atendidas</span>
          </h2>
          <p className="text-lg text-[#354e72]/70 max-w-2xl mx-auto">Especialistas na Zona Sul de São Paulo</p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Map Visualization */}
          <div className="relative bg-gradient-to-br from-[#354e72]/10 to-[#354e72]/5 rounded-3xl p-8 md:p-12 border border-[#354e72]/10">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              {/* Stylized Map Background */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Map outline shape */}
                <path
                  d="M20 15 Q35 10 50 12 Q70 8 85 20 Q90 35 88 50 Q92 70 80 85 Q65 95 45 92 Q25 95 15 80 Q8 65 12 45 Q8 30 20 15"
                  fill="none"
                  stroke="#354e72"
                  strokeWidth="0.5"
                  className="opacity-30"
                />
                {/* Internal region divisions */}
                <path
                  d="M30 30 Q45 35 55 28 M25 55 Q40 50 60 58 M35 75 Q50 70 70 78"
                  fill="none"
                  stroke="#354e72"
                  strokeWidth="0.3"
                  className="opacity-20"
                />
              </svg>

              {/* Location Pins */}
              {regioes.map((regiao, index) => (
                <div
                  key={regiao.nome}
                  className="absolute transform -translate-x-1/2 -translate-y-full group cursor-pointer"
                  style={{
                    left: `${regiao.x}%`,
                    top: `${regiao.y}%`,
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className="relative">
                    <MapPin
                      className={`w-8 h-8 md:w-10 md:h-10 text-[#d25525] drop-shadow-lg transition-transform duration-300 group-hover:scale-125 ${
                        isVisible ? "animate-bounce-in" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-3 h-3 bg-[#d25525]/30 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-[#354e72] text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                    {regiao.nome}
                  </div>
                </div>
              ))}
            </div>

            {/* Region List */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {regioes.map((regiao, index) => (
                <div
                  key={regiao.nome}
                  className={`flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  <MapPin className="w-5 h-5 text-[#d25525]" />
                  <span className="font-medium text-[#354e72]">{regiao.nome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
