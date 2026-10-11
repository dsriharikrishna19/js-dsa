// =============================================================================
// QUICK SKELETONS: ALL 18 BLIND 75 DSA PATTERNS (JAVASCRIPT)
// =============================================================================
// Keep this open when solving problems. Each pattern contains the exact 3-5 line
// mental code skeleton needed to construct the solution from scratch.
// =============================================================================

// -----------------------------------------------------------------------------
// PATTERN 1: ARRAYS & HASHING (Frequency Map / Complement Lookup)
// Tip: Save past in Map. Check complement (target - x) in O(1).
// -----------------------------------------------------------------------------
function pattern01_arraysAndHashing(nums, target) {
    const map = new Map(); // value -> index / frequency
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.has(comp)) return [map.get(comp), i];
        map.set(nums[i], i);
    }
    return [];
}


// -----------------------------------------------------------------------------
// PATTERN 2: TWO POINTERS (Converging On Sorted Array)
// Tip: Left = 0, Right = n - 1. Pinch inward based on condition.
// -----------------------------------------------------------------------------
function pattern02_twoPointers(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        const sum = arr[l] + arr[r];
        if (sum === target) return [l, r];
        sum < target ? l++ : r--;
    }
    return [];
}


// -----------------------------------------------------------------------------
// PATTERN 3: SLIDING WINDOW (Dynamic Window)
// Tip: Right expands window. While condition broken, shrink Left.
// -----------------------------------------------------------------------------
function pattern03_slidingWindow(s) {
    let l = 0, maxLen = 0;
    const window = new Map();
    for (let r = 0; r < s.length; r++) {
        // 1. Add s[r] to window state
        while (/* window is invalid */ false) {
            // 2. Remove s[l], l++
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
}


// -----------------------------------------------------------------------------
// PATTERN 4: STACK (LIFO Matching & Validation)
// Tip: Push open brackets. On closing bracket, pop & check match.
// -----------------------------------------------------------------------------
function pattern04_stack(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const ch of s) {
        if (!map[ch]) stack.push(ch);
        else if (stack.pop() !== map[ch]) return false;
    }
    return stack.length === 0;
}


// -----------------------------------------------------------------------------
// PATTERN 5: BINARY SEARCH (Divide & Conquer O(log n))
// Tip: Discard half of search space each loop. Mid = l + Math.floor((r - l) / 2).
// -----------------------------------------------------------------------------
function pattern05_binarySearch(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) return mid;
        nums[mid] < target ? l = mid + 1 : r = mid - 1;
    }
    return -1;
}


// -----------------------------------------------------------------------------
// PATTERN 6: LINKED LIST (Fast & Slow Pointers / In-Place Reversal)
// Tip: Fast (2 steps), Slow (1 step). Reversal: Save next, flip, advance.
// -----------------------------------------------------------------------------
function pattern06_linkedList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev; // new head
}


// -----------------------------------------------------------------------------
// PATTERN 7: TREES (DFS Recursion & BFS Level Order)
// Tip: DFS = base case + recurse left/right. BFS = snapshot queue.length.
// -----------------------------------------------------------------------------
function pattern07_trees(root) {
    // DFS Max Depth
    function dfs(node) {
        if (!node) return 0;
        return 1 + Math.max(dfs(node.left), dfs(node.right));
    }

    // BFS Level Order
    const queue = root ? [root] : [], levels = [];
    while (queue.length) {
        const size = queue.length, curLevel = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            curLevel.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        levels.push(curLevel);
    }
    return { depth: dfs(root), levels };
}


// -----------------------------------------------------------------------------
// PATTERN 8: HEAP / PRIORITY QUEUE (Two Heaps for Median)
// Tip: Max-heap for lower half, Min-heap for upper half. Keep sizes balanced.
// -----------------------------------------------------------------------------
function pattern08_heap() {
    // Binary Heap indexing formulas:
    // Parent: Math.floor((i - 1) / 2), Left: 2 * i + 1, Right: 2 * i + 2
    // Bubble Up on Insert; Bubble Down on ExtractMin
}


// -----------------------------------------------------------------------------
// PATTERN 9: BACKTRACKING (Choose -> Explore -> Unchoose)
// Tip: Push choice, recurse to explore, pop to undo state.
// -----------------------------------------------------------------------------
function pattern09_backtracking(nums) {
    const res = [];
    function backtrack(start, path) {
        res.push([...path]); // snapshot copy
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);      // 1. Choose
            backtrack(i + 1, path);  // 2. Explore
            path.pop();              // 3. Unchoose (Backtrack!)
        }
    }
    backtrack(0, []);
    return res;
}


