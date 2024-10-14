package com.fpt.pawfund.model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "cats")
public class Cat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int catID;

    @Column(length = 100, nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    private int age;

    @Column(precision = 5, scale = 2)
    private BigDecimal weight;

    @Column(length = 100)
    private String breed;

    @Column(columnDefinition = "TEXT")
    private String introduction;

    private int shelterID;
    private int imageID;


}

