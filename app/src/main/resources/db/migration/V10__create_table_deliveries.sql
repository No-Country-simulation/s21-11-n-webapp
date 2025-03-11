CREATE TABLE IF NOT EXISTS deliveries (
    id BINARY(16) PRIMARY KEY,
    order_id BINARY(16) UNIQUE NOT NULL,
    delivery_status ENUM('pending', 'in_transit', 'delivered', 'returned', 'cancelled') NOT NULL DEFAULT 'pending',
    tracking_url VARCHAR(255) NULL,
    delivery_person_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);