"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToQuote = () => {
    document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full border-[3px] border-cyan opacity-30" />
        <div className="absolute top-32 right-[17%] w-48 h-48 rounded-full border-[3px] border-accent opacity-40" />
        <div className="absolute top-44 right-[19%] w-32 h-32 rounded-full border-[3px] border-cyan opacity-50" />

        {/* Dots pattern */}
        <div className="absolute top-24 right-[8%] grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-cyan opacity-40" />
          ))}
        </div>

        {/* Triangles */}
        <div className="absolute bottom-32 right-[25%] w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-yellow-400 opacity-20" />
        <div className="absolute bottom-44 right-[30%] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-accent opacity-30" />

        {/* Stripes */}
        <div className="absolute bottom-20 right-[20%] flex flex-col gap-1">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-1 w-24 bg-gradient-to-r from-cyan to-accent opacity-40" />
          ))}
        </div>

        {/* Plus signs */}
        <div className="absolute bottom-48 right-[12%] text-6xl text-cyan opacity-30 font-light">+</div>
        <div className="absolute top-48 left-[8%] text-5xl text-accent opacity-25 font-light">+</div>

        {/* Left side decorative elements */}
        <div className="absolute bottom-32 left-[10%] w-32 h-32 rounded-full border-[2px] border-accent opacity-20" />
        <div className="absolute top-40 left-[5%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-cyan opacity-25" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span
                className="text-cyan font-light tracking-wide"
                style={{
                  WebkitTextStroke: "2px currentColor",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EMPRESAS
              </span>
              <br />
              <span className="text-primary">INCREÍBLES,</span>
              <br />
              <span
                className="text-cyan font-light tracking-wide"
                style={{
                  WebkitTextStroke: "2px currentColor",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MERECEN
              </span>
              <br />
              <span className="text-yellow-400">SOFTWARE</span>
              <br />
              <span className="text-pink-500">INCREÍBLE</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToQuote} className="text-base bg-accent hover:bg-accent/90">
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Conocer Más
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="ceos_CML.png"
                alt="Profesional CML Solutions"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
