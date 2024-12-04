import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, contact } = await req.json();

  if (!name || !email || !contact) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Use environment variables for credentials
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "digiankiya@gmail.com",
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      { status: 500 }
    );
  }
}
