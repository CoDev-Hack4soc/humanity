const nodemailer = require("nodemailer");
const cronjob = require("node-cron");

const structureMailOption = transporter => {
    let mailOption = {
      from: "aryanpandey0715@gmail.com",
      to: "dasaditi018@gmail.com",
      subject: "using nodemailer",
      text: "hello world",
      html: `<h2>some html</h2>`,
    };
    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(info.messageId);
        console.log(nodemailer.getTestMessageUrl(info));
      }
    });
  };


  const createTransporter = () => {
    let transporter = nodemailer.createTransport({
    service: "gmail",
     auth: {
       user: "aryanpandey0715@gmail.com",
       pass: "AryanPandey15",
     },
   });
   structureMailOption(transporter)
 };
 createTransporter();
 