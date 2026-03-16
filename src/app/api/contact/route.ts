import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Basic server-side validation
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // In a real app, you would send an email here using Nodemailer, SendGrid, or Resend
  // Example:
  // await resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'showcase@pegrio.com',
  //   subject: `New Contact from ${body.name}`,
  //   html: `<p>${body.message}</p>`
  // });

  console.log("Received contact form submission:", body);

  return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
}