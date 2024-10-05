package controller;

import dto.UserDTO;
import entity.User;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.UserService;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class LoginController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDto) {
        if (!userService.checkUserbyEmail(userDto.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email không đúng");
        }

        User user = userService.getUserbyEmail(userDto.getEmail());

        if ("ADMIN".equals(user.getRole())) {
            return ResponseEntity.ok("Admin đăng nhập thành công");
        }

        if (!userService.checkPasswordUser(userDto.getEmail(), userDto.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Mật khẩu không đúng");
        }

        return ResponseEntity.ok("User login successful");
    }
}
