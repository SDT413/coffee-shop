package com.spring.resources;

import com.spring.entities.Product;
import com.spring.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ProductResource {
    private final ProductService productService;

    @GetMapping("")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
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
    @GetMapping("/search/{keyword}")
    public List<Product> SearchProducts(@PathVariable String keyword) {
        return productService.SearchProducts(keyword);
    }
    @GetMapping("/sort=price&order=asc")
    public List<Product> SortByIncreasingPrice() {
        return productService.SortByIncreasingPrice();
    }
    @GetMapping("/sort=price&order=desc")
    public List<Product> SortByDecreasingPrice() {
        return productService.SortByDecreasingPrice();
    }
    @GetMapping("/sort=date&order=asc")
    public List<Product> SortByOldest() {
        return productService.SortByOldest();
    }
    @GetMapping("/sort=date&order=desc")
    public List<Product> SortByNewest() {
        return productService.SortByNewest();
    }

}
