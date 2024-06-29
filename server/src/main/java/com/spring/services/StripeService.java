package com.spring.services;

import java.util.Map;

public interface StripeService {
    public Object CreateCustomer (String email);
    public Map<String,String> PayAmount (Double price, String email);
}
