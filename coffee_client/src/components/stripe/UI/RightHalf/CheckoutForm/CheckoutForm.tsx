import React, {FC, useEffect, useState} from 'react';
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {StripePaymentElementOptions} from "@stripe/stripe-js";
import styles from '../PaymentForm/Payment.module.css';

interface Props {
    setShowStripeEmbed: (value: boolean) => void;
    price: number;
}

const CheckoutForm:FC<Props> = ({setShowStripeEmbed, price}) => {
  
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    );
    if (!clientSecret) {
        return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent!.status) {
            case "succeeded":
                new Promise((resolve) => {
                setTimeout(resolve, 1000);
                }).then(() => {
                setMessage("Payment succeeded!");
                });
                break;
            case "processing":
                setMessage("Your payment is processing.");
                break;
            case "requires_payment_method":
                setMessage("Your payment was not successful, please try again.");
                break;
            default:
                setMessage("Something went wrong.");
                break;
        }
    });
    }, [stripe]);

    const handlePaymentSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(!stripe || !elements) return;

        setIsLoading(true);

        const intent = await stripe.confirmPayment({
            elements,
            confirmParams:{
                return_url: "https://clients.thefbamachine.co"
            }
        });
        if(intent.error.type === 'card_error' || intent.error.type === 'validation_error'){
            console.log(intent.error.message);
            alert(intent.error.message)
        }else{
            console.log('unexpected error');
            alert('Your payment was not successful, please try with different payment data.');
        }
        setIsLoading(false);
    }


    const paymentElementOptions : StripePaymentElementOptions
        = {
        layout: "tabs",
    }

    
    return (
        <form onSubmit={handlePaymentSubmit} className={styles.payment_form}>
            <h3 id = "payment-details-label" className={styles.payment_header}
            >Payment: ${price}</h3>
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <div className={styles.buttons_container}>
            <button disabled={isLoading || !stripe || !elements} id="payment-submition">
            <span id="button-text" className={styles.payment_button}>
                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay"}
            </span>
            </button>
            <div onClick={() => setShowStripeEmbed(false)} className={styles.payment_button}>Cancel</div>
            </div>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
    
  
}

export default CheckoutForm;