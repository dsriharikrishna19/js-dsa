-- ===============================================================
-- Module 04: Relational Joins & Set Operations
-- ===============================================================

-- 1. INNER JOIN: Only customers with active orders
SELECT 
    c.customer_id,
    c.first_name,
    o.order_id,
    o.item,
    o.amount
FROM sales.customers c
INNER JOIN sales.orders o 
    ON c.customer_id = o.customer_id
ORDER BY c.customer_id, o.order_id;

-- 2. LEFT JOIN: All customers, whether they have ordered or not
SELECT 
    c.customer_id,
    c.first_name,
    c.country,
    o.order_id,
    COALESCE(o.item, 'No orders placed') AS item,
    COALESCE(o.amount, 0.00) AS amount
FROM sales.customers c
LEFT JOIN sales.orders o 
    ON c.customer_id = o.customer_id;

-- 3. FULL OUTER JOIN: Identifying unmatched customers & orders
SELECT 
    c.customer_id AS cust_id,
    c.first_name,
    o.order_id,
    o.item,
    o.amount
FROM sales.customers c
FULL OUTER JOIN sales.orders o 
    ON c.customer_id = o.customer_id;

-- 4. CROSS JOIN: Cartesian product (Useful for generating combinations)
SELECT 
    c.first_name,
    m.month_num
FROM sales.customers c
CROSS JOIN (VALUES (1), (2), (3), (4)) AS m(month_num)
LIMIT 12;

-- 5. SELF JOIN: Matching customers belonging to the same country
SELECT 
    c1.customer_id AS customer_1_id,
    c1.first_name  AS customer_1,
    c2.customer_id AS customer_2_id,
    c2.first_name  AS customer_2,
    c1.country
FROM sales.customers c1
JOIN sales.customers c2 
    ON c1.country = c2.country 
   AND c1.customer_id < c2.customer_id
ORDER BY c1.country;

-- 6. SET OPERATIONS: UNION vs UNION ALL vs INTERSECT vs EXCEPT
-- UNION (Removes duplicates) vs UNION ALL (Preserves duplicates)
SELECT customer_id FROM sales.orders
UNION ALL
SELECT customer_id FROM sales.shippings;

-- EXCEPT: Customers who have registered but have zero orders
SELECT customer_id FROM sales.customers
EXCEPT
SELECT customer_id FROM sales.orders;
