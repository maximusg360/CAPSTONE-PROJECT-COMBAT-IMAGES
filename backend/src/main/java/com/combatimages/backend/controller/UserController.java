package com.combatimages.backend.controller;
import com.combatimages.backend.common.UserRepository;
import com.combatimages.backend.model.MyAppUser;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/images")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/Login")
    public List<MyAppUser> getAllUsers() {
        List<MyAppUser> user = userRepository.findAll();
        return user;
    }

    @PostMapping("/Login/{email}")
    @ResponseStatus(HttpStatus.OK)
    public List<MyAppUser> getUsersByEmail(@PathVariable String email) {
        List<MyAppUser> user = (List<MyAppUser>) userRepository.findByEmail(email);

        if (user.isEmpty()) {
            throw new RuntimeException("User not found for email: " + email);
        }

        return user;
    }


    // Post a new account
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/SignUp")
    void createUsers(@RequestBody MyAppUser user) {
        userRepository.save(user);
    }

    // Delete a user account
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void deleteUsers(@PathVariable Integer id) {
        userRepository.deleteById(id);
    }
}
