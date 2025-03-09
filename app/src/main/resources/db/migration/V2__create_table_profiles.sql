CREATE TABLE IF NOT EXISTS profiles
(
    profile_id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL,
    profile_picture VARCHAR(255) DEFAULT 'public/images/defaultProfilePictureUser.jpg',
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    mobile_phone VARCHAR(20) UNIQUE NOT NULL,
    billing_address VARCHAR(100),
    country VARCHAR(25) NOT NULL DEFAULT 'Default Country',
    city VARCHAR(50) NOT NULL DEFAULT 'Default City',
    total_buying_points INT NOT NULL DEFAULT 0,
    total_purchases INT NOT NULL DEFAULT 0,
    CONSTRAINT FK_PROFILE_USER FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
