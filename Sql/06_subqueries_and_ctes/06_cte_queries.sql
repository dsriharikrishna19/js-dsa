-- ===============================================================
-- Module 06: Subqueries & Common Table Expressions (CTEs)
-- ===============================================================

-- 1. Scalar Subquery in SELECT
SELECT 
    o.order_id,
    o.item,
    o.amount,
    (SELECT ROUND(AVG(amount), 2) FROM sales.orders) AS overall_avg_amount,
    o.amount - (SELECT ROUND(AVG(amount), 2) FROM sales.orders) AS diff_from_avg
FROM sales.orders o;

-- 2. Correlated Subquery with EXISTS (High Performance)
-- Find customers who have at least one delivered shipping record
SELECT 
    c.customer_id,
    c.first_name,
    c.email
FROM sales.customers c
WHERE EXISTS (
    SELECT 1 
    FROM sales.shippings s 
    WHERE s.customer_id = c.customer_id 
      AND s.status = 'Delivered'
);

-- 3. Common Table Expression (CTE) for readable layered logic
WITH customer_order_metrics AS (
    SELECT 
        customer_id,
        COUNT(order_id) AS order_count,
        SUM(amount) AS total_spent
    FROM sales.orders
    GROUP BY customer_id
),
high_value_customers AS (
    SELECT 
        customer_id,
        total_spent
    FROM customer_order_metrics
    WHERE total_spent > 500.00
)
SELECT 
    c.customer_id,
    c.first_name,
    c.email,
    hvc.total_spent
FROM high_value_customers hvc
JOIN sales.customers c 
    ON c.customer_id = hvc.customer_id;

-- 4. Recursive CTE: Generating continuous series / hierarchical data
WITH RECURSIVE date_series AS (
    SELECT CURRENT_DATE - INTERVAL '6 days' AS report_date
    UNION ALL
    SELECT (report_date + INTERVAL '1 day')::DATE
    FROM date_series
    WHERE report_date < CURRENT_DATE
)
SELECT report_date FROM date_series;
