import { Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Síguenos en Redes Sociales</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 text-balance">
            Mantente al día con nuestras novedades, proyectos y contenido exclusivo
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-w-[160px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="https://www.facebook.com/profile.php?id=61584741503066" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-w-[160px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <a href="https://www.instagram.com/cml__solutions/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
          
        {/* Divider */}
          <div className="h-px w-full bg-primary-foreground/20 mb-10" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/80 text-center">
            © 2026 <strong>CML Solutions</strong>. Todos los derechos reservados.
          </p>
          </div>
      </div>
    </section>
    
  )
}
