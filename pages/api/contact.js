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
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASSWORD,
        },
        tls: {
          secureProtocol: "TLSv1_method",
          rejectUnauthorized: false,
        },
      });

      const selfMailOptions = {
        from: "chris@chriswarren.tech",
        to: "chrisalmith@gmail.com",
        subject: `New message from ${req.body.name}`,
        text: `From: ${req.body.name} Contact: ${req.body.email} Message: ${req.body.message}`,
        html: `<h1>From: ${req.body.name}</h1><h1>Contact: ${req.body.email}</h1> <h1>Message: ${req.body.message}</h1>`,
      };

      const guestMailOptions = {
        from: "chris@chriswarren.tech",
        to: req.body.email,
        subject: `Thanks For Reaching Out, ${req.body.name}!`,
        text: `Your message was successfully submitted. I will contact you shortly.`,
        html: `<h1>Your message was successfully submitted. I will contact you shortly.</h1><br /><h1>Sincerely, Chris</h1>`,
      };

      if (!req.body.name || !req.body.message || !req.body.email) {
        errObj = {
          invalid: "One or more fields are empty",
        };
      } else {
        await transporter.sendMail(selfMailOptions);
        await transporter.sendMail(guestMailOptions);
        return response;
      }
    }

    successObj = await sendMail();
  } catch (error) {
    errObj = error;
  }

  if (errObj) {
    res.status(200).json({ error: errObj });
  } else {
    res.status(200).json({ success: successObj });
  }
}
