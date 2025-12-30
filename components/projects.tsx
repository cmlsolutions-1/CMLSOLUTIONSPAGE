import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con pasarela de pagos integrada y sistema de gestión de inventario.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application",
    image: "/modern-ecommerce-dashboard.png",
  },
  {
    id: 2,
    title: "Sistema de Gestión Empresarial",
    description: "ERP personalizado para optimizar procesos de manufactura, ventas, inventario y recursos humanos.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "AWS"],
    category: "Enterprise Software",
    image: "/enterprise-dashboard.png",
  },
  {
    id: 3,
    title: "App Móvil de Salud",
    description: "Aplicación móvil para seguimiento de salud y bienestar con integración de dispositivos wearables.",
    technologies: ["React Native", "Firebase", "Express", "ML"],
    category: "Mobile App",
    image: "/health-mobile-app-interface.jpg",
  },
  {
    id: 4,
    title: "Portal Educativo",
    description: "Plataforma de e-learning con sistema de evaluación automatizada y contenido multimedia interactivo.",
    technologies: ["Vue.js", "Python", "MySQL", "Redis"],
    category: "Education",
    image: "/online-learning-platform.png",
  },
  {
    id: 5,
    title: "Sistema de Análisis de Datos",
    description: "Herramienta de Business Intelligence con dashboards personalizables y reportes en tiempo real.",
    technologies: ["Angular", "FastAPI", "BigQuery", "D3.js"],
    category: "Analytics",
    image: "/data-analytics-dashboard.png",
  },
  {
    id: 6,
    title: "Plataforma Fintech",
    description: "Sistema de gestión financiera con análisis predictivo y automatización de inversiones.",
    technologies: ["React", "GraphQL", "PostgreSQL", "Docker"],
    category: "Fintech",
    image: "/fintech-app-interface.jpg",
  },
]

export function Projects() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Proyectos Realizados</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Descubre algunos de nuestros proyectos exitosos que han transformado negocios y mejorado experiencias
            digitales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {MOCK_PROJECTS.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