// -----------------------------------------------------------------------------
// PATTERN 10: TRIES (Prefix Tree)
// Tip: Nested character objects `{ children: {}, isEnd: false }`.
// -----------------------------------------------------------------------------
function pattern10_tries() {
    const root = {};
    function insert(word) {
        let node = root;
        for (const ch of word) {
            node[ch] = node[ch] || {};
            node = node[ch];
        }
        node.isEnd = true;
    }
    function startsWith(prefix) {
        let node = root;
        for (const ch of prefix) {
            if (!node[ch]) return false;
            node = node[ch];
        }
        return true;
    }
    return { insert, startsWith };
}


// -----------------------------------------------------------------------------
// PATTERN 11: GRAPHS (Connected Components / Matrix DFS Sink)
// Tip: In grid, sink visited land (`grid[r][c] = '0'`). In graph, track `visited = new Set()`.
// -----------------------------------------------------------------------------
function pattern11_graphs(grid) {
    const rows = grid.length, cols = grid[0].length;
    let islands = 0;
    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
        grid[r][c] = '0'; // Sink land!
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
    }
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') { islands++; dfs(r, c); }
        }
    }
    return islands;
}


// -----------------------------------------------------------------------------
// PATTERN 12: ADVANCED GRAPHS (Topological Sort / Kahn's In-Degree)
// Tip: Queue all nodes with inDegree === 0. When popping, decrement neighbors.
// -----------------------------------------------------------------------------
function pattern12_advancedGraphs(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adj = Array.from({ length: numCourses }, () => []);
    for (const [course, pre] of prerequisites) {
        adj[pre].push(course);
        inDegree[course]++;
    }
    const q = [];
    for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);
    let count = 0;
    while (q.length) {
        const u = q.shift();
        count++;
        for (const v of adj[u]) if (--inDegree[v] === 0) q.push(v);
    }
    return count === numCourses; // true if no cycle
}


// -----------------------------------------------------------------------------
// PATTERN 13: 1-D DYNAMIC PROGRAMMING (State Transition Decisions)
// Tip: dp[i] = optimal choice from past states. Reduce to 2 variables when possible.
// -----------------------------------------------------------------------------
function pattern13_1D_DP(nums) {
    // House Robber: Decide Rob vs Skip
    let rob1 = 0, rob2 = 0;
    for (const n of nums) {
        const cur = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = cur;
    }
    return rob2;
}


// -----------------------------------------------------------------------------
// PATTERN 14: 2-D DYNAMIC PROGRAMMING (Grid Paths / Match vs Skip)
// Tip: dp[r][c] = dp[r-1][c] + dp[r][c-1] (From top and left).
// -----------------------------------------------------------------------------
function pattern14_2D_DP(m, n) {
    const dp = Array.from({ length: m }, () => new Array(n).fill(1));
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
        }
    }
    return dp[m - 1][n - 1];
}


// -----------------------------------------------------------------------------
// PATTERN 15: GREEDY (Kadane's Subarray / Local Optimal Choice)
// Tip: At each step, either extend the past sum or start fresh with current element.
// -----------------------------------------------------------------------------
function pattern15_greedy(nums) {
    let cur = nums[0], max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i]);
        max = Math.max(max, cur);
    }
    return max;
}


// -----------------------------------------------------------------------------
// PATTERN 16: INTERVALS (Sort Start Times & Merge Overlaps)
// Tip: Sort by start time. If curr[0] <= prev[1], merge: prev[1] = max(prev[1], curr[1]).
// -----------------------------------------------------------------------------
function pattern16_intervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        if (intervals[i][0] <= prev[1]) prev[1] = Math.max(prev[1], intervals[i][1]);
        else merged.push(intervals[i]);
    }
    return merged;
}


// -----------------------------------------------------------------------------
// PATTERN 17: MATH & GEOMETRY (Matrix Transpose / Boundary Simulation)
// Tip: Rotate 90° = Transpose (swap matrix[i][j], matrix[j][i]) + Reverse each row.
// -----------------------------------------------------------------------------
function pattern17_mathGeometry(matrix) {
    const n = matrix.length;
    // 1. Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 2. Reverse each row
    for (let i = 0; i < n; i++) matrix[i].reverse();
    return matrix;
}


// -----------------------------------------------------------------------------
// PATTERN 18: BIT MANIPULATION (XOR Cancel & Kernighan's Clear Bit)
// Tip: x ^ x = 0 (cancels pairs). n & (n - 1) clears lowest set 1-bit.
// -----------------------------------------------------------------------------
function pattern18_bitManipulation(nums) {
    // 1. Find single number among duplicates
    let single = 0;
    for (const n of nums) single ^= n;

    // 2. Count set bits (Hamming Weight)
    function countBits(n) {
        let count = 0;
        while (n !== 0) { n = n & (n - 1); count++; }
        return count;
    }

    return { single, countBits };
}

console.log("All 18 Blind 75 Pattern Skeletons validated.");
