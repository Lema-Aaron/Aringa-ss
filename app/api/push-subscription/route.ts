import { NextResponse } from 'next/server'
import webpush from 'web-push'

const vapidKeys = {
  publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  privateKey: process.env.VAPID_PRIVATE_KEY,
}

webpush.setVapidDetails(
  'mailto:admin@aringasecondary.edu',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

export async function POST(request: Request) {
  const subscription = await request.json()

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'New Message',
        body: 'You have a new message in the admin panel.',
      })
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send push notification' }, { status: 500 })
  }
}

