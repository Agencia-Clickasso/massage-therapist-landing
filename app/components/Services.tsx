import { Leaf, Droplet, Home, Heart } from "lucide-react"

const services = [
  { name: "Massagem Relaxante", icon: Heart, description: "Alivia o estresse e promove relaxamento profundo." },
  { name: "Massagem Facial", icon: Leaf, description: "Rejuvenesce a pele e reduz sinais de envelhecimento." },
  { name: "Massagem Terapêutica", icon: Heart, description: "Trata dores musculares e melhora a mobilidade." },
  { name: "Drenagem Linfática", icon: Droplet, description: "Reduz inchaços e melhora a circulação." },
  { name: "Atendimento a Domicílio", icon: Home, description: "Conforto e conveniência no seu lar." },
  { name: "Massagem Modeladora Ortomolecular", icon: Leaf, description: "Combate a celulite e modela o corpo." },
]

const bairros = [
  "Centro Histórico",
  "Cidade Baixa",
  "Bom Fim",
  "Rio Branco",
  "Moinhos de Vento",
  "Floresta",
  "Independência",
  "Farroupilha",
  "Santa Cecília",
  "Santana",
  "Petrópolis",
  "Bela Vista",
]

export default function Services() {
  return (
    <section className="py-16 bg-rose-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-rose-800 mb-8 text-center">Nossos Serviços de Massoterapia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <service.icon className="text-rose-500 mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-rose-700">{service.name}</h3>
              </div>
              <p className="text-rose-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-rose-800 mb-4 text-center">Serviços Adicionais</h3>
          <ul className="list-disc list-inside text-rose-700 max-w-2xl mx-auto">
            <li>Hydra Gloss (técnica de Hidratação Labial)</li>
            <li>Curso Massagem Modeladora Ortomolecular</li>
            <li>Augusa de Medidonde</li>
            <li>Guia de Nutracêuticos para tratamentos corporais</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-rose-800 mb-4 text-center">Bairros Atendidos em Porto Alegre</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {bairros.map((bairro, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded-lg shadow-sm text-center text-rose-700 hover:bg-rose-50 transition-colors"
                >
                  {bairro}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

