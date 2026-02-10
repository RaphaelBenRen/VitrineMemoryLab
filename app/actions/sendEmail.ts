'use server';

import nodemailer from 'nodemailer';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: Inputs) {
  const { name, email, subject, message } = data;

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return { success: false, error: 'Tous les champs sont requis.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'memorylab.app.contact@gmail.com', // Always send to the official contact email
    replyTo: email, // Allow replying to the user
    subject: `[Support] ${subject}`,
    text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #6d28d9;">Nouveau message du Support MemoryLab Pro</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
}
