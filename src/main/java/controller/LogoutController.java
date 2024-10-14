package controller;
import dto.UserDTO;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.context.request.WebRequest;

//import javax.servlet.http.HttpServletRequest;

@Controller
@AllArgsConstructor
@SessionAttributes("userdto")

public class LogoutController {
    @ModelAttribute("userdto")
    public UserDTO userDto(){
        return new UserDTO();
    }
    @GetMapping("/logout")
    public String Logout(@ModelAttribute("userdto") UserDTO userDto, WebRequest request, SessionStatus status){
        status.setComplete();
        request.removeAttribute("userdto",WebRequest.SCOPE_SESSION);
        return "redirect:/login";
    }
}
