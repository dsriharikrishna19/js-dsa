// =============================================================================
// GRAPH IMPLEMENTATION & TRAVERSALS (BFS & DFS) IN JAVASCRIPT
// =============================================================================
// Graph representation using an Adjacency List (Map / Object of arrays).

class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    // Add an edge between two vertices
    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        this.adjacencyList.get(v1).push(v2);
        if (!this.isDirected) {
            this.adjacencyList.get(v2).push(v1);
        }
    }

    // Remove an edge
    removeEdge(v1, v2) {
        if (this.adjacencyList.has(v1)) {
            this.adjacencyList.set(
                v1,
                this.adjacencyList.get(v1).filter(v => v !== v2)
            );
        }
        if (!this.isDirected && this.adjacencyList.has(v2)) {
            this.adjacencyList.set(
                v2,
                this.adjacencyList.get(v2).filter(v => v !== v1)
            );
        }
    }

    // Remove a vertex and all its connected edges
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) return;
        while (this.adjacencyList.get(vertex).length) {
            const adjacentVertex = this.adjacencyList.get(vertex).pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        this.adjacencyList.delete(vertex);
    }

    // -------------------------------------------------------------------------
    // 1. DEPTH-FIRST SEARCH (DFS) - RECURSIVE & ITERATIVE
    // -------------------------------------------------------------------------
    dfsRecursive(start) {
        const result = [];
        const visited = new Set();
        const adj = this.adjacencyList;

        function dfs(vertex) {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of adj.get(vertex) || []) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }

        dfs(start);
        return result;
    }

    dfsIterative(start) {
        const result = [];
        const visited = new Set();
        const stack = [start];
        visited.add(start);

        while (stack.length > 0) {
            const current = stack.pop();
            result.push(current);

            for (const neighbor of this.adjacencyList.get(current) || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }

    // -------------------------------------------------------------------------
    // 2. BREADTH-FIRST SEARCH (BFS) - QUEUE BASED (SHORTEST PATH IN UNWEIGHTED)
    // -------------------------------------------------------------------------
    bfs(start) {
        const result = [];
        const visited = new Set();
        const queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            for (const neighbor of this.adjacencyList.get(current) || []) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    // Print graph representation
    print() {
        for (const [vertex, neighbors] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> [${neighbors.join(', ')}]`);
        }
    }
}

// -----------------------------------------------------------------------------
// Testing Graph
// -----------------------------------------------------------------------------
// Structure:
//     A --- B
//     |     |
//     C --- D
//      \   /
//        E
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("Graph Structure:");
graph.print();

console.log("\nDFS (Recursive) from A:", graph.dfsRecursive("A"));
console.log("DFS (Iterative) from A:", graph.dfsIterative("A"));
console.log("BFS from A:", graph.bfs("A"));
