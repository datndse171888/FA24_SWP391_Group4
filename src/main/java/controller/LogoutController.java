package controller;

import dto.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@AllArgsConstructor
@SessionAttributes("userdto")
@RequestMapping("/api/auth")
public class LogoutController {

    @ModelAttribute("userdto")
    public UserDTO userDto() {
        return new UserDTO();
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(WebRequest request, SessionStatus status) {
        // Kết thúc phiên đăng nhập
        status.setComplete();
        request.removeAttribute("userdto", WebRequest.SCOPE_SESSION);

        // Trả về phản hồi thành công
        return ResponseEntity.status(HttpStatus.OK).body("Đăng xuất thành công");
    }
}
