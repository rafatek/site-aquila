import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AQUILA MARESIA | Corretora de Imóveis - Zona Sul SP",
  description:
    "Realize o sonho da casa própria com a AQUILA MARESIA. Simulação gratuita, Minha Casa Minha Vida, FGTS, entrada parcelada. Atendemos Interlagos, Grajaú, Parelheiros e região. CRECI SP 299970.",
  keywords: [
    "imóveis zona sul sp",
    "corretora de imóveis",
    "minha casa minha vida",
    "financiamento imobiliário",
    "FGTS",
    "interlagos",
    "grajaú",
    "parelheiros",
  ],
  authors: [{ name: "AQUILA MARESIA" }],
  openGraph: {
    title: "AQUILA MARESIA | Corretora de Imóveis",
    description: "Realize o sonho da casa própria com simulação gratuita e atendimento humanizado.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport = {
  themeColor: "#354e72",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
