# Nodemon Helper

Nodemon Helper is a simple Node.js package that allows developers to easily generate OTPs (One Time Passwords) and send email notifications using Nodemailer. This package provides easy integration into your Node.js projects and supports customizable OTP lengths.

## Features
- Generate OTPs (4 or 6 digits) for use in your application.
- Send OTPs and custom messages via email using Nodemailer.
- Simple and customizable integration with your Node.js project.
- Easy setup and usage.

## Table of Contents
1. [Installation](#installation)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [API Reference](#api-reference)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

To get started with `nodemon-helper`, follow these steps:

### 1. Install the package via npm:

```bash
npm install nodemon-helper

2. Create a .env file:
In the root directory of your project, create a .env file and add your email configuration like this:
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-access-key

Make sure to replace your-email@example.com with your actual email address and your-email-access-key with the email service provider's access key (for example, Gmail app password).

Setup Instructions
1. Set up email provider:
To send emails using nodemon-helper, you need to configure an email service. You can use Gmail or any other SMTP-compatible service.

For Gmail users:
Enable "Less Secure Apps" in your Gmail account settings or generate an App-Specific Password if using 2-factor authentication.
Use this app password in the .env file as your email access key.
2. Install Nodemailer (if not installed):
While nodemon-helper has Nodemailer as a dependency, you may need to install it separately if you are using other custom configurations.

To install Nodemailer, run:
npm install nodemailer

Usage
After completing the installation and setup, you can start using the package in your Node.js project.

1. Import the NodemonHelper module:
In your main JavaScript file, import the nodemon-helper module:
const NodemonHelper = require('nodemon-helper');

2. Initialize NodemonHelper with your email and password:
You can initialize the helper by passing your email and email access key (app password) to the NodemonHelper constructor:

const helper = new NodemonHelper(process.env.EMAIL_USER, process.env.EMAIL_PASS);

3. Generate OTP (4 or 6 digits):
The generateOtp method allows you to create an OTP. You can specify the length (either 4 or 6 digits):

const otp = helper.generateOtp(6); // Generate a 6-digit OTP
console.log(`Generated OTP: ${otp}`);

4. Send OTP via email:
Once the OTP is generated, you can send it to the recipient's email address using the sendOtp method:

helper.sendOtp('recipient-email@example.com', otp)
  .then(() => {
    console.log('OTP sent successfully!');
  })
  .catch((err) => {
    console.error('Error sending OTP:', err);
  });

5. Send a custom message via email:
In addition to OTPs, you can also send custom messages to recipients:

javascript
Copy code

helper.sendMessage('recipient-email@example.com', 'Your custom message here!')
  .then(() => {
    console.log('Message sent successfully!');
  })
  .catch((err) => {
    console.error('Error sending message:', err);
  });

Example project setup:

// Import the package
const NodemonHelper = require('nodemon-helper');
require('dotenv').config();  // To use environment variables

// Initialize the helper
const helper = new NodemonHelper(process.env.EMAIL_USER, process.env.EMAIL_PASS);

// Generate OTP and send it
const otp = helper.generateOtp(6);  // Change length to 4 for 4-digit OTP
console.log(`Generated OTP: ${otp}`);

helper.sendOtp('recipient-email@example.com', otp)
  .then(() => {
    console.log('OTP sent successfully!');
  })
  .catch((err) => {
    console.error('Error sending OTP:', err);
  });

// Send custom message
helper.sendMessage('recipient-email@example.com', 'Your custom message here!')
  .then(() => {
    console.log('Message sent successfully!');
  })
  .catch((err) => {
    console.error('Error sending message:', err);
  });

API Reference
NodemonHelper(email, emailAccessKey)
This constructor initializes the NodemonHelper with your email and access key (password or app-specific password).

email: Your email address (e.g., your-email@example.com).
emailAccessKey: The password or access key for your email provider (e.g., Gmail app password).
generateOtp(length)
Generates an OTP of the specified length. The default is 6 digits, but you can specify 4 digits.

length: Length of the OTP to generate (e.g., 4 or 6).
Returns a string containing the generated OTP.

sendOtp(recipientEmail, otp)
Sends the generated OTP to the specified recipient email address using Nodemailer.

recipientEmail: The email address to send the OTP to.
otp: The OTP to send.
Returns a promise that resolves when the email is sent successfully.

sendMessage(recipientEmail, message)
Sends a custom message to the specified recipient email.

recipientEmail: The email address to send the message to.
message: The message to send.
Returns a promise that resolves when the email is sent successfully.

Troubleshooting
1. I can’t send emails using Gmail:
Ensure that you have enabled "Less Secure Apps" for Gmail, or generate an App-Specific Password if you have 2-factor authentication enabled.
Double-check that the email and access key in your .env file are correct.
2. OTP is not generated correctly:
Ensure that the length parameter passed to generateOtp is a number (4 or 6).
Double-check the length of the generated OTP in the console.
3. Email not sending:
Check the logs for any errors.
Ensure that the email and app password are configured correctly in the .env file.
Check if the email service is having issues or if there are restrictions on your email account.
Contributing
If you would like to contribute to this package, feel free to fork the repository, make improvements, and submit pull requests. All contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.


---

This is the **complete README file** that you can use for your GitHub repository. It contains:

- **Installation steps**.
- **Setup instructions**.
- **Code examples** to show how to use the package.
- **API Reference** for every function in the package.
- **Troubleshooting tips**.

This should be everything you need to include in your README file for users to set up and use the Nodemon Helper package.



