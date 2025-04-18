package com.pooyan.reactive_product_service.domain;

import java.math.BigInteger;

public class Product {

    private BigInteger productId;

    private String name;
    private int price;
    private int available;

    public Product(BigInteger productId, String name, int price, int available) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.available = available;
    }

    public BigInteger getProductId() {
        return productId;
    }

    public void setProductId(BigInteger productId) {
        this.productId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAvailable() {
        return available;
    }

    public void setAvailable(int available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", available=" + available +
                '}';
    }
}
