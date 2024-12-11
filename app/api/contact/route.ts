import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { PrismaClient } from '@prisma/client'
import { Server as SocketServer } from 'socket.io'
import webpush from 'web-push'

const resend = new Resend(process.env.RESEND_API_KEY)
const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Store the message in the database
    const storedMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
        status: 'UNREAD',
      },
    })

    // Send email notification to the school
    const { data, error } = await resend.emails.send({
      from: 'Aringa Secondary School <noreply@aringasecondary.edu>',
      to: ['admin@aringasecondary.edu'],
      subject: 'New Contact Form Submission',
      text: `
        New message received:
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Please log in to the admin panel to respond.
      `,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Emit WebSocket event for real-time notification
    const io = (global as any).io
    if (io) {
      io.emit('newMessage', { id: storedMessage.id, name, email })
    }

    // Send push notification
    const subscriptions = await prisma.pushSubscription.findMany()
    for (const subscription of subscriptions) {
      try {
        await webpush.sendNotification(
          JSON.parse(subscription.subscription),
          JSON.stringify({
            title: 'New Message',
            body: `New message from ${name}`,
          })
        )
      } catch (error) {
        console.error('Failed to send push notification:', error)
      }
    }

    return NextResponse.json({ message: 'Message sent successfully', data: storedMessage })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

