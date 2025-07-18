import nodemailer from "nodemailer";
import validator from 'validator';
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type {ContactEmail} from "../model/ContactEmail.ts";
import {
  SMTP_MAIL_FROM_ADDRESS,
  SMTP_MAIL_TO_ADDRESS,
  SMTP_PASS,
  SMTP_PORT,
  SMTP_SERVER,
  SMTP_USER
} from "astro:env/server";

export class MailService {
  private readonly FROM_ADDRESS = `Webmaster dbt <${SMTP_MAIL_FROM_ADDRESS}>`;

  /**
   * @throws Error
   * @param data
   * @protected
   */
  protected validateAndSanitizeInput(data: FormData): ContactEmail {
    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const reason = data.get('reason')?.toString();
    const message = data.get('message')?.toString();

    if (name === undefined || email === undefined || reason === undefined || message === undefined) {
      throw new Error("Required value cannot be undefined");
    }

    data.forEach((entry) => {
      if (validator.isEmpty(entry.toString())) {
        throw new Error(`Required value ${entry.toString()} cannot be empty`);
      }
    });

    if (!validator.isEmail(email)) {
      throw new Error("The email address provided is not valid");
    }

    return <ContactEmail>{
      fromName: validator.escape(name),
      email: validator.normalizeEmail(validator.escape(email)),
      reason: validator.escape(<string>reason),
      message: validator.escape(message)
    };
  }

  async sendEmail(data: FormData) {
    const contactEmail = this.validateAndSanitizeInput(data);

    const options: SMTPTransport.Options = {
      host: SMTP_SERVER,
      port: parseInt(SMTP_PORT),
    };

    // local testing (sendmail/Mailpit) does not use auth
    if (SMTP_USER && SMTP_PASS) {
      options.secure = true;
      options.auth = {
        user: SMTP_USER,
        pass: SMTP_PASS,
      };
    }
    const transporter = nodemailer.createTransport(options);

    await transporter.sendMail({
      from: this.FROM_ADDRESS,
      replyTo: contactEmail.email,
      to: SMTP_MAIL_TO_ADDRESS,
      subject: "New email via web-dbt",
      text: `From: ${contactEmail.fromName}/${contactEmail.email}, reason: ${contactEmail.reason}. 
            Body text:\n\n ${contactEmail.message}`
    });
  }
}