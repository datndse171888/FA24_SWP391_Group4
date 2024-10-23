package com.fpt.pawfund.service;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public long getAccountCount() {
        return accountRepository.count();
    }

    public Account updateStatus(int accountId, boolean status) {
        Account account = accountRepository.findById(accountId).orElseThrow(
                () -> new RuntimeException("Account not found with id: " + accountId)
        );
        account.setActiveStatus(status);
        return accountRepository.save(account);
    }

}
