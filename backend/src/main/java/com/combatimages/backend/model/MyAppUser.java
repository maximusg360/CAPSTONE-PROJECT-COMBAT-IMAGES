package com.combatimages.backend.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;


@AllArgsConstructor
@Data
@Table(name = "user")
@Entity
public class MyAppUser {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String password;
    private String email;
    private Boolean enabled;


    public MyAppUser() {

    }
    public MyAppUser(Integer id, String name, String password, String email) {
        this.id = id;
        this.username = name;
        this.password = password;
        this.email = email;
    }
}


//    @ManyToMany(fetch = FetchType.EAGER)
//    @JoinTable(
//            name = "userRoles",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "role_id"))
//    private Set<Roles> roles;
//
//    @OneToMany(mappedBy = "creator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private Set<Images> combatImages = new HashSet<>();

