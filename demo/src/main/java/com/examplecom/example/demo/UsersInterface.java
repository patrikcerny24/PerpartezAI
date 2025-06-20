package com.example.demo.repository;

import com.example.demo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

@repository
public interface RecipeRepository extends JpaRepository<Users, Long> {
}
