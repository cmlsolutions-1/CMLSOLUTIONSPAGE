"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <img src="/images/logo-20empresa.png" alt="CML SOLUTIONS Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xl hidden sm:block">CML SOLUTIONS</span>
          </button>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => scrollToSection("home")} className="text-base">
              Inicio
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")} className="text-base">
              Quiénes Somos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projects")} className="text-base">
              Proyectos
            </Button>
            <Button onClick={() => scrollToSection("quote-section")} className="text-base">
              Contáctenos
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
