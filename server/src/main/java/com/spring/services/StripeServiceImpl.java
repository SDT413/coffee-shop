package com.spring.services;

import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StripeServiceImpl implements StripeService {

    public StripeServiceImpl() {
        Stripe.apiKey = "sk_test_51OFyYpFa7pRbfFJoN3KZ8GebuIiH22c9tfbh9We3A3VkIEQsCkf26dtCJhZ19outfXr7TpygDIwdNHewALKEmWEi00eorzP86s";
    }

    public Object CreateCustomer (String email) {
        return null;
    }
    public Map<String,String>
    PayAmount(Double price, String email) {
        List<String> paymentMethodTypes = new ArrayList<>();
        paymentMethodTypes.add("card");
          Integer sum_to_pay_in_full_dollars = (int) (price * 100);
        //const customer = await this.CreateCustomer(email);
        Map<String, Object> params = new HashMap<>();
        params.put("amount", sum_to_pay_in_full_dollars);
        params.put("currency", "usd");
        params.put("payment_method_types", paymentMethodTypes);
        try {
           //PaymentIntent.create(params).getClientSecret();
            return new HashMap<>(
                    Map.of("clientSecret", PaymentIntent.create(params).getClientSecret())
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

}
