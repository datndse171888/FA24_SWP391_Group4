package com.fpt.pawfund.repository;

import com.fpt.pawfund.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.repository.CatRepository;
import com.fpt.pawfund.service.CatService;
import java.util.List;
import java.util.Optional;

@Repository
public interface CatRepository extends JpaRepository<Cat, Integer> {
           List<Cat> findByName(String name);
//         List<Cat> save(cat);
            List<Cat> findByStatus(boolean status);
}
