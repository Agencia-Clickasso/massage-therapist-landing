import { Phone, MapPin, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="py-16 bg-rose-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-rose-800 mb-8 text-center">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Phone className="text-rose-500 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Telefone</h3>
            <p className="text-rose-600">(51) 99313-6933</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="text-rose-500 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-rose-700 mb-2">Endereços</h3>
            <p className="text-rose-600">
              Passagem Brasíliano Índio de Moraes-Santiago, 460 - Passo d'Areia
              <br />
              Porto Alegre - RS, 91030-000
            </p>
            <p className="text-rose-600 mt-2">
              R. Dona Sebastiana, 459 - São João
              <br />
              Porto Alegre - RS, 91020-010
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="text-rose-500 mb-4 h-8 w-8" />
            <h3 className="text-xl font-semibold text-rose-700 mb-2">E-mail</h3>
            <p className="text-rose-600">jussaraferreira272@gmail.com</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-rose-700 mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/jussara.massoterapeuta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-500 hover:text-rose-600 transition-colors"
              aria-label="Siga-nos no Instagram"
            >
              <Instagram className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center text-rose-600">
          <p>&copy; {new Date().getFullYear()} Jussara Ferreira - Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  )
}

