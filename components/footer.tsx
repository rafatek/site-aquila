import { MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#354e72] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-aquila.png"
                alt="Aquila Maresia - Corretora de Imóveis"
                width={140}
                height={70}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/70 mb-4">Realizando sonhos com transparência e atendimento humanizado.</p>
            <p className="text-sm text-white/50">CRECI SP 299970</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Início", "Simulação", "Diferenciais", "Regiões", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-[#d25525] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511986966302"
                className="flex items-center gap-3 text-white/70 hover:text-[#d25525] transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 98696-6302
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Zona Sul de São Paulo</span>
              </div>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-bold text-lg mb-4">Áreas Atendidas</h4>
            <ul className="space-y-2 text-white/70">
              <li>Interlagos</li>
              <li>Grajaú</li>
              <li>Parelheiros</li>
              <li>Campo Limpo</li>
              <li>Jurubatuba</li>
              <li>Vila das Mercês</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#d25525] rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#d25525] rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/10 hover:bg-[#d25525] rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/50 text-sm text-center">
            © {currentYear} Aquila Maresia. Todos os direitos reservados. CRECI SP 299970
          </p>
        </div>
      </div>
    </footer>
  )
}
