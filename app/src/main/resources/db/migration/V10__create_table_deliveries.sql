CREATE TABLE deliveries (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT UNIQUE NOT NULL,
    delivery_status ENUM('pending', 'in_transit', 'delivered', 'returned', 'cancelled') NOT NULL DEFAULT 'pending',
    tracking_url VARCHAR(255) NULL,
    delivery_person_id INT NOT NULL,,
    estimated_delivery_time TIMESTAMP NULL,
    delivered_at TIMESTAMP NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (delivery_person_id) REFERENCES users(id) ON DELETE CASCADE
);