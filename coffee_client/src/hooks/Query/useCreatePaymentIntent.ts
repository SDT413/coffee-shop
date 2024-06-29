import {useMutation} from "@tanstack/react-query";
import {CreatePaymentIntent} from "@/api/PaymentAPI";


export const useCreatePaymentIntent = (amount:number, email: string, setClientSecret: any) => {
    return useMutation({
        mutationFn: () => {
            return CreatePaymentIntent({amount, email});
        },
        onError: (error: Error) => {
            console.log(error);
            console.log('Something went wrong in useCreatePaymentIntent');
        },
        onSuccess: (res: any) => {
            setClientSecret(res.clientSecret);
            //setClientSecret("pi_3OJGQHBbNnSzdEYh1zbeKY9O_secret_Tmcx8LRuenoCtnf2Aw4uEQcIu");
        }
    });
}