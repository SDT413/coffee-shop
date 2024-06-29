package com.spring.controllers;

import com.spring.entities.Review;
import com.spring.services.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {
    private final ReviewService reviewService;
    @GetMapping("/{productId}/reviews")
    public List<Review> getAllReviews(@PathVariable("productId") Long productId) {
        return reviewService.getAllReviews(productId);
    }
    @GetMapping("/{productId}/reviews/{id}")
    public Review getReviewById(@PathVariable("id") Long id, @PathVariable("productId") Long productId) {
        return reviewService.getReviewById(id, productId);
    }
    @PostMapping("/{productId}/reviews")
    public void createReview(@RequestBody Review review, @PathVariable("productId") Long productId) {
        reviewService.createReview(review, productId);
    }
    @PutMapping("/{productId}/reviews/{id}")
    public void updateReview(@PathVariable("id") Long id, @RequestBody Review review, @PathVariable("productId") Long productId) {
        reviewService.updateReview(id, review, productId);
    }
    @DeleteMapping("/{productId}/reviews/{id}")
    public void deleteReview(@PathVariable("id") Long id,  @PathVariable("productId") Long productId) {
        reviewService.deleteReview(id, productId);
    }

}
