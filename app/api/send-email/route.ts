// app/api/send-email/route.ts

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 1️⃣ Correo al CLIENTE
    await transporter.sendMail({
      from: `"CML Solutions" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Hemos recibido tu solicitud de cotización",
      html: `
        <h2>Hola ${data.name},</h2>
        <p>Gracias por contactarnos. Hemos recibido tu solicitud.</p>

        <h3>Detalles:</h3>
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

    // 2️⃣ Correo INTERNO (CML Solutions)
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // te llega a ti
      subject: "🚀 Nueva solicitud de cotización",
      html: `
        <h2>Nueva solicitud recibida</h2>

        <ul>
          <li><b>Nombre:</b> ${data.name}</li>
          <li><b>Email:</b> ${data.email}</li>
          <li><b>Empresa:</b> ${data.company || "No especificada"}</li>
          <li><b>Teléfono:</b> ${data.phone}</li>
          <li><b>Tipo de proyecto:</b> ${data.projectType}</li>
        </ul>

        <p><b>Descripción:</b></p>
        <p>${data.description}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error enviando correo:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
