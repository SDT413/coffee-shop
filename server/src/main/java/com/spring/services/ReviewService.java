package com.spring.services;

import com.spring.entities.Review;

import java.util.List;

public interface ReviewService {
    public List<Review> getAllReviews(Long productId);
    public Review getReviewById(Long id, Long productId);
    public void createReview(Review review, Long productId);
    public void updateReview(Long id, Review review, Long productId);
    public void deleteReview(Long id, Long productId);

}
