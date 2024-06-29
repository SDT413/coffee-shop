import axios from "axios";

export const CreatePaymentIntent = async ({ amount, email }: { amount: number, email: string }) => {
    const res = await axios.get('http://localhost:8080/stripe/create-payment-intent', {
        params: {
            price: amount,
            email: email
        }
    });
    return res.data;
}