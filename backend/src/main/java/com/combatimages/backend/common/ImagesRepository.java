package com.combatimages.backend.common;

import com.combatimages.backend.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Integer> {
    List<Images> findByName(String name);
    List<Images> findByDescription(String description);
    Optional<Images> findById(Integer id);

}
