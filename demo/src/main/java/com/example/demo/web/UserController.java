package com.example.demo.web;


import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/userinfo")
public class UserController {

    @GetMapping
    public String getUser() {
        System.out.println(SecurityContextHolder.getContext().getAuthentication()
                .getName());
        return SecurityContextHolder.getContext().getAuthentication()
                .getName();

    }
}
