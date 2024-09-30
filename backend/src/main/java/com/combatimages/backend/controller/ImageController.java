package com.combatimages.backend.controller;

import com.combatimages.backend.common.ImagesRepository;
import com.combatimages.backend.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
//http://localhost:8080/images
@RequestMapping("/images")
public class ImageController {

    @Autowired
    ImagesRepository repo;

//    private final ImagesRepository imagesRepository;
//
//    public TestController(ImagesRepository imagesRepository) {
//        this.imagesRepository = imagesRepository;
//    }

    // GET ALL DATA
    @GetMapping
    public ResponseEntity<List<Images>> test() {
        List<Images> images = repo.findAll();
        return ResponseEntity.ok(images);
    }

    // GET by ID
    @GetMapping("/getImage/{id}")
    public Images getImages(@PathVariable Integer id) {
        Images images = repo.findById(id).get();
        return images;
    }

    @PostMapping("/addImage")
    Images createImages(@RequestBody Images images) {
        return repo.save(images);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteImages(@PathVariable Integer id) {
        repo.deleteById(id);
        return ResponseEntity.ok().body("Image has been deleted");
    }


    @PutMapping("/edit/{id}")
    public ResponseEntity<?> editImages(@PathVariable Integer id, @RequestBody Images newImage) {
       Images findImage = repo.findById(id).orElse(null);


       if (findImage.equals(null)){
        return ResponseEntity.ok().body("Image with the id given is not found in database");
       }
       


       findImage.setName(newImage.getName());
       findImage.setDescription((newImage.getDescription()));
       findImage.setWeight_class((newImage.getWeight_class()));
       findImage.setImage_url(newImage.getImage_url());
       findImage.setEvent_name(newImage.getEvent_name());


       Images savedImage  = repo.save(findImage);

       return ResponseEntity.ok().body(savedImage);
    }

}
