-- ===============================================================
-- Module 02: DQL (Data Query Language) & Filtering
-- ===============================================================

-- 1. Basic Retrieval & Column Aliasing
SELECT 
    c.customer_id,
    c.first_name,
    c.country,
    c.email
FROM sales.customers c;

-- 2. Filtering with WHERE, IN, BETWEEN, and ILIKE (Case-insensitive)
SELECT 
    order_id,
    customer_id,
    item,
    amount
FROM sales.orders
WHERE amount BETWEEN 100.00 AND 1500.00
  AND item ILIKE '%phone%'
  AND customer_id IN (1, 2, 3, 5);

-- 3. Handling NULL values properly (IS NULL vs = NULL)
SELECT 
    shipping_id,
    customer_id,
    status,
    shipped_at
FROM sales.shippings
WHERE shipped_at IS NULL;

-- 4. Conditional logic with CASE expressions
SELECT 
    order_id,
    item,
    amount,
    CASE 
        WHEN amount >= 1000 THEN 'High Value'
        WHEN amount >= 400  THEN 'Mid Value'
        ELSE 'Budget'
    END AS order_tier
FROM sales.orders
ORDER BY amount DESC;

-- 5. Eliminating duplicates with DISTINCT and DISTINCT ON (PostgreSQL specific)
-- DISTINCT ON gets the highest order per customer
SELECT DISTINCT ON (customer_id)
    customer_id,
    order_id,
    item,
    amount,
    order_date
FROM sales.orders
ORDER BY customer_id, amount DESC;

-- 6. Sorting & Pagination (LIMIT and OFFSET)
SELECT 
    order_id, 
    item, 
    amount 
FROM sales.orders
ORDER BY order_id ASC
LIMIT 10 OFFSET 0;
