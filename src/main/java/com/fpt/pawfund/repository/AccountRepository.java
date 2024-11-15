package com.fpt.pawfund.repository;

import com.fpt.pawfund.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {  // Đổi từ Long thành Integer
    Optional<Account> findByGmail(String gmail);
    Optional<Account> findByActivationToken(String activationToken);
}
