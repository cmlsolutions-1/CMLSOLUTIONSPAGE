"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent-foreground">
              Software a la medida para empresas
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Creamos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              soluciones digitales
            </span>{" "}
            que impulsan tu negocio
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            En <strong>CML Solutions</strong> desarrollamos software personalizado con tecnología
            moderna, diseño estratégico y resultados reales para tu empresa.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToQuote}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Solicitar cotización
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="border-border hover:bg-secondary bg-transparent"
            >
              Ver proyectos
            </Button>
          </div>

          {/* Code card */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.7_0.2_270_/_0.15),transparent_70%)]" />
            <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-accent" />
                <span className="text-sm font-mono text-muted-foreground">
                  {"// Software limpio, escalable y seguro"}
                </span>
              </div>
              <pre className="text-left overflow-x-auto">
                <code className="text-sm font-mono text-foreground">
{`const software = await crearSolucion({
  empresa: "CML Solutions",
  idea: tuNegocio,
  tecnologia: "moderna",
  resultado: "crecimiento"
});`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
