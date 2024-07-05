import { Elements } from '@stripe/react-stripe-js';
import React, { FC, useEffect, useState } from 'react'
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {
    Appearance,
    loadStripe,
    StripeElementsOptions
} from '@stripe/stripe-js';
import "./Payment.module.css";
import {useCreatePaymentIntent} from "@/hooks/Query/useCreatePaymentIntent";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY ?? '');

interface PaymentFormProps {
    price: number;
    email: string;
    setShowStripeEmbed: (value: boolean) => void;
}
const PaymentForm:FC<PaymentFormProps> = ({price, email, setShowStripeEmbed}) => {
    const [clientSecret, setClientSecret] = useState("");
    const paymentIntent = useCreatePaymentIntent(price, email, setClientSecret);
    const handlePaymentIntent = async () => {
        try {
            paymentIntent.mutate();

        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        handlePaymentIntent();
    }, []);

    const appearance : Appearance
        = {
        theme: 'stripe',
    };
    const options : StripeElementsOptions
        = {
        clientSecret,
        appearance,
    };


    return (
    <div className='wrapper'>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm setShowStripeEmbed={setShowStripeEmbed} price={price}/>
            </Elements>
        )}
    </div>
  )
}

export default PaymentForm