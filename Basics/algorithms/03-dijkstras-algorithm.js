// =============================================================================
// DIJKSTRA'S SHORTEST PATH ALGORITHM
// =============================================================================
//
// 🎯 Problem:
// Find the shortest path from a starting node to all other nodes in a weighted graph
// with NON-NEGATIVE edge weights.
//
// 💡 Intuition:
// Greedy strategy using a priority queue (or min-distance scan).
// 1. Initialize distances from start to all nodes as Infinity, start node as 0.
// 2. Continually pick the unvisited node with smallest current distance.
// 3. "Relax" all edges leaving this node:
//    if (distance[u] + weight(u, v) < distance[v]) => update distance[v]
//
// Time Complexity: O((V + E) log V) with Min-Heap, or O(V²) with simple array scan
// Space Complexity: O(V)
// =============================================================================

function dijkstra(graph, startNode) {
    const distances = {};
    const visited = new Set();
    const previous = {}; // For path reconstruction

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[startNode] = 0;

    while (visited.size < Object.keys(graph).length) {
        // Find unvisited node with smallest distance
        let minNode = null;
        let minDistance = Infinity;

        for (const node in distances) {
            if (!visited.has(node) && distances[node] < minDistance) {
                minDistance = distances[node];
                minNode = node;
            }
        }

        if (minNode === null || minDistance === Infinity) {
            break; // Remaining nodes are unreachable
        }

        visited.add(minNode);

        // Relax neighbors
        for (const neighbor in graph[minNode]) {
            const weight = graph[minNode][neighbor];
            const newDist = distances[minNode] + weight;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                previous[neighbor] = minNode;
            }
        }
    }

    return { distances, previous };
}

// Function to reconstruct shortest path to target
function getShortestPath(previous, target) {
    const path = [];
    let current = target;
    while (current) {
        path.unshift(current);
        current = previous[current];
    }
    return path;
}

// -----------------------------------------------------------------------------
// Test Graph (Weighted)
// -----------------------------------------------------------------------------
// Graph:
// A --(4)--> B --(1)--> C
// |          ^          ^
// (2)       (1)        (5)
// v          |          |
// D ---------+----------+
const weightedGraph = {
    A: { B: 4, D: 2 },
    B: { C: 1 },
    C: {},
    D: { B: 1, C: 5 }
};

const result = dijkstra(weightedGraph, "A");
console.log("Shortest Distances from A:", result.distances);
// { A: 0, B: 3, C: 4, D: 2 } (A -> D -> B is cost 3, better than direct A -> B which is 4)
console.log("Shortest path to C:", getShortestPath(result.previous, "C")); // ['A', 'D', 'B', 'C']
