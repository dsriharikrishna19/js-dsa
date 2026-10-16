-- ===============================================================
-- Module 03: DML (Data Manipulation Language)
-- Production Patterns: RETURNING, ON CONFLICT (Upsert), Safe Updates
-- ===============================================================

-- 1. Multi-row INSERT with RETURNING clause
INSERT INTO sales.customers (first_name, country, email)
VALUES 
    ('Krishna', 'India', 'krishna@example.com'),
    ('John Doe', 'USA', 'john@example.com'),
    ('Priya Sharma', 'India', 'priya@example.com'),
    ('Alice', 'UK', 'alice@example.com')
RETURNING customer_id, first_name, email;

-- 2. Bulk Insert Orders
INSERT INTO sales.orders (customer_id, item, amount)
VALUES 
    (1, 'Mechanical Keyboard', 350.00),
    (1, 'Gaming Mouse', 120.00),
    (2, '4K Monitor', 1200.00),
    (3, 'USB-C Dock', 250.00),
    (1, 'Headphones', 180.00)
RETURNING *;

-- 3. Upsert Pattern using ON CONFLICT (Crucial for APIs/Services)
INSERT INTO sales.customers (first_name, country, email)
VALUES ('Krishna Kumar', 'India', 'krishna@example.com')
ON CONFLICT (email) 
DO UPDATE SET 
    first_name = EXCLUDED.first_name,
    country = EXCLUDED.country
RETURNING *;

-- 4. Safe UPDATE with exact WHERE predicate & RETURNING
UPDATE sales.orders
SET amount = amount * 0.90  -- 10% discount
WHERE customer_id = 1 
  AND amount > 300.00
RETURNING order_id, customer_id, amount AS discounted_amount;

-- 5. Safe DELETE with subquery guard and RETURNING
DELETE FROM sales.orders
WHERE order_id IN (
    SELECT order_id FROM sales.orders 
    WHERE amount < 50.00
)
RETURNING order_id, item, amount;
