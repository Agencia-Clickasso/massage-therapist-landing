import { Phone, MapPin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-rose-200 py-8 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-rose-800 mb-4">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <Phone className="text-rose-500 mr-2" />
            <span className="text-rose-700">(11) 98765-4321</span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-rose-500 mr-2" />
            <span className="text-rose-700">Rua das Flores, 123 - São Paulo, SP</span>
          </div>
          <div className="flex items-center">
            <Mail className="text-rose-500 mr-2" />
            <span className="text-rose-700">jussaro@example.com</span>
          </div>
        </div>
        <div className="mt-8 text-center text-rose-600">
          <p>&copy; 2023 Jussara Ferreira - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}

