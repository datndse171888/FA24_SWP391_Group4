package com.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Profile implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name",nullable = false)
    private String FirstName;

    @Column(name = "middel_name",nullable = false)
    private String MiddleName;

    @Column(name = "last_name",nullable = false)
    private String LastName;

    @Column(name ="date_of_birth",nullable = false)
    private String DateofBirth;

    @Column(name="img_url",nullable = false)
    private String ImgUrl;

    @Column(name="gender",nullable = false)
    private String Gender;

    @Column(name="adress",nullable = false)
    private String Adress;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    public Profile(String firstName, String lastName, String middleName,String dateofBirth, String imgUrl, String gender, String adress, User user) {
        FirstName = firstName;
        LastName = lastName;
        MiddleName = middleName;
        DateofBirth = dateofBirth;
        ImgUrl = imgUrl;
        Gender = gender;
        Adress = adress;
        this.user = user;
    }
}
