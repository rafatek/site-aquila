"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export function CTASection() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [regiao, setRegiao] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensagem = `Olá!%20Tenho%20interesse%20em%20um%20imóvel.%0A%0A👤%20Nome:%20${encodeURIComponent(nome)}%0A📱%20Telefone:%20${encodeURIComponent(telefone)}%0A📍%20Região:%20${encodeURIComponent(regiao)}`

    window.open(`https://wa.me/5511986966302?text=${mensagem}`, "_blank")
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setNome("")
      setTelefone("")
      setRegiao("")
    }, 3000)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }
    return value
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#d25525] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#354e72] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Comece Sua Simulação <span className="text-[#354e72]">Gratuitamente</span>
          </h2>
          <p className="text-lg text-white/90 mb-10">Preencha o formulário e um especialista entrará em contato</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(formatPhone(e.target.value))}
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <select
                value={regiao}
                onChange={(e) => setRegiao(e.target.value)}
                required
                className="w-full bg-white/20 border border-white/30 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" className="text-[#354e72]">
                  Região de interesse
                </option>
                <option value="Interlagos" className="text-[#354e72]">
                  Interlagos
                </option>
                <option value="Grajaú" className="text-[#354e72]">
                  Grajaú
                </option>
                <option value="Parelheiros" className="text-[#354e72]">
                  Parelheiros
                </option>
                <option value="Campo Limpo" className="text-[#354e72]">
                  Campo Limpo
                </option>
                <option value="Jurubatuba" className="text-[#354e72]">
                  Jurubatuba
                </option>
                <option value="Vila das Mercês" className="text-[#354e72]">
                  Vila das Mercês
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                isSubmitted
                  ? "bg-green-500 text-white"
                  : "bg-[#354e72] hover:bg-[#2a3d5a] text-white hover:scale-105 hover:shadow-xl"
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Enviado com sucesso!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
