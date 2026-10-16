-- ===============================================================
-- Module 11: Views, Materialized Views, Functions & Triggers
-- ===============================================================

-- 1. Standard View: Simplified Customer Spending Summary
CREATE OR REPLACE VIEW sales.v_customer_summary AS
SELECT 
    c.customer_id,
    c.first_name,
    c.country,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.amount), 0.00) AS total_revenue
FROM sales.customers c
LEFT JOIN sales.orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.country;

-- 2. Materialized View (Pre-calculated cached analytics)
CREATE MATERIALIZED VIEW IF NOT EXISTS sales.mv_monthly_revenue AS
SELECT 
    DATE_TRUNC('month', order_date)::DATE AS sales_month,
    COUNT(order_id) AS total_orders,
    SUM(amount) AS monthly_revenue
FROM sales.orders
GROUP BY DATE_TRUNC('month', order_date);

-- Refresh the materialized view
-- REFRESH MATERIALIZED VIEW sales.mv_monthly_revenue;

-- 3. Stored Function: Compute discounted price
CREATE OR REPLACE FUNCTION sales.fn_calculate_discount(
    p_amount NUMERIC,
    p_discount_percentage NUMERIC
) 
RETURNS NUMERIC AS $$
BEGIN
    RETURN ROUND(p_amount - (p_amount * (p_discount_percentage / 100.0)), 2);
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 4. Trigger & Audit Trail Implementation
CREATE TABLE IF NOT EXISTS audit.order_audit_log (
    log_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    order_id INT,
    old_amount NUMERIC,
    new_amount NUMERIC,
    changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    action VARCHAR(20)
);

CREATE OR REPLACE FUNCTION audit.fn_log_order_changes()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO audit.order_audit_log (order_id, old_amount, new_amount, action)
    VALUES (OLD.order_id, OLD.amount, NEW.amount, TG_OP);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_audit_order_update
AFTER UPDATE ON sales.orders
FOR EACH ROW
WHEN (OLD.amount IS DISTINCT FROM NEW.amount)
EXECUTE FUNCTION audit.fn_log_order_changes();
