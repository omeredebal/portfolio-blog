import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM || '',
      to: process.env.RESEND_TO || '',
      subject: `Yeni iletişim formu: ${body.name}`,
      replyTo: body.email,
      html: `
        <h3>Yeni mesaj</h3>
        <p><strong>Ad:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Mesaj:</strong><br/>${body.message}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
