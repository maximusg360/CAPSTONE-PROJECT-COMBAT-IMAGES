package com.combatimages.backend;

import com.combatimages.backend.model.MyAppUser;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TestMyAppUser {

    @Test
    void testMyAppUserEntity() {
        MyAppUser myAppUser = new MyAppUser();

        // Test setting and getting id
        myAppUser.setId(1);
        assertEquals(1, myAppUser.getId());

        // Test setting and getting username
        myAppUser.setUsername("testuser");
        assertEquals("testuser", myAppUser.getUsername());

        // Test setting and getting password
        myAppUser.setPassword("password123");
        assertEquals("password123", myAppUser.getPassword());

        // Test setting and getting email
        myAppUser.setEmail("test@example.com");
        assertEquals("test@example.com", myAppUser.getEmail());

        // Test setting and getting enabled
        myAppUser.setEnabled(true);
        assertTrue(myAppUser.getEnabled());

        myAppUser.setEnabled(false);
        assertFalse(myAppUser.getEnabled());
    }
}


