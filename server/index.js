const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.post("/stripe/charge", cors(), async (req, res) => {
    console.log("stripe-routes.js 9 | route reached", req.body);
    let { amount, id } = req.body;
    console.log("stripe-routes.js 10 | amount and id", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "Your Company Description",
            payment_method: id,
            confirm: true,
        });
        console.log("stripe-routes.js 19 | payment", payment);

        // mise eplace de node mailer

        // creation du transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS_MAIL
            }
        });

        // mail options
        let mailoptions = {
            from: 'renerugaba38@gmail.com',
            to: 'rugabarj@hotmail.fr',
            subject: 'test',
            text: 'work very well!!!'
        }

        // send mail
        transporter.sendMail(mailoptions, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("success!!!")
            }
        })

        res.json({
            message: "Payment Successful",
            success: true,
        });
    } catch (error) {
        console.log("stripe-routes.js 17 | error", error);
        res.json({
            message: "Payment Failed",
            success: false,
        });
    }
});



app.listen(process.env.PORT_APP || 8080, () => console.log(`This app listen on port ${process.env.PORT_APP || 8080}`))