import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CompanyInfo } from "@/components/company-info"
import { Projects } from "@/components/projects"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { QuoteForm } from "@/components/quote-form"
import { SocialLinks } from "@/components/social-links"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <CompanyInfo />
      </div>
      <div id="servicesSection">
        <ServicesSection />
      </div>
      <div id="processSection">
        <ProcessSection />
      </div>
      <div id="projects">
        <Projects />
      </div>|
      <div id="quote-section">
        <QuoteForm />
      </div>
      <SocialLinks />
      <WhatsAppButton />
    </main>
  )
}
