// =============================================================================
// PATTERN 11: GRAPHS (MATRIX DFS/BFS & CONNECTED COMPONENTS)
// =============================================================================
// 🎯 When to use:
// - Number of Islands, Max Area of Island (Sink land in 2D grid).
// - Clone Graph (Map old nodes to cloned nodes).
// - Pacific Atlantic Water Flow (Multi-source DFS from ocean borders).
// =============================================================================

// 1. Number of Islands - Time: O(rows * cols), Space: O(rows * cols)
function numIslands(grid) {
    if (!grid.length) return 0;
    const rows = grid.length, cols = grid[0].length;
    let count = 0;

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
        grid[r][c] = '0'; // Sink land!
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}

const sampleGrid = [
    ["1","1","0","0"],
    ["1","1","0","0"],
    ["0","0","1","1"]
];
console.log("Number of Islands:", numIslands(sampleGrid)); // 2
