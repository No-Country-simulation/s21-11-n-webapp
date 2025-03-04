package com.bakesoft.user.domain.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "profiles")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "profile_id", updatable = false, nullable = false)
    private UUID profileId;

    @OneToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "FK_PROFILE_USER"))
    private User user;

    @Column(name = "profile_picture", length = 255)
    private String profilePicture = "public/images/defaultProfilePictureUser.jpg";

    @Column(name = "first_name", length = 50, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 50, nullable = false)
    private String lastName;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "mobile_phone", length = 20, unique = true, nullable = false)
    private String mobilePhone;

    @Column(name = "billing_address", length = 100)
    private String billingAddress;

    @Column(name = "country", length = 25, nullable = false)
    private String country = "Default Country";

    @Column(name = "city", length = 50, nullable = false)
    private String city = "Default City";

    @Column(name = "total_buying_points", nullable = false)
    private int totalBuyingPoints = 0;

    @Column(name = "total_purchases", nullable = false)
    private int totalPurchases = 0;


 }
