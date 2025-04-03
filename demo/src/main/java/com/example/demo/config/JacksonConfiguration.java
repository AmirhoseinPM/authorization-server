//package com.example.demo.config;
//
//import com.example.demo.domain.entity.User;
//import com.fasterxml.jackson.annotation.JsonTypeInfo;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.jackson2.SecurityJackson2Modules;
//import org.springframework.security.oauth2.server.authorization.jackson2.OAuth2AuthorizationServerJackson2Module;
//
//@Configuration
//public class JacksonConfiguration {
//
//    @Bean
//    public Jackson2ObjectMapperBuilderCustomizer jacksonCustomizer() {
//        return builder -> {
//            // اضافه کردن ماژول‌های امنیتی Spring
//            builder.modulesToInstall(modules -> modules.addAll(SecurityJackson2Modules.getModules(getClass().getClassLoader())));
//            // اضافه کردن ماژول OAuth2 Authorization Server
//            builder.modulesToInstall(new OAuth2AuthorizationServerJackson2Module());
//            // اضافه کردن کلاس User به لیست سفید
//            builder.postConfigurer(objectMapper -> {
//                objectMapper.registerSubtypes(User.class, UsernamePasswordAuthenticationToken.class);
//                objectMapper.activateDefaultTyping(
//                        objectMapper.getPolymorphicTypeValidator(),
//                        ObjectMapper.DefaultTyping.NON_FINAL,
//                        JsonTypeInfo.As.PROPERTY
//                );
//            });
//        };
//    }
//}
