package com.examplecom.example.demo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String ingredients;

    public user(){
        //deafult constructor
    }

    public user(String Name, String Surname, String Username, String Password, String Email, Int YearOfBirth){
        this.Name = Name;
        this.Surname = Surname;
        this.Username = Username;
        this.Password = Password;
        this.Email = Email;
        this.YearOfBirth = YearOfBirth;
    }
    
}