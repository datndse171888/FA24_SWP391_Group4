package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.ResponseData;
import com.fpt.pawfund.model.request.LoginRequest;
import com.fpt.pawfund.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<ResponseData> login(@RequestBody LoginRequest loginRequest) {
        try {
            // Authenticate the user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getGmail(), loginRequest.getPassword())
            );

            // Load the authenticated user details
            UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getGmail());

            // Generate JWT token
            String jwtToken = jwtUtil.generateToken(userDetails.getUsername());

            // Return the JWT token in the response
            return ResponseEntity.ok(
                    new ResponseData(100, "Login successfully !!", jwtToken)
            );
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED).body(
                    new ResponseData(401, "Login failed: " + e.getMessage(), "")
            );
        }
    }
}
