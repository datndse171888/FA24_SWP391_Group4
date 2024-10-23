package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.model.AdoptedApplications;
import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.repository.AccountRepository;
import com.fpt.pawfund.repository.AdoptedApplicationsRepository;
import com.fpt.pawfund.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private AdoptedApplicationsRepository adoptedApplicationsRepository;

    @Autowired
    private CatRepository catRepository;

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody AdoptedApplications req){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null){
            throw new RuntimeException("Authentication is null");
        }
        String username = authentication.getName();
        Optional<Account> byEmail = accountRepository.findByGmail(username);
        if(byEmail.isEmpty()){
            throw new RuntimeException("Account not found");
        }
        Account account = byEmail.get();
        Optional<Cat> byId = catRepository.findById(req.getCatID());
        if(byId.isPresent()){
            Cat cat = byId.get();
            AdoptedApplications adoptedApplications = new AdoptedApplications();
            adoptedApplications.setCatID(cat.getCatID());
            adoptedApplications.setStatus(req.getStatus());
            adoptedApplications.setAdopterID(account.getAccountID());
            adoptedApplicationsRepository.save(adoptedApplications);
            return ResponseEntity.ok(adoptedApplications);
        }
        else {
            throw new RuntimeException("Account not found");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable int id){
        Optional<AdoptedApplications> adoptedApplications = adoptedApplicationsRepository.findById(id);
        if(adoptedApplications.isPresent()){
            return ResponseEntity.ok(adoptedApplications.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
