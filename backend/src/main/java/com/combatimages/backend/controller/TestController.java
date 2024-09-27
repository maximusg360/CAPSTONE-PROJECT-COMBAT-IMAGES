package com.combatimages.backend.controller;

import com.combatimages.backend.common.ImagesRepository;
import com.combatimages.backend.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class TestController {

    @Autowired
    ImagesRepository repo;

//    private final ImagesRepository imagesRepository;
//
//    public TestController(ImagesRepository imagesRepository) {
//        this.imagesRepository = imagesRepository;
//    }

    // GET ALL DATA
    @GetMapping("/test")
    public ResponseEntity<List<Images>> test() {
        List<Images> images = repo.findAll();
        return ResponseEntity.ok(images);
    }

    // http://localhost:8080/test/{}
    // GET by ID
    @GetMapping("/test/{id}")
    public Images getImages(@PathVariable int id){
        Images images = repo.findById(id).get();
        return  images;
    }

}
