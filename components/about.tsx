import { Users, Target, Eye } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Quiénes Somos</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Somos una empresa de desarrollo de software con años de experiencia en la creación de soluciones
            tecnológicas innovadoras. Nuestro equipo de expertos se dedica a transformar desafíos empresariales en
            oportunidades digitales, entregando productos de alta calidad que superan las expectativas de nuestros
            clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Equipo Experto</h3>
            <p className="text-muted-foreground leading-relaxed">
              Profesionales altamente capacitados en las últimas tecnologías
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary mb-4">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enfoque Cliente</h3>
            <p className="text-muted-foreground leading-relaxed">Tu éxito es nuestra prioridad en cada proyecto</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary mb-4">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
            <p className="text-muted-foreground leading-relaxed">Estándares rigurosos en cada línea de código</p>
          </div>
        </div>
      </div>
    </section>
  )
}
