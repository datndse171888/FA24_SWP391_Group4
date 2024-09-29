package com.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "dbo_users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;

    private String UserDisplayName;

    private String AboutMe;

    private int Views;

    private int TopicCounts;

    private String Password;

    private String CreationDate;

    private String Role;


    public User(String Email, String userDisplayName, String aboutMe, int views, int topicCounts, String password, String creationDate, String role) {
        email = Email;
        UserDisplayName = userDisplayName;
        AboutMe = aboutMe;
        Views = views;
        TopicCounts = topicCounts;
        Password = password;
        CreationDate = creationDate;
        Role = role;
    }
}

