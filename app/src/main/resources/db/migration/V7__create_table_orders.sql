CREATE TABLE IF NOT EXISTS orders
(
order_id BINARY(16) PRIMARY KEY,
user_id  BINARY(16) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
total_amount DECIMAL(10,2) NOT NULL,
delivery_address VARCHAR(50) NOT NULL DEFAULT 'DIRECCION DE SUCURSAL 12345',
status ENUM('pending_payment', 'paid', 'shipped', 'delivered', 'cancelled') NOT NULL DEFAULT 'pending_payment',
FOREIGN KEY (user_id) REFERENCES users(user_id)
)