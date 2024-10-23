package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.Cat;
import com.fpt.pawfund.model.ResponseData;
import com.fpt.pawfund.service.CatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cats")
public class CatController {

    @Autowired
    private CatService catService;

    // Create a new cat
    @PostMapping("/create")
    public ResponseEntity<?> createCat(@RequestBody Cat cat) {
        try {
            Cat createdCat = catService.createCat(cat);
            return ResponseEntity.ok(
                    new ResponseData(100, "Post cat information successfully !!", createdCat)
            );
        } catch (Exception e) {
            return ResponseEntity.ok(
                    new ResponseData(500, "Error : " + e.getMessage(), "")
            );
        }
    }

    // Get all cats include inactive/active cats
    @GetMapping("/all")
    public ResponseEntity<List<Cat>> getAllCats() {
        List<Cat> cats = catService.getAllCats();
        return ResponseEntity.ok(cats);
    }

    // Get all cats include inactive/active cats
    @GetMapping("/{status}")
    public ResponseEntity<ResponseData> getActiveCats(@PathVariable boolean status) {
        List<Cat> cats = catService.getCatByStatus(status);
        return ResponseEntity.ok(
                new ResponseData(100, "Get cats by status : " + status, cats)
        );
    }

    // Get a specific cat by ID
    @GetMapping("/specified/{catID}")
    public ResponseEntity<ResponseData> getCatById(@PathVariable int catID) {
        Cat cat = catService.getCatById(catID);
        return ResponseEntity.ok(
                new ResponseData(100, "Get a cat by id : " +catID,cat)
        );
    }

    // Update status : inactive/active cho cat
    @PutMapping("/update/{catID}/{status}")
    public ResponseEntity<ResponseData> getCatById(@PathVariable int catID, @PathVariable boolean status) {
        Cat cat = catService.updateStatus(catID, status);
        return ResponseEntity.ok(
                new ResponseData(100, "Update status for cat id : " +catID, cat)
        );
    }

    // Update a cat by ID
    @PutMapping("/{catID}")
    public ResponseEntity<ResponseData> updateCat(@PathVariable int catID, @RequestBody Cat newCat) {
        Cat updatedCat = catService.updateCat(catID, newCat);
        return ResponseEntity.ok(
                new ResponseData(100, "Update cat by id : " + catID, updatedCat)
        );
    }

    // Delete a cat by ID
    @DeleteMapping("/{catID}")
    public ResponseEntity<ResponseData> deleteCat(@PathVariable int catID) {
        catService.deleteCat(catID);
        return ResponseEntity.ok(
                new ResponseData(100 , "Delete a Cat successfully !!", "")
        );
    }

    // Find a cat by name
    @GetMapping("/name/{name}")
    public ResponseEntity<ResponseData> getCatsByName(@PathVariable String name) {
        List<Cat> cats = catService.getCatsByName(name);
        return ResponseEntity.ok(
                new ResponseData(100, "Get cat(s) by name successfully !!", cats)
        );
    }

}
