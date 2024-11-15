package com.fpt.pawfund.repository;

import com.fpt.pawfund.model.AdoptedApplications;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptedApplicationsRepository extends JpaRepository<AdoptedApplications, Integer> {
}