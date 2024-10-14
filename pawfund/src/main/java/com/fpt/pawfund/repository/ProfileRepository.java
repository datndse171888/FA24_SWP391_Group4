package com.fpt.pawfund.repository;


import com.fpt.pawfund.model.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Integer> {
}
