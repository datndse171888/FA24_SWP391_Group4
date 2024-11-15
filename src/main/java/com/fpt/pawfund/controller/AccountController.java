package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.model.ResponseData;
import com.fpt.pawfund.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;

    //Get number of account
    @GetMapping("/count")
    public ResponseEntity<ResponseData> getAccountCount() {
        long count = accountService.getAccountCount();
        return ResponseEntity.ok(
                new ResponseData(100, "Number of accounts: " + count, count)
        );
    }

    // Update status : inactive/active cho account
    @PutMapping("/update/{accountID}/{status}")
    public ResponseEntity<ResponseData> updateAccountStatus(@PathVariable int accountID, @PathVariable boolean status) {

        Account account = accountService.updateStatus(accountID, status);

        return ResponseEntity.ok(
                new ResponseData(100, "Update status for account id: " + accountID, account)
        );
    }
    




}
