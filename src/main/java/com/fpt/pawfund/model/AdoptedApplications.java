package com.fpt.pawfund.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "AdoptedApplications")
public class AdoptedApplications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adoptedApplicationID")
    private int id;

    @Column(name = "catID")
    private int catID;

    @Column(name = "adopterID")
    private int adopterID;

    @Column(name = "status")
    private String status;

    @Column(name = "createdDate")
    @CreatedDate
    private Date createdDate;
}
