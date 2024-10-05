package controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import service.UserService;
import dto.UserDTO;
import entity.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

<<<<<<< HEAD
@RestController
@RequestMapping("/api/auth")
=======
@RequestMapping("/api/auth") 
@RestController
>>>>>>> 4160a34f70f3d1a20c3a50876bccb7f125a9ce79
@AllArgsConstructor
@SessionAttributes("userdto")
public class LoginController {
    private UserService userService;
    @ModelAttribute("userdto")
    public UserDTO userDTO(){
        return new UserDTO();
    }
    @GetMapping("/login")
    public String showLoginForm(){
        return "/login";
    }
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
