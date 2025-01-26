import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-karolina-grabowska-6629560.jpg-x2kh8pFn8jVLDJ4x1Dcrfs40VRB3oX.jpeg"
        alt="Professional massage therapy session"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-rose-900/40 backdrop-blur-[2px]"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Jussara Ferreira</h1>
        <p className="text-xl md:text-2xl drop-shadow-lg">Massoterapia</p>
      </div>
    </section>
  )
}

