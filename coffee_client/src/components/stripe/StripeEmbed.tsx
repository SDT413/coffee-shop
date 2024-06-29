import React from 'react';
import "./styles/styles.css"

import PaymentForm from './UI/RightHalf/PaymentForm/PaymentForm';

interface StripeEmbedProps {
    setShowStripeEmbed: (value: boolean) => void;
    price: number;
    email: string;
}

function StripeEmbed({setShowStripeEmbed, price, email}:StripeEmbedProps) {
  return (
    <div className="App">
          <PaymentForm setShowStripeEmbed={setShowStripeEmbed} price={price} email={email}/>
   </div>
  );
}

export default StripeEmbed;
