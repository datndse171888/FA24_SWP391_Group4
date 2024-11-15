package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/activate")
public class ActivationController {

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping
    public ResponseEntity<String> activateAccount(@RequestParam("token") String token) {
        // Find account by token
        Optional<Account> accountOptional = accountRepository.findByActivationToken(token);
        if (accountOptional.isPresent()) {
            Account account = accountOptional.get();
            // Activate the account
            account.setActiveStatus(true);
            account.setActivationToken(null);  // Clear the token after activation
            accountRepository.save(account);
            return ResponseEntity.ok("Account activated successfully!");
        } else {
            return ResponseEntity.badRequest().body("Invalid activation token");
        }
    }
}
