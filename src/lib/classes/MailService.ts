import nodemailer from "nodemailer";
import validator from 'validator';
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import type {ContactEmail} from "../model/ContactEmail.ts";
import {
  getSecret,
} from "astro:env/server";

export class MailService {
  private readonly FROM_ADDRESS = `Webmaster dbt <${getSecret("SMTP_MAIL_FROM_ADDRESS")}>`;  

  constructor() {
    const valid = this.validateEnvironment();

    if (!valid) {
      throw new Error("Environment variables are not set correctly");
    }
  }

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
  
  private validateEnvironment(): boolean {
    const requiredEnvVars = [
      "SMTP_MAIL_FROM_ADDRESS",
      "SMTP_MAIL_TO_ADDRESS",
      "SMTP_PORT",
      "SMTP_SERVER"
    ];

    for (const envVar of requiredEnvVars) {
      const value = getSecret(envVar);
      if (!value) {
        console.error(`Required environment variable ${envVar} is not set.`);
        return false;
      }
    }

    // SMTP_USER and SMTP_PASS are optional for local testing, but if one is provided, both must be
    const smtpUser = getSecret("SMTP_USER");
    const smtpPass = getSecret("SMTP_PASS");

    if ((smtpUser && !smtpPass) || (!smtpUser && smtpPass)) {
      console.error("Both SMTP_USER and SMTP_PASS must be provided together.");
      return false;
    }
    return true;
  }

  async sendEmail(data: FormData) {
    const contactEmail = this.validateAndSanitizeInput(data);

    const options: SMTPTransport.Options = {
      host: getSecret("SMTP_SERVER"),
      port: parseInt(<string>getSecret("SMTP_PORT")),
    };

    // local testing (sendmail/Mailpit) does not use auth
    const smtpUser = getSecret("SMTP_USER");
    const smtpPass = getSecret("SMTP_PASS");
    if (smtpUser && smtpPass) {
      options.secure = true;
      options.auth = {
        user: smtpUser,
        pass: smtpPass,
      };
    }
    const transporter = nodemailer.createTransport(options);

    await transporter.sendMail({
      from: this.FROM_ADDRESS,
      replyTo: contactEmail.email,
      to: getSecret("SMTP_MAIL_TO_ADDRESS"),
      subject: "New email via web-dbt",
      text: `From: ${contactEmail.fromName}/${contactEmail.email}, reason: ${contactEmail.reason}. 
            Body text:\n\n ${contactEmail.message}`
    });
  }
}