package com.spring.services;

import com.spring.entities.Product;
import jdk.jfr.Category;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    public List<Product> getAllProducts(String category, String search, String sort, String order, Integer excludeId, String page, String limit);
    public Product getProductById(Long id);
    public void createProduct(Product product);
    public void updateProduct(Long id, Product product);
    public void deleteProduct(Long id);
    public Product findBySlug(String name);
    void AddImage(Long id, String image);
    void DeleteImage(Long id, String image);
}
