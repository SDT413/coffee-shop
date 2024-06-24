package com.spring.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Double price;
    private String slug;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<Review> reviews;
    @ElementCollection
    @CollectionTable(name = "product_images", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "images", columnDefinition = "text")
    private List<String> images;
    private Date createdAt;
    private Date updatedAt;

@PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

@PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

}
