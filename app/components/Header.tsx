"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-rose-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-rose-800">
            Jussara Ferreira
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-rose-700 hover:text-rose-900">
              Início
            </Link>
            <Link href="#sobre" className="text-rose-700 hover:text-rose-900">
              Sobre
            </Link>
            <Link href="#servicos" className="text-rose-700 hover:text-rose-900">
              Serviços
            </Link>
            <Link href="#contato" className="text-rose-700 hover:text-rose-900">
              Contato
            </Link>
          </nav>
          <button className="md:hidden text-rose-700 hover:text-rose-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="text-rose-700 hover:text-rose-900">
              Início
            </Link>
            <Link href="#sobre" className="text-rose-700 hover:text-rose-900">
              Sobre
            </Link>
            <Link href="#servicos" className="text-rose-700 hover:text-rose-900">
              Serviços
            </Link>
            <Link href="#contato" className="text-rose-700 hover:text-rose-900">
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

