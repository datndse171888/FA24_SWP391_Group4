package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.model.AdoptedApplications;
import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.model.ResponseData;
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

    // Tạo mới đơn adopt
    @PostMapping("/create")
    public ResponseEntity<ResponseData> create(@RequestBody AdoptedApplications req) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            throw new RuntimeException("Authentication is null");
        }
        String gmail = authentication.getName(); // Lấy Gmail từ thông tin đăng nhập
        Optional<Account> accountOptional = accountRepository.findByGmail(gmail);
        if (accountOptional.isEmpty()) {
            throw new RuntimeException("Account not found");
        }
        Account account = accountOptional.get();

        Optional<Cat> catOptional = catRepository.findById(req.getCatID());
        if (catOptional.isEmpty()) {
            throw new RuntimeException("Cat not found with ID: " + req.getCatID());
        }
        Cat cat = catOptional.get();

        // Tạo đối tượng AdoptedApplications mới
        AdoptedApplications adoptedApplication = new AdoptedApplications();
        adoptedApplication.setCatID(cat.getCatID());
        adoptedApplication.setAdopterID(account.getAccountID());
        adoptedApplication.setStatus(req.getStatus());

        adoptedApplicationsRepository.save(adoptedApplication);

        return ResponseEntity.ok(
                new ResponseData(100, "Adoption application created successfully", adoptedApplication)
        );
    }

    // Lấy thông tin một đơn adopt theo ID
    @GetMapping("/{id}")
    public ResponseEntity<ResponseData> get(@PathVariable int id) {
        Optional<AdoptedApplications> adoptedApplicationOptional = adoptedApplicationsRepository.findById(id);
        if (adoptedApplicationOptional.isPresent()) {
            return ResponseEntity.ok(
                    new ResponseData(100, "Get adoption application by ID: " + id, adoptedApplicationOptional.get())
            );
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
