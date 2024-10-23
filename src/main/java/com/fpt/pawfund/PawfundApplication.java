package com.fpt.pawfund;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class PawfundApplication {

    public static void main(String[] args) {
        SpringApplication.run(PawfundApplication.class, args);
    }

}
