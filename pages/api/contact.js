const nodemailer = require("nodemailer");

export default async function contactAPI(req, res) {
  var errObj;
  var successObj;

  // need to handle error if pw/un are incorrect

  try {
    async function sendMail() {
      let transporter = nodemailer.createTransport({
        host: "smtp.chriswarren.tech.",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "chris@chriswarren.tech",
          pass: "Thbyrnq)o6",
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

      if (!req.body.name || !req.body.message || !req.body.email) {
        errObj = {
          invalid: "One or more fields are empty",
        };
      } else {
        const response = await transporter.sendMail(mailOptions);
        return response;
      }
    }

    successObj = await sendMail();
  } catch (error) {
    errObj = error;
  }

  if (errObj) {
    res.status(400).json({ error: errObj });
  } else {
    res.status(200).json({ success: successObj });
  }
}
