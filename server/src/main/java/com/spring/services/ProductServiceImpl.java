package com.spring.services;

import com.spring.entities.Product;
import com.spring.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts(String category, String search, String sort, String order) {
        if (category != null && search != null && sort != null) {
            if (sort.equals("price")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByCategoryAndNameContainingOrderByPriceAsc(category, search);
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByCategoryAndNameContainingOrderByPriceDesc(category, search);
                    }
                }
            }
            if (sort.equals("date")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByCategoryAndNameContainingOrderByCreatedAtAsc(category, search);
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByCategoryAndNameContainingOrderByCreatedAtDesc(category, search);
                    }
                }
            }
        }
        if (category != null && sort != null) {
            if (sort.equals("price")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByCategoryOrderByPriceAsc(category);
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByCategoryOrderByPriceDesc(category);
                    }
                }
            }
            if (sort.equals("date")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByCategoryOrderByCreatedAtAsc(category);
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByCategoryOrderByCreatedAtDesc(category);
                    }
                }
            }
        }
        if (category != null && search != null) {
            return productRepository.findAllByCategoryAndNameContaining(category, search);
        }
        if (category != null) {
            return productRepository.findAllByCategory(category);
        }
        if (search != null) {
            return productRepository.SearchProducts(search);
        }
        if (sort != null) {
            if (sort.equals("price")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByOrderByPriceAsc();
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByOrderByPriceDesc();
                    }
                }
            }
            if (sort.equals("date")) {
                if (order != null) {
                    if (order.equals("asc")) {
                        return productRepository.findAllByOrderByCreatedAtAsc();
                    } else if (order.equals("desc")) {
                        return productRepository.findAllByOrderByCreatedAtDesc();
                    }
                }
            }
        }
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
}
