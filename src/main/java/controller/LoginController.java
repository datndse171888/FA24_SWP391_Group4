package controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.UserService;
import dto.UserDTO;
import entity.User;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class LoginController {

    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDto) {
        // Kiểm tra email có tồn tại không
        if (!userService.checkUserbyEmail(userDto.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thông tin đăng nhập không hợp lệ");
        }

        // Lấy thông tin người dùng
        User user = userService.getUserbyEmail(userDto.getEmail());

        // Kiểm tra vai trò
        if ("ADMIN".equals(user.getRole())) {
            return ResponseEntity.ok("Admin đăng nhập thành công");
        }

        // Kiểm tra mật khẩu
        if (!userService.checkPasswordUser(userDto.getEmail(), userDto.getPassword())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thông tin đăng nhập không hợp lệ");
        }

        return ResponseEntity.ok("User login successful");
    }
}
