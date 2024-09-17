package com.combatimages.backend.common;


import com.combatimages.backend.model.MyAppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<MyAppUser, Integer> {
    MyAppUser findByUsername(String username);
    MyAppUser findByEmail(String email);


}
