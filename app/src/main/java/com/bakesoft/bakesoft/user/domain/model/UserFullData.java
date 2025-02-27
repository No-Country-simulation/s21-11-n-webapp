package com.bakesoft.bakesoft.user.domain.model;

import com.bakesoft.bakesoft.entity.domain.model.EntityClass;
import com.bakesoft.bakesoft.user.domain.enums.Country;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@ToString(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "users_full_data")
public class UserFullData extends EntityClass {
    @Column(name = "role", columnDefinition = "TINYINT(1) UNSIGNED DEFAULT 0")
    private int role = 0;
    @Column(name = "profile_picture", columnDefinition = "VARCHAR(255) DEFAULT 'public/images/defaultProfilePictureUser.jpg'")
    private String profilePicture = "public/images/defaultProfilePictureUser.jpg";
    @Column(name = "name", length = 50)
    private String name;
    @Column(name = "last_name", length = 50)
    private String lastName;
    @Column(name = "birthday")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate birthday;
    @Column(name = "phone", unique = true, length = 20)
    private String phone;
    @Enumerated(EnumType.STRING)
    @Column(name = "country", length = 14)
    private Country country = Country.ARGENTINA;
    @Column(name = "city", length = 50)
    private String city;

    @Column(name = "total_buying_points", columnDefinition = "INT DEFAULT 0")
    private int totalBuyingPoints = 0;
    @Column(name = "total_purchases", columnDefinition = "INT DEFAULT 0")
    private int totalPurchases = 0;

    @Column(name = "is_confirmed", nullable = false, columnDefinition = "TINYINT(1) UNSIGNED DEFAULT 0")
    private boolean isConfirmed = false;
    @Column(name = "confirmation_code", length = 100)
    private String confirmationCode;
    @Column(name = "recovery_code", length = 100)
    private String recoveryCode;

    @Column(name = "verification_expiration")
    private LocalDateTime verificationCodeExpiresAt;

    @OneToOne(mappedBy = "userFullData", cascade = CascadeType.ALL, optional = true)
    @JsonBackReference
    @ToString.Exclude
    private User user;
}
