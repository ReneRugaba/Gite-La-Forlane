const express = require("express")
const app = express()
require("dotenv").config()
const fs = require("fs")
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
const handlerbar = require("handlebars")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('boostrap', express.static(__dirname + "/node_modules/bootstrap/dist/css"))

// const object = {
//     user: {
//         nom: "nom",
//         prenom: "prenom",
//         email: "email",
//         adresse: {
//             numRue: 0,
//             rue: "rue",
//             codePostal: 0000,
//             ville: "ville"
//         }
//     },
//     transaction: {
//         debut: "date de debut sejour",
//         fin: "date de fin sejour",
//         nombrePersonne: {
//             enfant: 0,
//             adulte: 0
//         },
//         service: {
//             Drap: 0,
//             serviceMenage: 0,
//             taxSejour:1.10
//         },
//         prixUnJour: "prix unitaire sejour",
//         prixHt: 0,
//         prixTtc: 0

//     }
// }


app.post("/stripe/charge", cors(), async (req, res) => {
    let { amount, id } = req.body; // destructuring pour recuper se qui se trouve dans le body

    try {

        // requete vers stripe
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


        let source = fs.readFileSync(__dirname + '/templates/mailClient.handlerbars', 'utf8').toString()
        let template = handlerbar.compile(source)
        let htmltosend = template({
            name: "Dorothée"
        })



        // mail options
        let mailoptions = {
            from: process.env.EMAIL,
            to: 'rugabarj@gmail.com',
            subject: 'test',
            html: htmltosend
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