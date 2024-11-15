package com.fpt.pawfund.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Blob;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "events")
public class Events {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventID;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(nullable = false, length = 250)
    private String content;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date startDay;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date endDay;

    @Column(nullable = false)
    private Integer shelterID;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10, columnDefinition = "VARCHAR(10) DEFAULT 'WAITING'")
    private Status status = Status.WAITING;

    @Lob
    @Column(nullable = false)
    private Blob image;

    public enum Status {
        WAITING,  // chưa diễn ra
        STARTING, // đang diễn ra
        END       // đã kết thúc
    }

}
