package com.fpt.pawfund.model.request;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
 @AllArgsConstructor
@NoArgsConstructor
public class LoginRequest {

    @NotBlank(message = "Gmail is mandatory")
    @Email(message = "Invalid email format")
    private String gmail;

    @NotBlank(message = "Password is mandatory")
    private String password;
}

