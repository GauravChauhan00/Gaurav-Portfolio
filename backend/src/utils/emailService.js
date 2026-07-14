import dns from 'dns/promises';
import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

// Send email using Resend API (HTTP-based, works on Render free tier)
async function sendViaResend({ name, email, subject, message }) {
  console.log('Attempting to send email via Resend HTTP API...');
  
  // Resend Free Tier: 
  // - "from" must be "onboarding@resend.dev"
  // - "to" must be your registered email address (env.receiverEmail or env.emailUser)
  const fromEmail = 'onboarding@resend.dev';
  const toEmail = (env.receiverEmail || env.emailUser || '').toLowerCase();

  console.log('Sending Resend email to:', toEmail);

  if (!toEmail) {
    throw new Error('Receiver email (RECEIVER_EMAIL or EMAIL_USER) is not configured.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.resendApiKey}`
    },
    body: JSON.stringify({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">New Contact Form Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 100px; color: #4b5563;">Name:</td>
              <td style="padding: 6px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Email:</td>
              <td style="padding: 6px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Subject:</td>
              <td style="padding: 6px 0; color: #1f2937;">${subject}</td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-weight: bold; color: #4b5563; margin-bottom: 8px;">Message:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; font-style: italic; color: #374151; white-space: pre-wrap;">${message}</div>
        </div>
      `
    })
  });

  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || `Resend API returned status ${response.status}`);
  }

  console.log('Email sent successfully via Resend API:', responseData.id);
  return responseData;
}

// Send email using Gmail SMTP (Nodemailer, fallback for local testing where SMTP port is not blocked)
async function sendViaSMTP({ name, email, subject, message }) {
  console.log('Attempting to send email via Gmail SMTP...');
  
  let host = 'smtp.gmail.com';
  try {
    const addresses = await dns.resolve4('smtp.gmail.com');
    if (addresses && addresses.length > 0) {
      host = addresses[0];
      console.log(`Resolved smtp.gmail.com to IPv4: ${host}`);
    }
  } catch (dnsErr) {
    console.warn('DNS IPv4 resolution failed, falling back to hostname:', dnsErr);
  }

  const transporter = nodemailer.createTransport({
    host: host,
    port: 465,
    secure: true,
    tls: {
      servername: 'smtp.gmail.com'
    },
    auth: {
      user: env.emailUser,
      pass: env.emailPass.replace(/\s/g, '')
    }
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${env.emailUser}>`,
    to: env.receiverEmail || env.emailUser,
    subject: `New Inquiry: ${subject}`,
    text: `You have received a new inquiry from your portfolio website.
    
Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #6366f1; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">New Contact Form Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 100px; color: #4b5563;">Name:</td>
            <td style="padding: 6px 0; color: #1f2937;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Email:</td>
            <td style="padding: 6px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #4b5563;">Subject:</td>
            <td style="padding: 6px 0; color: #1f2937;">${subject}</td>
          </tr>
        </table>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-weight: bold; color: #4b5563; margin-bottom: 8px;">Message:</p>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; font-style: italic; color: #374151; white-space: pre-wrap;">${message}</div>
      </div>
    `
  };

  const info = await transporter.sendMail(mailOptions);
  console.log('Email sent successfully via Gmail SMTP:', info.messageId);
  return info;
}

// Entrypoint function with fallback logic
export async function sendContactEmail(params) {
  if (env.resendApiKey) {
    return sendViaResend(params);
  } else if (env.emailUser && env.emailPass) {
    return sendViaSMTP(params);
  } else {
    console.warn('Email service configuration missing. Neither Resend API Key nor Gmail SMTP credentials are set. Email notification not sent.');
    return null;
  }
}
