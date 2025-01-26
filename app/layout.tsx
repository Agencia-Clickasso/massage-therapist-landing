import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jussara Ferreira - Massoterapia",
  description: "Serviços de massagem terapêutica, relaxante, e muito mais.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const whatsappNumber = "5551993136933"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma sessão de massoterapia.")

  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
        {children}
        <Link
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center z-50"
          aria-label="Contate-nos via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Contate-nos via WhatsApp</span>
        </Link>
      </body>
    </html>
  )
}

