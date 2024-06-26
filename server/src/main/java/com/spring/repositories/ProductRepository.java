package com.spring.repositories;

import com.spring.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    //TODO: remove First from method name
    Product findFirstBySlug(String name);
    @Query("SELECT p FROM Product p WHERE lower(p.name) LIKE lower(concat('%', ?1,'%'))")
    List<Product> SearchProducts(String keyword);

    List<Product> findAllByCategory(String category);

    List<Product> findAllByOrderByPriceAsc();

    List<Product> findAllByOrderByPriceDesc();

    List<Product> findAllByOrderByCreatedAtDesc();

    List<Product> findAllByOrderByCreatedAtAsc();

    List<Product> findAllByCategoryAndNameContainingOrderByPriceAsc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingOrderByPriceDesc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingOrderByCreatedAtAsc(String category, String search);

    List<Product> findAllByCategoryAndNameContainingOrderByCreatedAtDesc(String category, String search);

    List<Product> findAllByCategoryOrderByPriceAsc(String category);

    List<Product> findAllByCategoryOrderByPriceDesc(String category);

    List<Product> findAllByCategoryOrderByCreatedAtAsc(String category);

    List<Product> findAllByCategoryOrderByCreatedAtDesc(String category);

    List<Product> findAllByCategoryAndNameContaining(String category, String search);
}
