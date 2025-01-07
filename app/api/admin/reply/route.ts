import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { to, subject, message } = await request.json()

    const { data, error } = await resend.emails.send({
      from: 'Aringa Secondary School <noreply@aringasecondary.edu>',
      to: [to],
      subject: subject,
      text: message,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ message: 'Reply sent successfully', data })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

