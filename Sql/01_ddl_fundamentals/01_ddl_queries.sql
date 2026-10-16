-- ===============================================================
-- Module 01: Database Fundamentals & DDL (Data Definition Language)
-- PostgreSQL Syntax & Production Patterns
-- ===============================================================

-- 1. Create schemas for domain separation
CREATE SCHEMA IF NOT EXISTS sales;
CREATE SCHEMA IF NOT EXISTS audit;

-- 2. Create base Customers table
CREATE TABLE IF NOT EXISTS sales.customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    country VARCHAR(50) DEFAULT 'India',
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Orders table with Foreign Key reference
CREATE TABLE IF NOT EXISTS sales.orders (
    order_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES sales.customers(customer_id) ON DELETE CASCADE,
    item VARCHAR(100) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL CHECK (amount >= 0),
    order_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 4. Create Shippings table
CREATE TABLE IF NOT EXISTS sales.shippings (
    shipping_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INT NOT NULL REFERENCES sales.customers(customer_id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL CHECK (status IN ('Pending', 'Shipped', 'Delivered')),
    shipped_at TIMESTAMPTZ
);

-- 5. Safe Schema Migrations (ALTER & RENAME)
-- Add a phone column
ALTER TABLE sales.customers
ADD COLUMN IF NOT EXISTS phone VARCHAR(20);

-- Rename a column safely
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'sales' AND table_name = 'customers' AND column_name = 'phone'
    ) THEN
        ALTER TABLE sales.customers RENAME COLUMN phone TO phone_number;
    END IF;
END $$;

-- 6. Add Index for FK performance
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON sales.orders(customer_id);

-- DANGER DEMO: TRUNCATE vs DROP (Run with caution)
-- TRUNCATE TABLE sales.orders RESTART IDENTITY CASCADE;
-- DROP TABLE sales.orders;
