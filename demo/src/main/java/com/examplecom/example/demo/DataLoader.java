package com.examplecom.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initDatabase(UserRepository repo) {
        return args -> {
           /*repo.save(new User("Alice", "Smith", "alice", "pass1", "alice@example.com", 1986));
            repo.save(new User("Bob",   "Jones", "bobby", "pass2", "bob@example.com",   1979));*/
        };
    }
}