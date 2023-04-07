const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const { subject, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: '',
        },
    });

    const mailOptions = {
        from: 'iitg@gmail.com',
        to: '',
        subject: subject,
        text: text,
        html: `
        <div style="padding: 2vw,border-style: solid>
        <h3>Donation Portal</h3>
        <ul>
            <li>${subject}</li>
            <li>${text}</li>
        </ul>
        <h4>Thank you</h4>
        </div>
        `
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.json({ message: 'Email sent!!!' });
        }
    }
    );
}

module.exports = sendMail;