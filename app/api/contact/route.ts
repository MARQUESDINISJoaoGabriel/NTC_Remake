import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Define expected shape of the form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  age?: string;
  ntcExperience?: string;
  interestedDivisions?: string[];
  parentGuardianName?: string;
  hearAboutUs?: string;
  message: string;
  newsletter?: boolean;
  dataConsent?: boolean;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      age,
      ntcExperience,
      interestedDivisions,
      parentGuardianName,
      hearAboutUs,
      message,
      newsletter,
      dataConsent,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.TARGET_EMAIL!,
      subject: `New contact from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Age:</strong> ${age || "N/A"}</p>
        <p><strong>Experience Level:</strong> ${ntcExperience || "N/A"}</p>
        <p><strong>Interested Divisions:</strong> ${
          Array.isArray(interestedDivisions) && interestedDivisions.length
            ? interestedDivisions.join(', ')
            : 'None'
        }</p>
        <p><strong>Parent/Guardian Name:</strong> ${parentGuardianName || "N/A"}</p>
        <p><strong>Heard About Us Via:</strong> ${hearAboutUs || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Newsletter Subscription:</strong> ${newsletter ? "Yes" : "No"}</p>
        <p><strong>Data Consent Given:</strong> ${dataConsent ? "Yes" : "No"}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
