-- ===============================================================
-- Module 08: Constraints, Integrity & Advanced Data Types
-- ===============================================================

-- 1. Table with Rich Constraints & Modern Types (UUID, JSONB, Arrays)
CREATE TABLE IF NOT EXISTS sales.product_inventory (
    product_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    sku VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(200) NOT NULL,
    base_price NUMERIC(10, 2) NOT NULL CHECK (base_price > 0),
    tags TEXT[] DEFAULT '{}',
    attributes JSONB DEFAULT '{}'::jsonb,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Querying JSONB fields (Indexing & extracting)
INSERT INTO sales.product_inventory (sku, title, base_price, tags, attributes)
VALUES (
    'KB-RGB-01', 
    'Pro Mechanical Keyboard', 
    129.99, 
    ARRAY['hardware', 'peripherals', 'gaming'],
    '{"switch": "Cherry MX Blue", "wireless": true, "battery_hours": 40}'::jsonb
)
ON CONFLICT (sku) DO NOTHING;

-- Query JSONB with containment operator (@>) and extract operator (->>)
SELECT 
    sku,
    title,
    attributes->>'switch' AS key_switch,
    (attributes->>'wireless')::BOOLEAN AS is_wireless
FROM sales.product_inventory
WHERE attributes @> '{"wireless": true}';

-- 3. Composite Check constraint across columns
CREATE TABLE IF NOT EXISTS sales.promotions (
    promo_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    CONSTRAINT chk_valid_date_range CHECK (end_date >= start_date)
);
