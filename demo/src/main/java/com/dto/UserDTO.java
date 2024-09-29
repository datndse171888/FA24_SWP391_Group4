package com;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

public class UserDTO implements Serializable {
    private String email;
    private String userDisplayName;
    private String password;
    private String checkPass;

    public UserDTO(String email, String userDisplayName, String password) {
        this.email = email;
        this.userDisplayName = userDisplayName;
        this.password = password;
    }
}