"use client"

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Número con el número de WhatsApp real de tu empresa
    const phoneNumber = "573218900642" // Formato: código de país + número sin espacios ni signos
    const message = encodeURIComponent(
      "Hola, me gustaría solicitar información sobre sus servicios de desarrollo de software.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 bg-[#25D366] hover:bg-[#20BA5A]"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </Button>
  )
}
