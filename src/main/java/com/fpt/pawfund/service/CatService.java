package com.fpt.pawfund.service;

import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.repository.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CatService {

    @Autowired
    private CatRepository catRepository;

    // Tạo mèo mới
    public Cat createCat(Cat cat) {
        cat.setVaccinated(0);
        cat.setStatus(true);
        return catRepository.save(cat);
    }

    // Lấy tất cả mèo
    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }

    // Lấy mèo theo ID
    public Cat getCatById(int catID) {
        System.out.println("co loi 1");
        return catRepository.findById(catID).orElseThrow(
                () -> new RuntimeException("Cat not found with id : " + catID)
        );
    }

    // Lấy mèo theo tên
    public List<Cat> getCatsByName(String name) {
        return catRepository.findByName(name);
    }

    // Cập nhật mèo theo ID
    public Cat updateCat(int catID, Cat newCat) {
        return catRepository.findById(catID).map(existingCat -> {
            existingCat.setName(newCat.getName());
            existingCat.setGender(newCat.getGender());
            existingCat.setAge(newCat.getAge());
            existingCat.setWeight(newCat.getWeight());
            existingCat.setBreed(newCat.getBreed());
            existingCat.setIntroduction(newCat.getIntroduction());
            existingCat.setVaccinated(newCat.getVaccinated());
            return catRepository.save(existingCat);
        }).orElseThrow(() -> new RuntimeException("Cat not found with ID: " + catID));
    }

     // Xóa mèo theo ID
    public void deleteCat(int catID) {
        Cat cat = catRepository.findById(catID).orElseThrow(
                () -> new RuntimeException("Cat not found with id : " + catID)
        );
        cat.setStatus(false);
        catRepository.save(cat);
    }

    public List<Cat> getCatByStatus(boolean status) {
        return catRepository.findByStatus(status);
    }

    public Cat updateStatus(int catID, boolean status) {
        Cat cat = catRepository.findById(catID).orElseThrow(
                () -> new RuntimeException("Cat not found with id : " + catID)
        );
        cat.setStatus(status);
        return catRepository.save(cat);
    }
}
