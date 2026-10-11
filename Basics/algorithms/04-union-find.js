// =============================================================================
// UNION-FIND / DISJOINT SET UNION (DSU)
// =============================================================================
//
// 🎯 When to use this algorithm:
// - Dynamic connectivity (Are node A and node B connected in the same component?).
// - Cycle detection in undirected graphs (e.g. Graph Valid Tree, Redundant Connection).
// - Kruskal's Minimum Spanning Tree (MST).
// - Counting number of connected components.
//
// 💡 Two Key Optimizations:
// 1. Path Compression: Flattens tree during `find()`.
// 2. Union by Rank/Size: Attaches smaller tree under larger tree.
// With both optimizations, amortized time per operation is O(α(n)) ≈ O(1) practically!
// =============================================================================

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i); // Each node starts as its own parent
        this.rank = new Array(n).fill(1);
        this.componentsCount = n;
    }

    // Find the representative/root of the set containing 'i' with Path Compression
    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]); // Path compression
        }
        return this.parent[i];
    }

    // Union sets containing 'i' and 'j' with Union by Rank
    // Returns true if union was performed, false if they were ALREADY in the same set (Cycle!)
    union(i, j) {
        const rootI = this.find(i);
        const rootJ = this.find(j);

        if (rootI === rootJ) {
            return false; // Cycle detected: i and j already connected!
        }

        // Attach smaller rank tree under larger rank tree
        if (this.rank[rootI] < this.rank[rootJ]) {
            this.parent[rootI] = rootJ;
        } else if (this.rank[rootI] > this.rank[rootJ]) {
            this.parent[rootJ] = rootI;
        } else {
            this.parent[rootJ] = rootI;
            this.rank[rootI]++;
        }

        this.componentsCount--;
        return true;
    }

    // Check if connected
    connected(i, j) {
        return this.find(i) === this.find(j);
    }
}

// -----------------------------------------------------------------------------
// Classic Problem: Graph Valid Tree
// Given n nodes and edges, check if edges make a valid tree.
// Condition: Tree must have no cycles and exactly 1 connected component!
// -----------------------------------------------------------------------------
function validTree(n, edges) {
    if (edges.length !== n - 1) return false;

    const uf = new UnionFind(n);

    for (const [u, v] of edges) {
        if (!uf.union(u, v)) {
            return false; // Cycle!
        }
    }

    return uf.componentsCount === 1;
}

console.log("Is tree valid for n=5, [[0,1],[0,2],[0,3],[1,4]]?", validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])); // true
console.log("Is tree valid for n=5, [[0,1],[1,2],[2,3],[1,3],[1,4]]?", validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])); // false (cycle between 1-2-3)
