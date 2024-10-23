package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.model.Profile;
import com.fpt.pawfund.model.dto.AccountDTO;
import com.fpt.pawfund.repository.AccountRepository;
import com.fpt.pawfund.repository.ProfileRepository;
import com.fpt.pawfund.repository.RoleRepository;
import com.fpt.pawfund.model.Role;
import com.fpt.pawfund.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin("*")
@RestController
public class RegistrationController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ProfileRepository profileRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody AccountDTO accountDTO, BindingResult result) {
        // Validate form data
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors().get(0).getDefaultMessage());
        }

        // Check if gmail already exists
        if (accountRepository.findByGmail(accountDTO.getGmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Gmail is already in use.");
        }

        // Find role by role ID from the request
        Optional<Role> roleOptional = roleRepository.findById(Integer.parseInt("2")); // role = 2 is USER
        if (roleOptional.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid role ID.");
        }
        Role role = roleOptional.get();

        // Create a profile for the user
        Profile profile = new Profile();
        profile.setName(accountDTO.getName());
        profile.setAddress(accountDTO.getAddress());
        profile.setGender(accountDTO.getGender());
        profile.setPhone_number(accountDTO.getPhoneNumber());
        profile.setAvatar(accountDTO.getAvatar());  // Set the avatar
        profile.setDateOfBirth(accountDTO.getDateOfBirth());

        // Save the profile first
        profileRepository.save(profile);

        // Create a new account
        Account account = new Account();
        account.setGmail(accountDTO.getGmail()); // Changed from getEmail to getGmail
        account.setPassword(passwordEncoder.encode(accountDTO.getPassword()));
        account.setActiveStatus(false);
        account.setProfile(profile); // Set the profile to the account
        account.setRole(role); // Set the role for the account

        // Generate activation token
        String activationToken = UUID.randomUUID().toString();
        account.setActivationToken(activationToken);

        // Save account to the database
        accountRepository.save(account);

        // Send activation email
        emailService.sendActivationEmail(accountDTO.getGmail(), activationToken); // Changed from getEmail to getGmail

        return ResponseEntity.ok("User registered successfully. Please check your gmail to activate your account.");
    }
}
