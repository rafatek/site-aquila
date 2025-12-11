"use client"

import { useEffect, useRef, useState } from "react"
import { Calculator, Home, Wallet, CreditCard, HeadphonesIcon, ShieldCheck } from "lucide-react"

const diferenciais = [
  {
    icon: Calculator,
    title: "Simulação Gratuita",
    description: "Online e presencial sem compromisso",
  },
  {
    icon: Home,
    title: "Minha Casa Minha Vida",
    description: "Especialistas em financiamento social",
  },
  {
    icon: Wallet,
    title: "Use seu FGTS",
    description: "Orientação completa para usar o saldo",
  },
  {
    icon: CreditCard,
    title: "Entrada Parcelada",
    description: "Facilite o início do seu sonho",
  },
  {
    icon: HeadphonesIcon,
    title: "Pós-Venda Transparente",
    description: "Acompanhamento até a entrega das chaves",
  },
  {
    icon: ShieldCheck,
    title: "Sem Pegadinhas",
    description: "Clareza em cada etapa do processo",
  },
]

export function DiferenciaisSection() {
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
    <section id="diferenciais" ref={sectionRef} className="py-20 md:py-32 bg-[#f5f2ef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#354e72] mb-4">
            Por que escolher a <span className="text-[#d25525]">Aquila</span>?
          </h2>
          <p className="text-lg text-[#354e72]/70 max-w-2xl mx-auto">
            Oferecemos uma experiência completa e transparente para você realizar o sonho da casa própria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#354e72]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d25525] group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-[#354e72] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#354e72] mb-3">{item.title}</h3>
              <p className="text-[#354e72]/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
