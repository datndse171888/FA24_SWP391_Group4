package entity;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import org.springframework.data.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;


//@Entity
@Table(name = "dbo_users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    private int id;

    @Column(name = "email",nullable = false)
    private String email;

    @Column(name = "user_display_name",nullable = false)
    private String userDisplayName;

    @Column(name = "about_me",nullable = true)
    private String aboutMe;

    @Column(name = "views",nullable = false)
    private int views;

    @Column(name = "password",nullable = false)
    private String password;

    @Column(name = "creation_date",nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "topic_counts",nullable = false)
    private int TopicCounts;

    @Column(name = "role",nullable = false)
    private String role;

    public User(String email, String userDisplayName, String aboutMe, int views, int topicCounts, String password, LocalDateTime creationDate, String role) {
        this.email = email;
        this.userDisplayName = userDisplayName;
        this.aboutMe = aboutMe;
        this.views = views;
        this.password = password;
        this.creationDate = creationDate;
        this.role = role;
    }
}
