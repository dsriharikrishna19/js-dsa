-- ===============================================================
-- Module 12: Security, Roles & Database Administration
-- ===============================================================

-- 1. Create Roles with Separation of Privileges
CREATE ROLE read_only_app WITH LOGIN PASSWORD 'secure_readonly_password';
CREATE ROLE read_write_app WITH LOGIN PASSWORD 'secure_readwrite_password';

-- 2. Schema-Level Access Control
GRANT USAGE ON SCHEMA sales TO read_only_app, read_write_app;

-- 3. Table Permissions (Least Privilege Rule)
-- Read-only role
GRANT SELECT ON ALL TABLES IN SCHEMA sales TO read_only_app;

-- Read-write role
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA sales TO read_write_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA sales TO read_write_app;

-- 4. Revoke Dangerous Privileges
REVOKE DROP, TRUNCATE ON ALL TABLES IN SCHEMA sales FROM read_write_app;

-- 5. Maintenance Commands (Run periodically by DBA / background jobs)
-- VACUUM ANALYZE sales.orders;
-- REINDEX TABLE sales.orders;
