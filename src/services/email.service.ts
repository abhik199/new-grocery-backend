import { Config } from "../config/conf";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export interface otpKey {
  username: string;
  otp: number;
  email: string;
}
export interface emailKey {
  username: string;
  email: string;
  url: string;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: Config.SEND_EMAIL,
    pass: Config.SEND_PASS,
  },
});

const OTPService = async (emailData: otpKey) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      path.join(__dirname, `../views/otp.ejs`),
      {
        name: emailData.username,
        otp: emailData.otp,
      },
      (err: any, data: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          const message = {
            from: "grocery store",
            to: emailData.email,
            subject: "otp Verification Mail",
            html: data,
          };
          transporter.sendMail(message, (error: any, info: any) => {
            if (error) {
              console.error(error);
              reject(error);
            } else {
              resolve(info.response);
            }
          });
        }
      }
    );
  });
};

const emailLink = (emailData: emailKey) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(
      path.join(__dirname, `../views/otp.ejs`),
      {
        name: emailData.username,
        url: emailData.url,
      },
      (err: any, data: any) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          const message = {
            from: "grocery store",
            to: emailData.email,
            subject: "otp Verification Mail",
            html: data,
          };
          transporter.sendMail(message, (error: any, info: any) => {
            if (error) {
              console.error(error);
              reject(error);
            } else {
              resolve(info.response);
            }
          });
        }
      }
    );
  });
};

export { OTPService, emailLink };
