package com.spring.services;

import com.spring.entities.Product;
import com.spring.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }


    @Override
    public void createProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public void updateProduct(Long id, Product product) {
        productRepository.findById(id)
                .map(p -> {
                    p.setName(product.getName());
                    p.setDescription(product.getDescription());
                    p.setPrice(product.getPrice());
                    p.setSlug(product.getSlug());
                    p.setImages(product.getImages());
                    productRepository.save(p);
                    return p;
                }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }
    @Override
    public void deleteProduct(Long id) {
      productRepository.deleteById(id);
    }

    @Override
    public Product findBySlug(String name) {
        return productRepository.findFirstBySlug(name);
    }

    @Override
    public void AddImage(Long id, String image) {
        productRepository.findById(id)
                .map(p -> {
                    p.getImages().add(image);
                    productRepository.save(p);
                    return p;
                }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));
    }

    @Override
    public void DeleteImage(Long id, String image) {
        productRepository.findById(id)
                .map(p -> {
                    p.getImages().remove(image);
                    productRepository.save(p);
                    return p;
                }).orElseThrow(() -> new RuntimeException("Product not found with id " + id));

    }
    @Override
    public List<Product> SearchProducts(String keyword) {
        return productRepository.SearchProducts(keyword);
    }

    @Override
    public List<Product> SortByIncreasingPrice() {
        return productRepository.findAllByOrderByPriceAsc();
    }

    @Override
    public List<Product> SortByDecreasingPrice() {
        return productRepository.findAllByOrderByPriceDesc();
    }

    @Override
    public List<Product> SortByNewest() {
        return productRepository.findAllByOrderByCreatedAtDesc();
    }
    @Override
    public List<Product> SortByOldest() {
        return productRepository.findAllByOrderByCreatedAtAsc();
    }
}
