import nodemailer from 'nodemailer';

export default class NodemailerHelper {
    constructor(email, accessKey) {
        if (!email || !accessKey) {
            throw new Error('Email and Access Key are required!');
        }
        this.email = email;
        this.accessKey = accessKey;

        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: accessKey,
            },
        });
    }

    generateOtp(length = 4) {
        if (typeof length !== 'number' || length <= 0) {
            throw new Error('Length must be a positive number');
        }
        // Generate a numeric OTP of the specified length
        return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
    }

    async sendEmail(receiverEmail, subject, message, otp) {
        if (!receiverEmail || !subject || !message || !otp) {
            throw new Error('Receiver email,subject ,message, and OTP are required!');
        }

        const mailOptions = {
            from: this.email,
            to: receiverEmail,
            subject: subject,
            text: `${message}: ${otp}`,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return { success: true, message: 'Email sent successfully!' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}
