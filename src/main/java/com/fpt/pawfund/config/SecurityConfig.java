package com.fpt.pawfund.config;

import com.fpt.pawfund.controller.VNPayController;
import com.fpt.pawfund.security.JwtRequestFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF protection for stateless APIs
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/register", "/login", "/activate/**", "/cats/specified/**", "/cats/all", "/cats", "/cats/name/", "/submitOrder", "/vnpay-payment" ).permitAll()  // Public access to these endpoints
                        .requestMatchers("/cats/create").hasRole("SHELTER") // Permit shelter to create cat information
                        .requestMatchers("/news").permitAll() // Allow all users to get news
                        .requestMatchers("/news/specified/**").permitAll() // Allow all users to get specific news
                        .requestMatchers("/events").permitAll() // Allow all users to get events
                        .requestMatchers("/events/specified/**").permitAll() // Allow all users to get specific events
                        .requestMatchers("/adopted-applications").hasAnyRole("SHELTER", "ADOPTER") // Allow shelter and adopter to access their applications
                        .requestMatchers("/adopted-applications/specified/**").hasAnyRole("SHELTER", "ADOPTER") // Allow shelter and adopter to access specific applications
                        .requestMatchers("/secure-endpoint").hasRole("USER")  // Secure endpoint requires ROLE_USER
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // Stateless session management
                )
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);  // Add JWT filter

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
