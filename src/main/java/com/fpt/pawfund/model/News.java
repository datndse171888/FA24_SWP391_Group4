package com.fpt.pawfund.model;
import jakarta.persistence.*;
import lombok.*;
import java.sql.Blob;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer newsID;

    @Column(nullable = false)  // title bắt buộc
    private String title;

    @Column(nullable = false, length = 5000)  // content bắt buộc và độ dài tối đa 5000
    private String content;

    @Lob
    private Blob image;

    @Column(nullable = false)  // shelterID bắt buộc
    private Integer shelterID;
}