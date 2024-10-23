package com.fpt.pawfund.model.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CatDTO {
    private int id;
    private String name;
    private int age;
    private String gender;
    private Double weight;
    private int height;
    private String breed;
    private String description;
    private String imageID;
}
