import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      <Hero />
      <section id="sobre">
        <About />
      </section>
      <section id="servicos">
        <Services />
      </section>
      <section id="contato">
        <Contact />
      </section>
    </main>
  )
}

