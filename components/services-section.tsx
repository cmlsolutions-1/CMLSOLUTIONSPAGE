// components/services-section.tsx

import { Code, Smartphone, Cloud, Database, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsivas con las últimas tecnologías.",
    features: ["React & Next.js", "APIs REST", "Tiempo real"],
  },
  {
    icon: Smartphone,
    title: "Apps Móviles",
    description: "Aplicaciones nativas e híbridas para iOS y Android.",
    features: ["React Native", "Flutter", "Progressive Web Apps"],
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Optimización de procesos mediante automatización inteligente.",
    features: ["RPA", "Workflows", "Integraciones"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Servicios que impulsan tu negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Soluciones tecnológicas integrales diseñadas para escalar tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="bg-card border-border hover:border-accent/50 transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
