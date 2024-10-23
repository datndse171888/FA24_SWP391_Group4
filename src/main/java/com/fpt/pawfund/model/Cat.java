package com.fpt.pawfund.model;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Data
@Entity
@Table(name = "cats")
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Cat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "catID", nullable = false)
    private int catID;

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "gender", length = 1)

    private String gender;

    private int age;

    private Double weight;

    private int vaccinated; // 0 : unknown ; 1 : not yet ; 2: already

    private boolean status; // false : inactive ; true : active

    @Column(name = "breed", length = 100)
    private String breed;

    @Column(name = "introduction", columnDefinition = "TEXT")
    private String introduction;

    @ManyToOne
    @JoinColumn(name = "shelterID", referencedColumnName = "accountID", foreignKey = @ForeignKey(name = "cats_ibfk_1"))
    private Account shelter;

//    @ManyToOne
//    @JoinColumn(name = "imageID", referencedColumnName = "imageID", foreignKey = @ForeignKey(name = "cats_ibfk_2"))
//    private String image;

}
