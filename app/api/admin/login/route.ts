import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // In a real application, you would validate against a database
  // This is just a simple example
  if (username === 'admin' && password === 'password123') {
    // Await the cookies Promise before calling set
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'true', { httpOnly: true, secure: true })
    
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }
}
