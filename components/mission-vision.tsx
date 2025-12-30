import { Rocket, Lightbulb } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent mb-6">
              <Rocket className="w-7 h-7 text-accent-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Desarrollar soluciones de software innovadoras y de alta calidad que impulsen la transformación digital de
              nuestros clientes, ayudándoles a alcanzar sus objetivos empresariales mediante tecnología de vanguardia y
              un servicio excepcional.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent mb-6">
              <Lightbulb className="w-7 h-7 text-accent-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconocidos como líderes en el desarrollo de software, destacando por nuestra capacidad de innovación,
              excelencia técnica y compromiso con el éxito de nuestros clientes, expandiendo nuestra presencia y
              generando un impacto positivo en la industria tecnológica.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
