package com.spring.services;

import com.spring.entities.Product;
import com.spring.entities.Review;
import com.spring.repositories.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductService productService;

    @Override
    public List<Review> getAllReviews(Long productId) {
        return productService.getProductById(productId).getReviews();
    }

    @Override
    public Review getReviewById(Long id, Long productId) {
        return productService.getProductById(productId).getReviews().stream().filter(review -> review.getId().equals(id)).findFirst().orElseThrow(() -> new RuntimeException("Review not found with id " + id + " for product " + productId));
    }

    @Override
    public void createReview(Review review, Long productId) {
        review.setProduct(productService.getProductById(productId));
        reviewRepository.save(review);
    }

    @Override
    public void updateReview(Long id, Review review, Long productId) {
        Review review1 = productService.getProductById(productId).getReviews().stream().filter(r -> r.getId().equals(id)).findFirst().orElseThrow(() -> new RuntimeException("Review not found with id " + id + " for product " + productId));
        review1.setRating(review.getRating());
        review1.setReview(review.getReview());
        reviewRepository.save(review1);
    }

    @Override
    public void deleteReview(Long id, Long productId) {
            Product product = productService.getProductById(productId);
            Review review = product.getReviews().stream().filter(r -> r.getId().equals(id)).findFirst().orElseThrow(() -> new RuntimeException("Review not found with id " + id + " for product " + productId));
            product.getReviews().remove(review);
            reviewRepository.deleteById(id);
    }
}
