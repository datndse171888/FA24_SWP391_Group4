package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Profile;
import com.fpt.pawfund.service.ProfileService;
import com.fpt.pawfund.model.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/profile")
public class ProfileController {
      @Autowired
      private ProfileService profileService;

    @GetMapping("/specified/{profileID}")
    public ResponseEntity<ResponseData> getProfileById(@PathVariable int profileID) {
        Profile profile = profileService.getProfileById(profileID);
        return ResponseEntity.ok(
                new ResponseData(100, "Get a profile by id: " + profileID, profile)
        );
    }

    @GetMapping("/all")
    public ResponseEntity<List<Profile>> getAllProfiles() {
        List<Profile> profiles = profileService.getAllProfiles();
        return  ResponseEntity.ok(profiles);
    }
    
}
