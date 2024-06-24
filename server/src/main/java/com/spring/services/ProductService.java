package com.spring.services;

import com.spring.entities.Product;

import java.util.List;

public interface ProductService {
    public List<Product> getAllProducts();
    public Product getProductById(Long id);
    public void createProduct(Product product);
    public void updateProduct(Long id, Product product);
    public void deleteProduct(Long id);
    public Product findBySlug(String name);
    void AddImage(Long id, String image);
    void DeleteImage(Long id, String image);
    List<Product> SearchProducts(String keyword);
    List<Product> SortByIncreasingPrice();
    List<Product> SortByDecreasingPrice();
    List<Product> SortByOldest();
    List<Product> SortByNewest();
}
