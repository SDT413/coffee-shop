package com.spring.controllers;

import com.spring.services.StripeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/stripe")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StripeController {

    private final StripeService stripeService;

    @GetMapping("/create-payment-intent")
    public Map<String,String> createPaymentIntentGet(@RequestParam Double price, @RequestParam String email) {
        return stripeService.PayAmount(price, email);
    }
}
