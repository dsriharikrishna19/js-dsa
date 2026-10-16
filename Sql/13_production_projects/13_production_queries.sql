-- ===============================================================
-- Module 13: Production SQL Design Patterns & Real-World Project
-- ===============================================================

-- 1. High-Performance Keyset (Cursor) Pagination
-- Replaces slow `OFFSET 100000` with index-seek pagination
SELECT 
    order_id,
    customer_id,
    item,
    amount,
    order_date
FROM sales.orders
WHERE order_id > 100 -- Last seen order_id from previous page
ORDER BY order_id ASC
LIMIT 20;

-- 2. Soft Delete Pattern with Partial Index
ALTER TABLE sales.orders ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN DEFAULT FALSE;
ALTER TABLE sales.orders ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;

-- Soft delete execution
UPDATE sales.orders
SET is_deleted = TRUE,
    deleted_at = CURRENT_TIMESTAMP
WHERE order_id = 2;

-- Partial index to make queries ignore deleted records automatically and stay fast
CREATE INDEX IF NOT EXISTS idx_orders_active_customers 
ON sales.orders(customer_id) 
WHERE is_deleted = FALSE;

-- Query only active orders efficiently
SELECT * FROM sales.orders 
WHERE is_deleted = FALSE 
  AND customer_id = 1;

-- 3. Idempotent Data Pipeline Upsert
WITH raw_stage_data AS (
    SELECT 
        'vikram@example.com' AS email, 
        'Vikram P.' AS first_name, 
        'India' AS country
)
INSERT INTO sales.customers (email, first_name, country)
SELECT email, first_name, country FROM raw_stage_data
ON CONFLICT (email) 
DO UPDATE SET 
    first_name = EXCLUDED.first_name,
    country = EXCLUDED.country
RETURNING customer_id, email, first_name;
