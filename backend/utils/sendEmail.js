const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not your Gmail password)
      },
    });

    // Email options
    const mailOptions = {
      from: `"Cable Scheduler" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Email sent: ", info.response);
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
