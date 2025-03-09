CREATE TABLE IF NOT EXISTS products
(
product_id BINARY(16) PRIMARY KEY,
name VARCHAR(50) NOT NULL,
cover_picture VARCHAR(255) DEFAULT 'public/images/defaultProductPicture.jpg',
description TEXT,
price DOUBLE NOT NULL,
current_stock INT NOT NULL,
total_rating INT DEFAULT 0,
total_favorites INT DEFAULT 0,
in_offer TINYINT(1) UNSIGNED DEFAULT 0,
offer_percentage_discount DECIMAL DEFAULT 0,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
is_active TINYINT(1) DEFAULT 1,
FOREIGN KEY (category_id) REFERENCES categories(category_id)
)