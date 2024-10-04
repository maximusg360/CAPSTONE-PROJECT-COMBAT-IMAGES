package com.combatimages.backend;

import com.combatimages.backend.model.Images;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class NewImagesTest {
    @Test
    void testImagesConstructorAndGetters() {
        Images image = new Images();
        image.setId(1);
        image.setName("Test Image");
        image.setDescription("This is a test image");

        // Test the values after setting them
        assertEquals(1, image.getId());
        assertEquals("Test Image", image.getName());
        assertEquals("This is a test image", image.getDescription());
    }

    @Test
    void testImagesSetters() {
        Images image = new Images();
        image.setId(2);
        image.setName("Another Image");
        image.setDescription("Another test image");

        // Test the updated values
        assertEquals(2, image.getId());
        assertEquals("Another Image", image.getName());
        assertEquals("Another test image", image.getDescription());
    }
}
