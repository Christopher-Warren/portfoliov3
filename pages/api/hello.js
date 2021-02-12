const nodemailer = require("nodemailer");
const { google } = require("googleapis");

export default function helloAPI(req, res) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
  });

  // const sendMail = async () => {
  //   try {
  //     const accessToken = await oAuth2Client.getAccessToken();

  //     const transport = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         type: "OAuth2",
  //         user: "chrisalmith@gmail.com",
  //         clientId: process.env.GOOGLE_CLIENT_ID,
  //         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //         refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  //         accessToken: accessToken,
  //       },
  //     });

  //     const mailOptions = {
  //       from: "Chris Warren <chrisalmith@gmail.com>",
  //       to: "chrisalmith@gmail.com",
  //       subject: "Important!",
  //       text: `From: ${req.body.name} Contact: ${req.body.email} Message: ${req.body.message}`,
  //       html: `<h1>From: ${req.body.name}</h1><h1>Contact: ${req.body.email}</h1> <h1>Message: ${req.body.message}</h1>`,
  //     };

  //     const result = await transport.sendMail(mailOptions);
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // };
  // sendMail()
  //   .then((result) => console.log("Email successfully sent...", result))
  //   .catch((error) => console.log(error));

  res.status(200).json({ name: "John Doe" });
}
