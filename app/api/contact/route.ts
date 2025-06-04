import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import ContactFormEmail, { type ContactFormData } from "@/emails/ContactFormEmail";

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

    // Enhanced validation
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, email, and message are required" }, 
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" }, 
        { status: 400 }
      );
    }

    // Environment configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const targetEmail = process.env.TARGET_EMAIL;

    if (!resendApiKey || !targetEmail) {
      console.warn("Email service not configured. Contact form data received but not sent:");
      console.log({
        name: `${firstName} ${lastName}`,
        email,
        message: message.substring(0, 100) + (message.length > 100 ? "..." : "")
      });
      
      return NextResponse.json({ 
        message: "Contact form received. Email service not configured in this environment.",
        warning: "Email not sent - missing configuration"
      });
    }

    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Clean and prepare the data
      const cleanData: ContactFormData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone?.trim(),
        age: age?.trim(),
        ntcExperience: ntcExperience?.trim(),
        interestedDivisions,
        parentGuardianName: parentGuardianName?.trim(),
        hearAboutUs: hearAboutUs?.trim(),
        message: message.trim(),
        newsletter,
        dataConsent,
      };

      // Render the React email component to HTML
      const emailHtml = await render(ContactFormEmail(cleanData));

      const result = await resend.emails.send({
        from: "onboarding@resend.dev", // Consider using a branded from address
        to: [targetEmail],
        subject: `New Contact: ${firstName} ${lastName} - ${interestedDivisions?.length ? interestedDivisions.join(", ") : "General Inquiry"}`,
        html: emailHtml,
        // Add plain text version for better deliverability
        text: `New contact form submission from ${firstName} ${lastName}\n\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage: ${message}`,
      });

      // Log success for monitoring
      console.log("Email sent successfully:", { 
        id: result.data?.id, 
        to: targetEmail,
        from: `${firstName} ${lastName} <${email}>` 
      });

      console.log(resendApiKey);

      return NextResponse.json({ 
        message: "Email sent successfully",
        emailId: result.data?.id 
      });

    } catch (emailError: any) {
      console.error("Email send error:", emailError);
      
      return NextResponse.json({ 
        error: "Failed to send email",
        details: process.env.NODE_ENV === 'development' ? emailError.message : "Please try again later"
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Contact form error:", error);
    
    return NextResponse.json({ 
      error: "Failed to process contact form",
      details: process.env.NODE_ENV === 'development' ? error.message : "Invalid request format"
    }, { status: 500 });
  }
}