package com.fpt.pawfund.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountID;

    private String email;

    private String password;

    private boolean isActiveStatus;

    private String activationToken;
    private String avatar;

    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;
    @ManyToOne
    @JoinColumn(name = "roleID")
    private Role role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "profileID", referencedColumnName = "profileID")
    private Profile profile;
}
