-- ===============================================================
-- Module 10: Indexes & Query Optimization
-- ===============================================================

-- 1. Standard B-Tree Indexes on Foreign Keys and Filter Columns
CREATE INDEX IF NOT EXISTS idx_customers_email ON sales.customers(email);
CREATE INDEX IF NOT EXISTS idx_orders_customer_date ON sales.orders(customer_id, order_date DESC);

-- 2. Partial Index (Index only active or high-value records)
-- Reduces index size and write amplification
CREATE INDEX IF NOT EXISTS idx_orders_high_value 
ON sales.orders(amount) 
WHERE amount > 500.00;

-- 3. GIN Index for JSONB Search
CREATE INDEX IF NOT EXISTS idx_product_attributes_gin 
ON sales.product_inventory USING GIN (attributes);

-- 4. Analyzing execution plan with EXPLAIN (ANALYZE, BUFFERS)
EXPLAIN (ANALYZE, BUFFERS)
SELECT 
    c.customer_id,
    c.first_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.amount) AS total_spent
FROM sales.customers c
JOIN sales.orders o ON c.customer_id = o.customer_id
WHERE c.country = 'India'
GROUP BY c.customer_id, c.first_name;
