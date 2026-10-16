# PostgreSQL & SQL Complete Mastery Guide

This guide covers all SQL command classifications, core architectural features, and hands-on production PostgreSQL examples based on `Customers`, `Orders`, and `Shippings`.

---

## Roadmap Overview

```
                      ┌────────────────────────────────────────┐
                      │          SQL Command Taxonomy          │
                      └──────────────────┬─────────────────────┘
         ┌──────────────┬────────────────┼──────────────┬────────────────┐
         │              │                │              │                │
      ▼  │           ▼  │             ▼  │           ▼  │             ▼  │
   ┌─────┴────┐   ┌─────┴────┐     ┌─────┴────┐   ┌─────┴────┐     ┌─────┴────┐
   │   DDL    │   │   DML    │     │   DQL    │   │   DCL    │     │   TCL    │
   │Structure │   │Data Mod. │     │ Retrieval│   │Access/Sec│     │Transaction
   └──────────┘   └──────────┘     └──────────┘   └──────────┘     └──────────┘
```

---

## 1. SQL Command Classifications

| Classification | Meaning | Key Statements | Description |
| :--- | :--- | :--- | :--- |
| **DDL** | Data Definition Language | `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME` | Defines and manages database schemas and table definitions. |
| **DML** | Data Manipulation Language | `INSERT`, `UPDATE`, `DELETE`, `MERGE` | Inserts, modifies, and purges rows of data. |
| **DQL** | Data Query Language | `SELECT` | Queries and extracts records from one or more tables. |
| **DCL** | Data Control Language | `GRANT`, `REVOKE` | Manages role authorizations and database permissions. |
| **TCL** | Transaction Control Language | `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT` | Controls atomic unit execution across relational state changes. |

> [!NOTE]
> `SELECT` is commonly grouped as DQL, but some standards classify it under DML. `TRUNCATE` is formally DDL because it drops and recreates underlying storage buffers rather than logging per-row deletions.

---

## 2. SQL Concepts vs. Command Languages

Beyond statements, relational workflows depend on engine features:

| Category | Concepts / Clauses | Purpose |
| :--- | :--- | :--- |
| **Constraints** | `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `CHECK`, `NOT NULL` | Guarantees data integrity and domain validity. |
| **Joins** | `INNER`, `LEFT`, `RIGHT`, `FULL OUTER`, `CROSS`, `Self-Join` | Combines records across relations via join predicates. |
| **Set Operations** | `UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT` | Blends distinct query result sets. |
| **Aggregation & Grouping** | `GROUP BY`, `HAVING`, `COUNT`, `SUM`, `AVG`, `MIN`, `MAX` | Computes aggregate metrics over data buckets. |
| **Subqueries & CTEs** | Correlated Subqueries, `EXISTS`, `WITH`, Recursive CTEs | Modularizes nested or hierarchical queries. |
| **Window Functions** | `OVER()`, `PARTITION BY`, `ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()` | Computes row-level calculations across sliding partitions. |
| **Indexes & Performance** | B-Tree, GIN, GiST, `EXPLAIN ANALYZE`, Partial Indexes | Optimizes scan patterns and query latency. |
| **Programmability** | Views, Materialized Views, Triggers, Stored Procedures, Functions | Embeds reusable business rules into database objects. |

---

## 3. Practical PostgreSQL Implementation

### 3.1 Schema & Data Definition (DDL)

```sql
-- Create base Customers table
CREATE TABLE Customers (
    customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    country VARCHAR(50) DEFAULT 'India',
    email VARCHAR(255) UNIQUE
);

-- Create Orders table with foreign key integrity
CREATE TABLE Orders (
    order_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer_id INT REFERENCES Customers(customer_id) ON DELETE CASCADE,
    item VARCHAR(100) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL CHECK (amount >= 0)
);

-- Create Shippings table
CREATE TABLE Shippings (
    shipping_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    customer INT REFERENCES Customers(customer_id),
    status VARCHAR(50) NOT NULL CHECK (status IN ('Pending', 'Shipped', 'Delivered'))
);

-- Schema Evolution (ALTER & RENAME)
ALTER TABLE Customers ADD COLUMN phone VARCHAR(20);
ALTER TABLE Customers RENAME COLUMN phone TO phone_number;
```

---

### 3.2 Data Modification (DML) with PostgreSQL `RETURNING`

```sql
-- 1. Insert with RETURNING
INSERT INTO Customers (first_name, country, email)
VALUES 
    ('Krishna', 'India', 'krishna@example.com'),
    ('John', 'USA', 'john@example.com'),
    ('Priya', 'India', 'priya@example.com')
RETURNING customer_id, first_name;

-- 2. Insert Orders
INSERT INTO Orders (customer_id, item, amount)
VALUES 
    (1, 'Keyboard', 400.00),
    (1, 'Mouse', 150.00),
    (2, 'Monitor', 1200.00);

-- 3. Upsert Pattern (ON CONFLICT)
INSERT INTO Customers (customer_id, first_name, country, email)
OVERRIDING SYSTEM VALUE
VALUES (1, 'Krishna Updated', 'India', 'krishna@example.com')
ON CONFLICT (email) 
DO UPDATE SET first_name = EXCLUDED.first_name
RETURNING *;

-- 4. Safe Conditional Update
UPDATE Customers
SET first_name = 'Sri Krishna'
WHERE customer_id = 1
RETURNING customer_id, first_name;

