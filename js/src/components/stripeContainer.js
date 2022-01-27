import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './checkoutForm';

const PUBLIC_KEY = "pk_test_51KLpFcGom92AgyfdH0X49uixqvcqE3RLCQtZ2LhqZ4P3XKcFG8sb0Dtr7Bm0YUy6xi2HBLoMZwyLIjolGD9eT2zx00h4oEvFQn";



const stripeTestPromise = loadStripe(PUBLIC_KEY);



function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default StripeContainer;
