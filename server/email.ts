import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Get email configuration from environment variables
  const emailUser = process.env.EMAIL_USER || "vipinpal.dev@gmail.com";
  const emailPass = process.env.EMAIL_PASS || "";
  const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
  const emailPort = parseInt(process.env.EMAIL_PORT || "587");

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailPort === 465,
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Email content for the portfolio owner
  const ownerMailOptions = {
    from: `"Portfolio Contact" <${emailUser}>`,
    to: emailUser,
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website.</p>
      </div>
    `,
  };

  // Email confirmation for the sender
  const senderMailOptions = {
    from: `"Vipin Pal" <${emailUser}>`,
    to: data.email,
    subject: `Thank you for your message: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; margin-bottom: 20px;">Thank You for Contacting Me</h2>
        <p>Hello ${data.name},</p>
        <p>Thank you for reaching out to me. I appreciate your interest and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
        <p>Best regards,</p>
        <p><strong>Vipin Pal</strong><br>Python/Full-Stack Developer</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 14px; color: #6b7280;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `,
  };

  // Send emails
  try {
    // Send email to the portfolio owner
    await transporter.sendMail(ownerMailOptions);
    
    // Send confirmation email to the sender
    await transporter.sendMail(senderMailOptions);
    
    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send emails");
  }
}
