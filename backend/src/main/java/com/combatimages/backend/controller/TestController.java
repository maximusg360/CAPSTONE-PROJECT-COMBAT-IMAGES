package com.combatimages.backend.controller;

import com.combatimages.backend.common.ImagesRepository;
import com.combatimages.backend.model.Images;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    private final ImagesRepository imagesRepository;

    public TestController(ImagesRepository imagesRepository) {
        this.imagesRepository = imagesRepository;
    }

    @GetMapping("/test")
    public ResponseEntity<List<Images>> test() {
        List<Images> images = imagesRepository.findAll();
        return ResponseEntity.ok(images);
    }

}
