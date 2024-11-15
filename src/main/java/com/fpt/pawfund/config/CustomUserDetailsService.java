package com.fpt.pawfund.config;

import com.fpt.pawfund.model.Account;
import com.fpt.pawfund.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String gmail) throws UsernameNotFoundException {
        Account account = accountRepository.findByGmail(gmail)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with gmail: " + gmail));

        // Grant the user the ROLE_USER authority by default
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER" +account.getRole()));

        return new User(account.getGmail(), account.getPassword(), authorities);
    }
}
