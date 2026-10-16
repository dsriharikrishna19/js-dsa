-- ===============================================================
-- Module 07: Window Functions & Analytical Queries
-- ===============================================================

-- 1. Running Totals (Overall vs Partitioned by Customer)
SELECT 
    c.customer_id,
    c.first_name,
    o.order_id,
    o.item,
    o.amount,
    -- Running total across entire order history
    SUM(o.amount) OVER (ORDER BY o.order_id) AS overall_running_total,
    -- Running total scoped to each individual customer
    SUM(o.amount) OVER (PARTITION BY c.customer_id ORDER BY o.order_id) AS customer_running_total
FROM sales.customers c
JOIN sales.orders o 
    ON c.customer_id = o.customer_id;

-- 2. Ranking Functions: ROW_NUMBER(), RANK(), DENSE_RANK()
SELECT 
    customer_id,
    order_id,
    item,
    amount,
    ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS row_num,
    RANK()       OVER (PARTITION BY customer_id ORDER BY amount DESC) AS rank_num,
    DENSE_RANK() OVER (PARTITION BY customer_id ORDER BY amount DESC) AS dense_rank_num
FROM sales.orders;

-- 3. Lead & Lag (Comparing Current Order vs Previous/Next Order)
SELECT 
    customer_id,
    order_id,
    order_date,
    amount,
    LAG(amount, 1) OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_order_amount,
    amount - LAG(amount, 1) OVER (PARTITION BY customer_id ORDER BY order_date) AS amount_diff_from_last
FROM sales.orders;
