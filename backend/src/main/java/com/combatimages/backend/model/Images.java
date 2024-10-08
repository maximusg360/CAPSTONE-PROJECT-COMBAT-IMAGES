package com.combatimages.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
@Entity
@Table(name = "images")
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Integer weight_class;
    private String image_url;
    private String event_name;

//    @ManyToOne
//    @JoinColumn(name = "creator_id")
//    private MyAppUser creator;



}
