CREATE TABLE IF NOT EXISTS users_full_data
(
id INT AUTO_INCREMENT PRIMARY KEY,
profile_picture VARCHAR(255) DEFAULT 'public/images/defaultProfilePictureUser.jpg',
name VARCHAR(50),
last_name VARCHAR(50),
birthday DATE NOT NULL,
phone VARCHAR(20) UNIQUE,
billing_address VARCHAR(100),
country VARCHAR(25) DEFAULT "Default Country(?",
city VARCHAR(50) DEFAULT "Default City(?",
total_buying_points INT DEFAULT 0,
total_purchases INT DEFAULT 0,
is_confirmed TINYINT(1) UNSIGNED DEFAULT 0,
confirmation_code VARCHAR(100),
recovery_code VARCHAR(100),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
is_active TINYINT(1) UNSIGNED DEFAULT 1
)