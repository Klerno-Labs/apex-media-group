import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, budget, message, _gotcha } = body

    // Honeypot validation
    if (_gotcha) {
      return NextResponse.json({ message: 'Bot detected' }, { status: 200 })
    }

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    // In a real app, you would send an email here using Resend, SendGrid, or Nodemailer
    // For this demo, we simulate success
    console.log("Received form submission:", { name, email, phone, budget, message })
    
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ message: 'Message sent' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}