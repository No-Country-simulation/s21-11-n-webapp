CREATE TABLE payments (
    id BINARY(16) PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method ENUM('mercado_pago', 'credit_card', 'paypal', 'bank_transfer') NOT NULL DEFAULT 'mercado_pago',
    provider_transaction_id VARCHAR(255) NOT NULL UNIQUE,
    total_amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'completed', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);