package com.combatimages.backend;

import com.combatimages.backend.common.ImagesRepository;
import com.combatimages.backend.controller.ImageController;
import com.combatimages.backend.model.Images;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ImageControllerTest {

    @Mock
    private ImagesRepository imagesRepository;

    @InjectMocks
    private ImageController imageController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllImages() {
        // Arrange
        Images image1 = new Images(1, "Image 1", "Description 1", 147, "url1", "Event 1");
        Images image2 = new Images(2, "Image 2", "Description 2", 180, "url2", "Event 2");
        when(imagesRepository.findAll()).thenReturn(Arrays.asList(image1, image2));

        // Act
        ResponseEntity<List<Images>> response = imageController.test();

        // Assert
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(2, response.getBody().size());
        verify(imagesRepository, times(1)).findAll();
    }

    @Test
    void testGetImageById() {
        // Arrange
        Images image = new Images(1, "Image 1", "Description 1", 147, "url1", "Event 1");
        when(imagesRepository.findById(1)).thenReturn(Optional.of(image));

        // Act
        Images result = imageController.getImages(1);

        // Assert
        assertEquals(image, result);
        verify(imagesRepository, times(1)).findById(1);
    }

    @Test
    void testAddImage() {
        // Arrange
        Images newImage = new Images(3, "Image 3", "Description 3", 176, "url3", "Event 3");
        when(imagesRepository.save(newImage)).thenReturn(newImage);

        // Act
        Images result = imageController.createImages(newImage);

        // Assert
        assertEquals(newImage, result);
        verify(imagesRepository, times(1)).save(newImage);
    }

    @Test
    void testDeleteImage() {
        // Act
        ResponseEntity<?> response = imageController.deleteImages(1);

        // Assert
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Image has been deleted", response.getBody());
        verify(imagesRepository, times(1)).deleteById(1);
    }

    @Test
    void testEditImage() {
        // Arrange
        Images existingImage = new Images(1, "Image 1", "Description 1", 147, "url1", "Event 1");
        Images updatedImage = new Images(1, "Updated Image", "Updated Description", 147, "updated_url", "Updated Event");
        when(imagesRepository.findById(1)).thenReturn(Optional.of(existingImage));
        when(imagesRepository.save(existingImage)).thenReturn(updatedImage);

        // Act
        ResponseEntity<?> response = imageController.editImages(1, updatedImage);

        // Assert
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(updatedImage, response.getBody());
        verify(imagesRepository, times(1)).findById(1);
        verify(imagesRepository, times(1)).save(existingImage);
    }
}
