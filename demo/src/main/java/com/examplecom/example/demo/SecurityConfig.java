// SecurityConfig.java
package com.examplecom.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
            }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            http
                    .authorizeHttpRequests(authz -> authz
                            .requestMatchers("/h2-console/**").permitAll()
                            .anyRequest().authenticated()
                    )
                    .formLogin()
                    .and()
                    .csrf(csrf -> csrf
                            .ignoringRequestMatchers("/h2-console/**")
                    )
                    .headers(headers -> headers
                            .frameOptions().sameOrigin() // To allow H2 console in iframe
                    );

            return http.build();
            }
        }

