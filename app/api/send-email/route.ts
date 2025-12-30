//src/app/api/send-email/route.ts

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Cotizaciones Web" <${process.env.EMAIL_USER}>`,
      to: data.email, // correo del cliente
      subject: "Hemos recibido tu solicitud de cotización",
      html: `
        <h2>Hola ${data.name},</h2>
        <p>Gracias por contactarnos. Hemos recibido tu solicitud.</p>

        <h3>Resumen de tu solicitud:</h3>
        <ul>
          <li><b>Empresa:</b> ${data.company || "No especificada"}</li>
          <li><b>Teléfono:</b> ${data.phone}</li>
          <li><b>Tipo de proyecto:</b> ${data.projectType}</li>
        </ul>

        <p><b>Descripción:</b></p>
        <p>${data.description}</p>

        <p>Nos pondremos en contacto contigo en las próximas 24 horas.</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
