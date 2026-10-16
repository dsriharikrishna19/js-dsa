-- ===============================================================
-- Module 05: Aggregations & Grouping
-- ===============================================================

-- 1. Standard aggregations per customer
SELECT 
    c.customer_id,
    c.first_name,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.amount), 0.00) AS total_spend,
    ROUND(COALESCE(AVG(o.amount), 0.00), 2) AS average_order_value,
    MAX(o.amount) AS max_single_order
FROM sales.customers c
LEFT JOIN sales.orders o 
    ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name
ORDER BY total_spend DESC;

-- 2. Filtering aggregated results using HAVING
-- (Only customers with more than 1 order and spent > $300)
SELECT 
    c.customer_id,
    c.first_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.amount) AS total_spent
FROM sales.customers c
JOIN sales.orders o 
    ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name
HAVING COUNT(o.order_id) > 1 
   AND SUM(o.amount) > 300.00;

-- 3. Advanced Grouping Sets: ROLLUP & CUBE for reporting
SELECT 
    c.country,
    c.first_name,
    SUM(o.amount) AS total_amount
FROM sales.customers c
JOIN sales.orders o 
    ON c.customer_id = o.customer_id
GROUP BY ROLLUP (c.country, c.first_name);
