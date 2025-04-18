package com.pooyan.reactive_product_service.web;

import com.pooyan.reactive_product_service.domain.Product;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private static List<Product> products = List.of(
            new Product(BigInteger.valueOf(1), "product_1", 100, 10),
            new Product(BigInteger.valueOf(2), "product_2", 100, 10),
            new Product(BigInteger.valueOf(3), "product_3", 100, 10),
            new Product(BigInteger.valueOf(4), "product_4", 100, 10),
            new Product(BigInteger.valueOf(5), "product_5", 100, 10)
    );

    @GetMapping
    public Flux<Product> getAll() {
        return Flux.fromIterable(products);
    }

    @PostMapping
    public Mono<Boolean> add(@RequestBody  Product product) {
        return Mono.create(
                p -> Boolean.valueOf(products.add(product))
        );
    }

    @GetMapping("/{productId}")
    public Mono<ResponseEntity<Product>> get(@PathVariable int productId) {
        Product product = products.stream()
                .filter(p -> p.getProductId().equals(BigInteger.valueOf(productId)))
                .findFirst().orElse(null);
        if (product == null)
            return null;

        return Mono.just(ResponseEntity.status(HttpStatusCode.valueOf(400)).body(product));
    }
}
