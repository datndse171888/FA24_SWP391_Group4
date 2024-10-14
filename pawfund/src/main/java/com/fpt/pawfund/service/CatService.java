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
    //create
    public Cat createCat(Cat cat) {
        return catRepository.save(cat);
    }
    //get by ID
    public Cat getCatById(int catID) {
        return catRepository.findById(catID).orElseThrow(() -> new RuntimeException("Cat not found with id: " + catID));
    }
    //get all
    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }
}


