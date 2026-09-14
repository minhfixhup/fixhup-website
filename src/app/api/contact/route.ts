import { NextResponse } from "next/server";

// TODO: this endpoint currently only logs the submission server-side.
// Before launch, wire this up to real delivery (e.g. an email service like
// Resend/SendGrid, or a CRM webhook) so quote requests actually reach FixHup.
export async function POST(request: Request) {
  const data = await request.json();

  const { firstName, lastName, email, phone, service, message } = data ?? {};

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  console.log("New FixHup quote request:", {
    firstName,
    lastName,
    email,
    phone,
    service,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
