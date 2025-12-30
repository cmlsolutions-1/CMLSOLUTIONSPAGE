import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CML Solutions - Desarrollo de Software Profesional",
  description:
    "Empresa líder en desarrollo de software a medida. Transformamos tus ideas en soluciones digitales innovadoras.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/blanco.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/negro.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/blanco.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