-- 5. Delete with Returning
DELETE FROM Orders
WHERE amount < 200.00
RETURNING *;
```

---

### 3.3 Data Query Language (DQL), Joins & Window Functions

#### Multi-table Join with Aggregate Filter

```sql
SELECT 
    c.customer_id,
    c.first_name,
    o.order_id,
    o.item,
    o.amount,
    s.status
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
LEFT JOIN Shippings s ON s.customer = c.customer_id
WHERE s.status = 'Delivered';
```

#### Window Functions: Running Total & Row Number

```sql
SELECT 
    c.customer_id,
    c.first_name,
    o.order_id,
    o.item,
    o.amount,
    SUM(o.amount) OVER (PARTITION BY c.customer_id ORDER BY o.order_id) AS customer_running_total,
    SUM(o.amount) OVER (ORDER BY o.order_id) AS overall_running_total,
    ROW_NUMBER() OVER (PARTITION BY c.customer_id ORDER BY o.amount DESC) AS rank_by_spend
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id;
```

#### Self-Join: Find Customers from the Same Country

```sql
SELECT 
    c1.customer_id AS customer_1_id,
    c1.first_name  AS customer_1,
    c2.customer_id AS customer_2_id,
    c2.first_name  AS customer_2,
    c1.country
FROM Customers c1
JOIN Customers c2
    ON c1.country = c2.country
   AND c1.customer_id < c2.customer_id
ORDER BY c1.country;
```

---

### 3.4 Data Control Language (DCL)

```sql
-- Create read-only analytical role
CREATE ROLE reporting_user WITH LOGIN PASSWORD 'secure_pass123';

-- Grant access on specific schema/tables
GRANT CONNECT ON DATABASE postgres TO reporting_user;
GRANT USAGE ON SCHEMA public TO reporting_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO reporting_user;

-- Revoke permissions
REVOKE SELECT ON TABLE Orders FROM reporting_user;
```

---

### 3.5 Transaction Control Language (TCL) & Isolation

```sql
BEGIN;

-- Deduct balance / adjust order
UPDATE Orders
SET amount = amount - 50.00
WHERE order_id = 1;

-- Define checkpoint
SAVEPOINT sp_order_adjusted;

-- Attempt secondary adjustment
UPDATE Orders
SET amount = amount + 50.00
WHERE order_id = 9999; -- Missing ID or failure scenario

-- Revert to savepoint if failed
ROLLBACK TO SAVEPOINT sp_order_adjusted;

-- Finalize persistent state
COMMIT;
```

---

## 4. Structured 13-Module Curriculum Flow

```
[Module 01: DDL & Schemas]
         │
         ▼
[Module 02: DQL & Filtering]
         │
         ▼
[Module 03: DML & Data Modification]  ◄── Next Up (INSERT, UPDATE, DELETE, ON CONFLICT)
         │
         ▼
[Module 04: Joins & Set Operations]
         │
         ▼
[Module 05: Aggregation & Grouping]
         │
         ▼
[Module 06: Subqueries & CTEs]
         │
         ▼
[Module 07: Window Functions & Analytics]
         │
         ▼
[Module 08: Constraints, Keys & Data Types]
         │
         ▼
[Module 09: TCL & Concurrency Control]
         │
         ▼
[Module 10: Indexing & Query Tuning]
         │
         ▼
[Module 11: Views, Triggers & Procedures]
         │
         ▼
[Module 12: Security, Roles & Administration]
         │
         ▼
[Module 13: Production Projects & Design]
```

### Module Breakdown

| Module | Core Concepts | Hands-On Focus |
| :--- | :--- | :--- |
| **01. Database Fundamentals & DDL** | Schemas, Types, `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | Safe schema migrations without downtime. |
| **02. DQL & Filtering** | `SELECT`, `WHERE`, `DISTINCT`, `ORDER BY`, `LIMIT`, `CASE` | Predicate logic, truth tables with `NULL`. |
| **03. DML & Modification** | `INSERT`, `UPDATE`, `DELETE`, `RETURNING`, `ON CONFLICT` | Atomic upserts, bulk loading, mutation locks. |
| **04. Joins** | `INNER`, `LEFT`, `RIGHT`, `FULL`, `CROSS`, Self-joins | Relational algebra, Cartesian explosion mitigation. |
| **05. Aggregations & Sets** | `GROUP BY`, `HAVING`, `UNION [ALL]`, `INTERSECT`, `EXCEPT` | Multi-dimensional summarization, rollup logic. |
| **06. Subqueries & CTEs** | Correlated subqueries, `EXISTS`, `WITH`, Recursive CTEs | Tree structures, parent-child hierarchies. |
| **07. Advanced Window Queries** | `OVER()`, `PARTITION BY`, `ROW_NUMBER`, `RANK`, `LAG`, `LEAD` | Financial ledgers, delta calculations, moving avgs. |
| **08. Constraints & Types** | `PK`, `FK`, `CHECK`, `NUMERIC`, `TIMESTAMPTZ`, `JSONB` | Data integrity guarantees, JSON path operators. |
| **09. TCL & Concurrency** | `BEGIN`, `COMMIT`, `ROLLBACK`, MVCC, isolation levels | Deadlock avoidance, row-level locking (`FOR UPDATE`). |
| **10. Indexes & Query Optimization** | B-Tree, GIN, `EXPLAIN (ANALYZE, BUFFERS)` | Eliminating Seq Scans, index selectivity. |
| **11. Database Objects** | Views, Materialized Views, Stored Functions, Triggers | Automated audit trails, caching layers. |
| **12. Security & Admin** | Roles, Grants, `pg_dump`, `VACUUM`, `ANALYZE`, Connection pools | Operational stability, maintenance routines. |
| **13. Production Projects** | Pagination (`OFFSET` vs. Keyset), audit logging, migrations | Complete end-to-end schema & reporting architecture. |
