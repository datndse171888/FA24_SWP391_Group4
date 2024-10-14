package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    @Autowired
    private CatService catService;

    // Create a new cat
    @PostMapping("/create")
    public ResponseEntity<Cat> createCat(@RequestBody Cat cat) {
        Cat createdCat = catService.createCat(cat);
        return new ResponseEntity<>(createdCat, HttpStatus.CREATED);
    }

    // Retrieve a specific cat by ID
    @GetMapping("/{catID}")
    public ResponseEntity<Cat> getCatById(@PathVariable int catID) {
        Cat cat = catService.getCatById(catID);
        return new ResponseEntity<>(cat, HttpStatus.OK);
    }

    // Retrieve all cats
    @GetMapping
    public ResponseEntity<List<Cat>> getAllCats() {
        List<Cat> cats = catService.getAllCats();
        return new ResponseEntity<>(cats, HttpStatus.OK);
    }
}


