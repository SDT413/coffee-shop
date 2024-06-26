package com.spring.repositories;

import com.spring.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    //TODO: remove First from method name
    Product findFirstBySlug(String name);

    List<Product> findAllByCategory(String category);

    List<Product> findAllByOrderByPriceAsc();

    List<Product> findAllByOrderByPriceDesc();

    List<Product> findAllByOrderByCreatedAtDesc();

    List<Product> findAllByOrderByCreatedAtAsc();

    List<Product> findAllByCategoryAndNameContainingIgnoreCaseOrderByPriceAsc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingIgnoreCaseOrderByPriceDesc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingIgnoreCaseOrderByCreatedAtAsc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingIgnoreCaseOrderByCreatedAtDesc(String category, String search);

    List<Product> findAllByCategoryOrderByPriceAsc(String category);

    List<Product> findAllByCategoryOrderByPriceDesc(String category);

    List<Product> findAllByCategoryOrderByCreatedAtAsc(String category);

    List<Product> findAllByCategoryOrderByCreatedAtDesc(String category);

    List<Product> findAllByCategoryAndNameContainingIgnoreCase(String category, String search);

    List<Product> findAllByNameContainingIgnoreCaseOrderByPriceAsc(String search);

    List<Product> findAllByNameContainingIgnoreCaseOrderByPriceDesc(String search);

    List<Product> findAllByNameContainingIgnoreCaseOrderByCreatedAtAsc(String search);

    List<Product> findAllByNameContainingIgnoreCaseOrderByCreatedAtDesc(String search);

    List<Product> findAllByNameContainingIgnoreCase(String search);
}
