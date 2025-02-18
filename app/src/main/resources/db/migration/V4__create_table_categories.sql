CREATE TABLE IF NOT EXISTS categories
(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
description TEXT,
thumbnail VARCHAR(255) DEFAULT 'public/images/defaultCategoryThumbnail.jpg',
is_active TINYINT(1) UNSIGNED DEFAULT 1
)