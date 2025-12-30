"use client"

import { useState } from "react"
import { Users, Rocket, Lightbulb, Target, Eye, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CompanyInfo() {
  const [activeTab, setActiveTab] = useState<"about" | "mission" | "vision" | "quality">("about")

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/30 via-background to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              onClick={() => setActiveTab("about")}
              variant={activeTab === "about" ? "default" : "outline"}
              size="lg"
              className="min-w-[140px]"
            >
              <Users className="w-4 h-4 mr-2" />
              Quiénes Somos
            </Button>
            <Button
              onClick={() => setActiveTab("mission")}
              variant={activeTab === "mission" ? "default" : "outline"}
              size="lg"
              className="min-w-[140px]"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Misión
            </Button>
            <Button
              onClick={() => setActiveTab("vision")}
              variant={activeTab === "vision" ? "default" : "outline"}
              size="lg"
              className="min-w-[140px]"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Visión
            </Button>
            <Button
              onClick={() => setActiveTab("quality")}
              variant={activeTab === "quality" ? "default" : "outline"}
              size="lg"
              className="min-w-[140px]"
            >
              <Shield className="w-4 h-4 mr-2" />
              Políticas de Calidad
            </Button>
          </div>

          <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border animate-in fade-in duration-300">
            {activeTab === "about" && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Quiénes Somos</h2>
                <p className="text-lg text-muted-foreground text-balance leading-relaxed mb-8">
                  <strong>CML SOLUTIONS</strong> es una empresa de desarrollo de software con años de experiencia en la
                  creación de soluciones tecnológicas innovadoras. Nuestro equipo de expertos se dedica a transformar
                  desafíos empresariales en oportunidades digitales, entregando productos de alta calidad que superan
                  las expectativas de nuestros clientes.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Equipo Experto</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Profesionales altamente capacitados</p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-4">
                      <Target className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Enfoque Cliente</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Tu éxito es nuestra prioridad</p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                      <Eye className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Calidad Garantizada</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Estándares rigurosos de código</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mission" && (
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Desarrollar soluciones de software innovadoras y de alta calidad que impulsen la transformación
                  digital de nuestros clientes, ayudándoles a alcanzar sus objetivos empresariales mediante tecnología
                  de vanguardia y un servicio excepcional.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-6">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Visión</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser reconocidos como líderes en el desarrollo de software, destacando por nuestra capacidad de
                  innovación, excelencia técnica y compromiso con el éxito de nuestros clientes, expandiendo nuestra
                  presencia y generando un impacto positivo en la industria tecnológica.
                </p>
              </div>
            )}

            {activeTab === "quality" && (
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Políticas de Calidad</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Estamos comprometidos con la excelencia en cada proyecto que desarrollamos. Nuestras políticas de
                  calidad aseguran que cada línea de código cumpla con los más altos estándares de la industria.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Estándares de Código</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Seguimos las mejores prácticas y convenciones de código para garantizar legibilidad,
                        mantenibilidad y escalabilidad.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Pruebas Rigurosas</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Implementamos pruebas exhaustivas en cada fase del desarrollo para identificar y corregir
                        errores antes de la entrega.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Mejora Continua</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Actualizamos constantemente nuestros procesos y tecnologías para mantenernos a la vanguardia de
                        la industria.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Satisfacción del Cliente</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Tu satisfacción es nuestra prioridad. Trabajamos en estrecha colaboración contigo en cada etapa
                        del proyecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
