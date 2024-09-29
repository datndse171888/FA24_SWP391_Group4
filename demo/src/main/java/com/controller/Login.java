package com.controller;

import com.dto.UserDTO;
import com.entity.User
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@AllArgsConstructor
@SessionAttributes("userdto")
public class UserLoginController {
    private UserService userService;
    @ModelAttribute("userdto")
    public UserDto userDto(){
        return new UserDto();
    }
    @GetMapping("/login")
    public String showLoginForm(){
        return "/login";
    }
    @PostMapping("/login")
    public String Login(@ModelAttribute("userdto") UserDto userDto, Model model){
        if(userService.checkUserbyEmail(userDto.getEmail())==false){
            return "redirect:/login?emailwrong";
        }
        User user = userService.getUserbyEmail(userDto.getEmail());
        if(user.getRole().equals("ADMIN")){
            return  "redirect:/admin_home";
        }
        if(userService.checkPasswordUser(userDto.getEmail(),userDto.getPassword())){
            return "redirect:/home?success";
        }
        return "redirect:/login?passwordwrong";
    }
}