package com.example.demo.config;
import com.example.demo.domain.entity.Client;
import com.example.demo.domain.entity.User;
import com.example.demo.domain.repository.ClientRepository;
import com.example.demo.domain.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class DataInitializer {

    private final UserRepository userRepository;
    private final ClientRepository clientRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(
            UserRepository userRepository,
            ClientRepository clientRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.clientRepository = clientRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void init() {
        // ایجاد کاربر نمونه
        User user = new User();
        user.setUsername("user");
        user.setPassword(passwordEncoder.encode("password"));
//        user.setUsername("user");
//        user.setPassword(passwordEncoder.encode("password"));
//        user.setAuthorities(Set.of("ROLE_USER"));
//        user.setAccountNonExpired(true);
//        user.setAccountNonLocked(true);
//        user.setCredentialsNonExpired(true);
//        user.setEnabled(true);
        System.out.println(userRepository.save(user));

        // ایجاد کلاینت برای grant_type=client_credentials
        Client clientCredentialsClient = new Client();
        clientCredentialsClient.setId("1");
        clientCredentialsClient.setClientId("client");
        clientCredentialsClient.setClientSecret(passwordEncoder.encode("secret"));
        clientCredentialsClient.setClientAuthenticationMethods(ClientAuthenticationMethod.CLIENT_SECRET_BASIC.getValue());
        clientCredentialsClient.setAuthorizationGrantTypes(AuthorizationGrantType.CLIENT_CREDENTIALS.getValue());
        clientCredentialsClient.setScopes("read,write");
//        clientCredentialsClient.setRequireProofKey(false);
        System.out.println(clientRepository.save(clientCredentialsClient));

        // ایجاد کلاینت برای grant_type=authorization_code
        Client authorizationCodeClient = new Client();
        authorizationCodeClient.setId("2");
        authorizationCodeClient.setClientId("auth-code-client");
        authorizationCodeClient.setClientSecret(passwordEncoder.encode("secret"));
        authorizationCodeClient.setClientAuthenticationMethods(ClientAuthenticationMethod.CLIENT_SECRET_BASIC.getValue());
        authorizationCodeClient.setAuthorizationGrantTypes(
                AuthorizationGrantType.AUTHORIZATION_CODE.getValue()+","+
                AuthorizationGrantType.REFRESH_TOKEN.getValue()
        );
        authorizationCodeClient.setRedirectUris("http://127.0.0.1:8080/login/oauth2/code/auth-code-client");
        authorizationCodeClient.setScopes("openid"+","+ "profile"+","+ "email"+","+ "read"+","+"write");
//        authorizationCodeClient.setRequireProofKey(false);
        System.out.println(clientRepository.save(authorizationCodeClient));
    }
}
