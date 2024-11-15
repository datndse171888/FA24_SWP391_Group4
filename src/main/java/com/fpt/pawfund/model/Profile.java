package com.fpt.pawfund.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "profiles")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer profileID;

    private String name;
    private String address;
    private String gender;
    private String phone_number;
    private String avatar;
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

}
