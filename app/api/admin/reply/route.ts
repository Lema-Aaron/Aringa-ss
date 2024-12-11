import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { messageId, reply } = await request.json()

    const message = await prisma.message.findUnique({
      where: { id: messageId },
    })

    if (!message) {
      return NextResponse.json({ error: 'Message not found' }, { status: 404 })
    }

    // Update message status
    await prisma.message.update({
      where: { id: messageId },
      data: { status: 'READ' },
    })

    // Send reply email
    const { data, error } = await resend.emails.send({
      from: 'Aringa Secondary School <noreply@aringasecondary.edu>',
      to: [message.email],
      subject: 'Re: Your message to Aringa Secondary School',
      text: `
        Dear ${message.name},

        Thank you for your message. Here is our reply:

        ${reply}

        Best regards,
        Aringa Secondary School
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Reply sent successfully', data })
  } catch (error) {
    console.log(error); 
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

