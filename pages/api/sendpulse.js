const nodemailer = require("nodemailer");

export default async function helloAPI(req, res) {
  const sendMail = async () => {
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.chriswarren.tech.",
        port: 600,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        },
        tls: {
          secureProtocol: "TLSv1_method",
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "chris@chriswarren.tech",
        to: "chrisalmith@gmail.com",
        subject: `New message from ${req.body.name}`,
        text: `From: ${req.body.name} Contact: ${req.body.email} Message: ${req.body.message}`,
        html: `<h1>From: ${req.body.name}</h1><h1>Contact: ${req.body.email}</h1> <h1>Message: ${req.body.message}</h1>`,
      };

      const response = await transporter.sendMail(mailOptions);

      return response;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      let response = await sendMail();
      console.log(response);
    }
  };

  res.status(200).json({ hello: "there" });
}
