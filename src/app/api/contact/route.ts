import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  
  // Validate input
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // Simulate sending email
  return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
}