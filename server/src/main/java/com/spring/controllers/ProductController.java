package com.spring.controllers;

import com.spring.entities.Product;
import com.spring.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    private final ProductService productService;

    @GetMapping("")
    public List<Product> getAllProducts(@RequestParam(required = false) String category,
                                        @RequestParam(required = false) String search,
                                        @RequestParam(required = false) String sort,
                                        @RequestParam(required = false) String order,
                                        @RequestParam(required = false) Integer excludeId,
                                        @RequestParam(required = false) String page,
                                        @RequestParam(required = false) String limit
                                        ) {
            return productService.getAllProducts(category, search, sort, order, excludeId, page, limit);
    }
    @GetMapping("/slug/{slug}")
    public Product findBySlug(@PathVariable String slug) {
        return productService.findBySlug(slug);
    }
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }
    @PostMapping("")
    public void createProduct(@RequestBody Product product) {
        productService.createProduct(product);
    }
    @PutMapping("/{id}")
    public void updateProduct(@PathVariable Long id, @RequestBody Product product) {
         productService.updateProduct(id, product);
    }
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PostMapping("/{id}/images")
    public void AddImage(@PathVariable Long id, @RequestBody String image) {
        productService.AddImage(id, image);
    }
    @DeleteMapping("/{id}/images")
    public void DeleteImage(@PathVariable Long id, @RequestBody String image) {
        productService.DeleteImage(id, image);
    }


}
