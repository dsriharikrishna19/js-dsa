-- ===============================================================
-- Module 09: TCL (Transaction Control Language) & Concurrency
-- ===============================================================

-- 1. Atomic Multi-Statement Transaction with SAVEPOINT
BEGIN;

-- Insert customer
INSERT INTO sales.customers (first_name, country, email)
VALUES ('Vikram Patel', 'India', 'vikram@example.com');

-- Checkpoint
SAVEPOINT sp_customer_created;

-- Insert order
INSERT INTO sales.orders (customer_id, item, amount)
VALUES (
    (SELECT customer_id FROM sales.customers WHERE email = 'vikram@example.com'),
    'Ergonomic Desk Chair',
    450.00
);

-- In case of failure or logic check, rollback to savepoint:
-- ROLLBACK TO SAVEPOINT sp_customer_created;

-- Finalize all operations atomically
COMMIT;

-- 2. Row-Level Locking (Pessimistic Concurrency)
-- Prevents race conditions during checkout / inventory reservation
BEGIN;

SELECT order_id, amount 
FROM sales.orders
WHERE order_id = 1
FOR UPDATE; -- Locks this specific row until COMMIT/ROLLBACK

UPDATE sales.orders
SET amount = amount + 25.00
WHERE order_id = 1;

COMMIT;
