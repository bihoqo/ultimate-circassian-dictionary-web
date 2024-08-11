import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

//TODO(artur): Implement sending email to the email which was provided, so that the user knows what they sent.
//TODO(artur): Probably, should implement some mechanism to prevent spam, but right now we are probably
//             too small to be targeted by spammers.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    //TODO(artur): Right now `userSendemail` is not used. It should be used to identify to us where it is from.
    const { userSendemail, subject, message } = req.body;
    // port 587: TLS
    // port 465: SSL
    const transporter: Transporter<SMTPTransport.SentMessageInfo> = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your mail server details
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "learncircassian@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const info: SMTPTransport.SentMessageInfo = await transporter.sendMail({
      from: "learncircassian@gmail.com",
      to: "learncircassian@gmail.com",
      subject: subject,
      text: message,
    });

    res.status(200).json({ status: "Email Sent", info });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
