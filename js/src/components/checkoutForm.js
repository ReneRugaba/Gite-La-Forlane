import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import './../form.css'

let style = {

    base: {
        color: 'black',
        fontFamily: 'Avenir',
        fontSize: '12px',
        fontWeight: 'bold',
        fontSmoothing: 'antialiased',
        iconColor:"black",
      '::placeholder': {
        color: 'black',
      },
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }

};

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        console.log("hello")
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        console.log(paymentMethod)
        if (!error) {

            try {
                const { id } = paymentMethod;
                const response = await axios.post(
                    "http://localhost:8080/stripe/charge",
                    {
                        amount: 999,
                        id: id,
                    }
                );

            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <form className='form-card' onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            <CardElement className='form'  options={{ hidePostalCode: true, style: style }} />
            <button className='buttonForm'>Pay</button>
        </form>
    );
}

export default CheckoutForm;
