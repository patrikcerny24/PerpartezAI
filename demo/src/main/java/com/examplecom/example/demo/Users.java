package com.examplecom.example.demo;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Users")

public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String Name;
    private String Surname;
    private String Username;
    private String Password;
    private String Email;
    private String YearOfBirth;

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
    
    //getters

    public Long getId(){
        return.id;
    }

    public String getName(){
        return.Name;
    }

    public String getSurname(){
        return.Surname;
    }

    public String getUsername(){
        return.Username;
    }

    public String getPassword(){
        return.Password;
    }

    public String getEmail(){
        return.Email;
    }

    public Int getYearOfBirth(){
        return.YearOfBirth;
    }
    
    //setters

    public void setName(){
        this.Name = Name;
    }

    public void setSurname(){
        this.Surname = Surname;
    }

    public void setUsername(){
        this.Username = Username;
    }

    public void setEmail(){
        this.Email = Email;
    }

    public void setPassword(){
        this.Password = Password;
    }

    public void setYearOfBirth(){
        this.YearOfBirth = YearOfBirth;
    }
}