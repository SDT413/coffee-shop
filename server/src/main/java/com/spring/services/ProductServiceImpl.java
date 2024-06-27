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
    public List<Product> getAllProducts(String category, String search, String sort, String order, Integer excludeId, String page, String limit) {
        if (category != null && category.equals("all") || Objects.equals(category, "")) {
            category = null;
        }
        if (search != null) {
            search = search.trim();
            search = search.toLowerCase();
        }
        List<Product> result = null;
        if (category != null && search != null && sort != null) {
            if (order != null) {
            if (sort.equals("price")) {
                    if (order.equals("asc")) {
                       result = productRepository.findAllByCategoryAndNameContainingIgnoreCaseOrderByPriceAsc(category, search);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByCategoryAndNameContainingIgnoreCaseOrderByPriceDesc(category, search);
                    }
                }
            else if (sort.equals("date")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByCategoryAndNameContainingIgnoreCaseOrderByCreatedAtAsc(category, search);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByCategoryAndNameContainingIgnoreCaseOrderByCreatedAtDesc(category, search);
                    }
            }
            }
        }
        else if (category != null && search != null) {
            result = productRepository.findAllByCategoryAndNameContainingIgnoreCase(category, search);
        }
        else if (category != null && sort != null) {
            if (order != null) {
            if (sort.equals("price")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByCategoryOrderByPriceAsc(category);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByCategoryOrderByPriceDesc(category);
                    }
                }
            else if (sort.equals("date")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByCategoryOrderByCreatedAtAsc(category);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByCategoryOrderByCreatedAtDesc(category);
                    }
            }
            }
        }
        else if (search != null && sort != null) {
            if (order != null) {
            if (sort.equals("price")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByNameContainingIgnoreCaseOrderByPriceAsc(search);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByNameContainingIgnoreCaseOrderByPriceDesc(search);
                    }
                }
            else if (sort.equals("date")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByNameContainingIgnoreCaseOrderByCreatedAtAsc(search);
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByNameContainingIgnoreCaseOrderByCreatedAtDesc(search);
                    }
            }
            }
        }
        else if (category != null) {
            result = productRepository.findAllByCategory(category);
        }
        else if (search != null) {
            result = productRepository.findAllByNameContainingIgnoreCase(search);
        }
        else if (sort != null) {
            if (order != null) {
            if (sort.equals("price")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByOrderByPriceAsc();
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByOrderByPriceDesc();
                    }
                }
            else if (sort.equals("date")) {
                    if (order.equals("asc")) {
                        result = productRepository.findAllByOrderByCreatedAtAsc();
                    } else if (order.equals("desc")) {
                        result = productRepository.findAllByOrderByCreatedAtDesc();
                    }
            }
            }
        }
        else {
            result = productRepository.findAll();
        }
        if (excludeId != null && excludeId > 0 && result != null) {
            result.removeIf(p -> Objects.equals(p.getId().intValue(), excludeId));
        }
        if (page != null && limit != null && result != null) {
            int p = Integer.parseInt(page);
            int l = Integer.parseInt(limit);
            int start = (p - 1) * l;
            int end = Math.min(start + l, result.size());
            result = result.subList(start, end);
        }
        return result;
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
