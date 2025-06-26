package com.examplecom.example.demo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Users", uniqueConstraints = @UniqueConstraint(columnNames = {"username", "email"}))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    private String name;
    private String surname;
    private String password;
    private int yearOfBirth;

    public User() {
        // default constructor
    }

    public User(String name, String surname, String username, String password, String email, int yearOfBirth) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.yearOfBirth = yearOfBirth;
    }
    // Lombok @Data generates getters and setters
}