import { Router } from "express";
import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";


const nodemailer = require('nodemailer');
const router = Router();


const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'escaperankapp@gmail.com',
        pass: 'hymdywibxxhdhbil',
    },
    secure: true, // upgrades later with STARTTLS -- change this based on the PORT
});


const postSendMail = async (req: Request, res: Response) => {
    try {
      const { to, subject, text, html,attachments } = req.body;
      const result = await sendMail(to, subject, text, html,attachments);
      res.send(result);
    } catch (e) {
      handleHttp(res, "Error enviando e-mail: " + e);
    }
  };
  
  const sendMail = async (to: string, subject: string, text: string, html: string ,attachments:any) => {
    const mailData = {
      from: 'escaperankapp@gmail.com',
      to: to,
      subject: subject,
      text: text,
      html: html,
      attachments: attachments,
    };
    const info = await transporter.sendMail(mailData);
    return { message: "Correo enviado", message_id: info.messageId };
  };

  const postAttachmentMail = async ( req: Request, res: Response) => {
    try {

        const {to, subject, text } = req.body;
        const mailData = {
            from: 'escaperankapp@gmail.com',
            to: to,
            subject: subject,
            text: text,
            html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
            attachments: [
                {   // file on disk as an attachment
                    filename: 'nodemailer.png',
                    path: 'nodemailer.png'
                },
                {   // file on disk as an attachment
                    filename: 'text_file.txt',
                    path: 'text_file.txt'
                }
            ]
        };
    
        const info = await transporter.sendMail(mailData);
        res.send({ message: "Mail sent", message_id: info.messageId });
      } catch (e) 
      {
          console.log(e);
  
        handleHttp(res, "Error enviando e-mail: " + e);
      }
    };
  
  
  export { postSendMail,sendMail};
