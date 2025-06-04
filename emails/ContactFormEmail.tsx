import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Hr,
  Heading,
  Preview,
} from "@react-email/components";

import logo from "../public/images/logo.png";

export interface ContactFormData {
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

// Style objects for better reusability and consistency
const styles = {
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f6f9fc',
    margin: '0',
    padding: '40px 0',
  },
  container: {
    maxWidth: '580px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '32px 24px',
    textAlign: 'center' as const,
  },
  logo: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    margin: '0 auto 16px',
  },
  headerTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0',
    lineHeight: '28px',
  },
  content: {
    padding: '32px 24px',
  },
  timestamp: {
    fontSize: '12px',
    color: '#6b7280',
    textAlign: 'center' as const,
    marginBottom: '24px',
    fontWeight: '500',
  },
  fieldBox: {
    borderRadius: '6px',
    padding: '16px',
    marginBottom: '12px',
    border: '1px solid #e5e7eb',
  },
  contactField: {
    backgroundColor: '#f8fafc',
    borderLeft: '3px solid #3b82f6',
  },
  programField: {
    backgroundColor: '#f0fdf4',
    borderLeft: '3px solid #10b981',
  },
  messageField: {
    backgroundColor: '#eff6ff',
    borderLeft: '3px solid #2563eb',
  },
  fieldLabel: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#374151',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    margin: '0 0 6px 0',
  },
  fieldValue: {
    fontSize: '14px',
    color: '#111827',
    margin: '0',
    lineHeight: '20px',
  },
  messageValue: {
    fontSize: '14px',
    color: '#111827',
    margin: '0',
    lineHeight: '20px',
    whiteSpace: 'pre-wrap' as const,
  },
  consentGrid: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  consentBox: {
    flex: '1',
    borderRadius: '6px',
    padding: '16px',
    backgroundColor: '#faf5ff',
    borderLeft: '3px solid #8b5cf6',
    border: '1px solid #e5e7eb',
  },
  footer: {
    backgroundColor: '#f9fafb',
    padding: '20px 24px',
    textAlign: 'center' as const,
    borderTop: '1px solid #e5e7eb',
  },
  footerText: {
    fontSize: '12px',
    color: '#6b7280',
    margin: '0',
    lineHeight: '16px',
  },
};

export default function ContactFormEmail({
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
}: ContactFormData) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>
      <Preview>
        New contact form submission from {firstName} {lastName} - {email}
      </Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          
          {/* Header Section */}
          <Section style={styles.header}>
            <Heading as="h1" style={styles.headerTitle}>
              New Contact Form Submission
            </Heading>
          </Section>

          {/* Content Section */}
          <Section style={styles.content}>
            
            {/* Timestamp */}
            <Text style={styles.timestamp}>
              Received on {currentDate}
            </Text>

            {/* Personal Information Section */}
            <Heading as="h2" style={{ fontSize: '16px', color: '#374151', marginBottom: '16px', marginTop: '0' }}>
              Contact Information
            </Heading>
            
            <Section style={{ ...styles.fieldBox, ...styles.contactField }}>
              <Text style={styles.fieldLabel}>Full Name</Text>
              <Text style={styles.fieldValue}>
                {firstName} {lastName}
              </Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.contactField }}>
              <Text style={styles.fieldLabel}>Email Address</Text>
              <Text style={styles.fieldValue}>{email}</Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.contactField }}>
              <Text style={styles.fieldLabel}>Phone Number</Text>
              <Text style={styles.fieldValue}>
                {phone || "Not provided"}
              </Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.contactField }}>
              <Text style={styles.fieldLabel}>Age</Text>
              <Text style={styles.fieldValue}>
                {age || "Not provided"}
              </Text>
            </Section>

            {/* Program Information Section */}
            <Heading as="h2" style={{ fontSize: '16px', color: '#374151', marginBottom: '16px', marginTop: '24px' }}>
              Program Details
            </Heading>

            <Section style={{ ...styles.fieldBox, ...styles.programField }}>
              <Text style={styles.fieldLabel}>Experience Level</Text>
              <Text style={styles.fieldValue}>
                {ntcExperience || "Not specified"}
              </Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.programField }}>
              <Text style={styles.fieldLabel}>Interested Divisions</Text>
              <Text style={styles.fieldValue}>
                {Array.isArray(interestedDivisions) && interestedDivisions.length
                  ? interestedDivisions.join(", ")
                  : "None specified"}
              </Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.programField }}>
              <Text style={styles.fieldLabel}>Parent/Guardian Name</Text>
              <Text style={styles.fieldValue}>
                {parentGuardianName || "Not provided"}
              </Text>
            </Section>

            <Section style={{ ...styles.fieldBox, ...styles.programField }}>
              <Text style={styles.fieldLabel}>How They Heard About Us</Text>
              <Text style={styles.fieldValue}>
                {hearAboutUs || "Not specified"}
              </Text>
            </Section>

            {/* Message Section */}
            <Heading as="h2" style={{ fontSize: '16px', color: '#374151', marginBottom: '16px', marginTop: '24px' }}>
              Message
            </Heading>

            <Section style={{ ...styles.fieldBox, ...styles.messageField }}>
              <Text style={styles.fieldLabel}>Message Content</Text>
              <Text style={styles.messageValue}>
                {message || "No message provided"}
              </Text>
            </Section>

            {/* Consent Information Section */}
            <Heading as="h2" style={{ fontSize: '16px', color: '#374151', marginBottom: '16px', marginTop: '24px' }}>
              Consent & Preferences
            </Heading>

            <Section style={styles.consentGrid}>
              <Section style={styles.consentBox}>
                <Text style={styles.fieldLabel}>Newsletter Subscription</Text>
                <Text style={styles.fieldValue}>
                  {newsletter ? "✅ Yes" : "❌ No"}
                </Text>
              </Section>

              <Section style={styles.consentBox}>
                <Text style={styles.fieldLabel}>Data Consent</Text>
                <Text style={styles.fieldValue}>
                  {dataConsent ? "✅ Given" : "❌ Not given"}
                </Text>
              </Section>
            </Section>

          </Section>

          {/* Footer Section */}
          <Hr style={{ borderColor: '#e5e7eb', margin: '0' }} />
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              This email was automatically generated from your website contact form.
              <br />
              Please do not reply to this email. For support, visit your admin dashboard.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}