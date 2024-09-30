import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Create a transporter for nodemailer
            let transporter = nodemailer.createTransport({
                // Configuration for your email service
                // Example using Gmail
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            });

            // Email options
            const mailOptions = {
                from: req.body.email, // sender address
                to: 'jamespan@ucanpay.ca', // list of receivers
                subject: `New message from ${req.body.name}`,
                text: req.body.message,
                // You can also use HTML content
            };

            // Send email
            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
