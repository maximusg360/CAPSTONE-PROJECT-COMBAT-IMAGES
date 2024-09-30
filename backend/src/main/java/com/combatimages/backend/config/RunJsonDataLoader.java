package com.combatimages.backend.config;

import com.combatimages.backend.common.ImagesRepository;

//import com.combatimages.backend.common.UserRepository;
import com.combatimages.backend.model.Images;
//import com.combatimages.backend.model.MyAppUser;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;


@Configuration
public class RunJsonDataLoader implements CommandLineRunner {

    private final Logger logger = org.slf4j.LoggerFactory.getLogger(RunJsonDataLoader.class);
    private final ImagesRepository imagesRepository;
//    private final UserRepository userRepository;
//    private final RolesRepository rolesRepository;
    private final ObjectMapper objectMapper;

    public RunJsonDataLoader(ImagesRepository imagesRepository, ObjectMapper objectMapper) {
        this.imagesRepository = imagesRepository;
//        this.userRepository = userRepository;
//        this.rolesRepository = rolesRepository;
        this.objectMapper = objectMapper;
    }


    @Override
    public void run(String ... args) throws Exception {

//        loadRoleData();
//        loadUserData();
        loadImageData();

    }
    private void loadImageData(){
        if(imagesRepository.count() == 0) {

            try (InputStream inputStream = getClass().getResourceAsStream("/data/images.json")) {
                List<Images> images = objectMapper.readValue(inputStream, new TypeReference<List<Images>>() {});
                logger.info("Images loaded from JSON file: {}", images);
                imagesRepository.saveAll(images);

            } catch (IOException e) {
                throw new RuntimeException("Unable to load data from JSON file", e);
            }
        } else{
            logger.info("Images already loaded");
        }
    }
//    private void loadUserData(){
//        if(userRepository.count() == 0) {
//            try (InputStream inputStream = getClass().getResourceAsStream("/data/users.json")) {
//                System.out.println("input Stream:" + inputStream);
//                List<MyAppUser> myAppUsers = objectMapper.readValue(inputStream, new TypeReference<List<MyAppUser>>() {
//                });
//                logger.info("User loaded from JSON file: {}", myAppUsers);
//                userRepository.saveAll(myAppUsers);
//            } catch (IOException e) {
//                throw new RuntimeException("Unable to load data from JSON file", e);
//            }
//        }  else {
//                logger.info("User data already loaded");
//            }
//        }
//
//
//    private void loadRoleData(){
//        if(userRepository.count() == 0) {
//            try (InputStream inputStream = getClass().getResourceAsStream("/data/roles.json")) {
//                List<Roles> roles  = objectMapper.readValue(inputStream, new TypeReference<List<Roles>>() {
//                });
//                logger.info("Roles loaded from JSON file: {}", roles);
//                rolesRepository.saveAll(roles);
//            } catch (IOException e) {
//                throw new RuntimeException("Unable to load data from JSON file", e);
//            }
//        }  else {
//            logger.info("Roles data already loaded");
//        }
//    }



}




