package com.fpt.pawfund.service;

import com.fpt.pawfund.model.Profile;
import com.fpt.pawfund.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfileById(int profileID) {
        return profileRepository.findById(profileID).orElseThrow(
                () -> new RuntimeException("Profile not found with id: " + profileID)
        );
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }
}
