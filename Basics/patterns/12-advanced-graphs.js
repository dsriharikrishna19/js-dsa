// =============================================================================
// PATTERN 12: ADVANCED GRAPHS (TOPOLOGICAL SORT & ALIEN DICTIONARY)
// =============================================================================
// 🎯 When to use:
// - Course Schedule (DAG Cycle Detection via Kahn's In-Degree).
// - Alien Dictionary (Deriving alphabetical precedence).
// =============================================================================

function canFinishCourses(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adj = Array.from({ length: numCourses }, () => []);

    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let taken = 0;
    while (queue.length) {
        const u = queue.shift();
        taken++;
        for (const v of adj[u]) {
            if (--inDegree[v] === 0) queue.push(v);
        }
    }

    return taken === numCourses;
}

console.log("Can finish courses [[1,0]]:", canFinishCourses(2, [[1, 0]])); // true
console.log("Can finish courses [[1,0],[0,1]] (Cycle):", canFinishCourses(2, [[1, 0], [0, 1]])); // false
