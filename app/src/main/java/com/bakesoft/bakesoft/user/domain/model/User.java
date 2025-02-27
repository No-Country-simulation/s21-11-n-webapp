package com.bakesoft.bakesoft.user.domain.model;

import com.bakesoft.bakesoft.cart.domain.model.Cart;
import com.bakesoft.bakesoft.review.domain.model.Review;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@EqualsAndHashCode(of = "id")
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    @JsonManagedReference
    @ToString.Exclude
    private UserFullData userFullData;


    @Column(name = "username", nullable = false, unique = true)
    private String username;
    @Column(name = "email", nullable = false, unique = true, length = 80)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "last_online_at", nullable = false)
    private LocalDateTime lastOnlineAt;
    @Column(name = "is_active", nullable = false, columnDefinition = "TINYINT(1) UNSIGNED DEFAULT 1")
    private boolean isActive = true;

    @ManyToMany
    @JoinTable(
            name = "users_roles_relation",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;

    @OneToMany(mappedBy = "user")
    private Set<Cart> carts;

    @OneToMany(mappedBy = "user")
    private Set<Review> reviews;

    @PrePersist
    protected void onCreate(){
        this.lastOnlineAt = LocalDateTime.now();
    }
}