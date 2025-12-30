import { Lightbulb, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y definimos objetivos claros",
    step: "01",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Creamos prototipos interactivos y experiencias intuitivas",
    step: "02",
  },
  {
    icon: Code2,
    title: "Desarrollo",
    description: "Construimos tu solución con código limpio y escalable",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description: "Desplegamos y monitoreamos para garantizar el éxito",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Proceso optimizado para resultados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Metodología ágil que garantiza entregas rápidas y de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all group">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-xl flex items-center justify-center font-bold text-lg text-accent-foreground">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
