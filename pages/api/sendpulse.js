const nodemailer = require("nodemailer");

export default function helloAPI(req, res) {
  /* Waiting on DNS SMTP to resolve before implementing contact emails */

  const sendMail = async () => {
    try {
      let transporter = nodemailer.createTransport({
        host: "pop.chriswarren.tech.",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "",
          pass: "",
        },
      });

      const mailOptions = {
        from: "",
        to: "",
        subject: "Important!",
        text: `From: ${req.body.name} Contact: ${req.body.email} Message: ${req.body.message}`,
        html: `<h1>From: ${req.body.name}</h1><h1>Contact: ${req.body.email}</h1> <h1>Message: ${req.body.message}</h1>`,
      };

      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  };
  sendMail()
    .then((result) => console.log("Email successfully sent...", result))
    .catch((error) => console.log(error));

  res.status(200).json({ name: "John Doe" });
}
