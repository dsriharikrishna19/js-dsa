# ⚡ Master DSA Patterns: Simple Memory Tips & Tricks Cheat Sheet

When preparing for an interview or revising, don't read full 100-line solutions. Read the **Trigger Keyword**, the **Mental Picture**, and the **3-Line Code Skeleton**.

---

## 🧭 Rapid Pattern Selector

```
Is the array SORTED?
  ├── Looking for target/pair? ──> Two Pointers (left=0, right=n-1)
  └── Looking for single item or boundary? ──> Binary Search (mid = l + (r-l)/2)

Is it asking for SUBARRAY / SUBSTRING?
  ├── Contiguous window with min/max length or sum? ──> Sliding Window (expand right, shrink left)
  └── Max contiguous sum across all negatives? ──> Kadane's Algorithm (cur = Math.max(x, cur + x))

Is it about ORDERING / ELEMENTS NEXT TO EACH OTHER?
  ├── Next Greater / Smaller element? ──> Monotonic Stack (pop while incoming is greater)
  └── Dependencies / Order of execution? ──> Topological Sort (in-degree 0 queue)

Is it asking for ALL COMBINATIONS / SUBSETS / PERMUTATIONS?
  └── Choose ──> Explore ──> Unchoose (Backtracking with pop())

Is it a GRAPH / TREE?
  ├── Shortest path (unweighted) or level-by-level? ──> BFS (Queue with fixed levelSize)
  ├── Shortest path (weighted)? ──> Dijkstra's (Priority Queue / Min-Heap)
  ├── Cycle / Components in undirected graph? ──> Union-Find (DSU)
  └── Deep exhaustive paths or tree properties? ──> DFS (Recursion)

Is it asking for MAX / MIN / NUMBER OF WAYS with OVERLAPPING SUBPROBLEMS?
  └── Dynamic Programming (State definition + Base case + Transition)
```

---

## 🧩 All 15 Patterns: Fast Memory Cards

---

### 1. Frequency Counter / Hash Map
* **Trigger:** Anagrams, Frequency count, Pairs with complement ($A + B = \text{Target}$).
* **Mental Trick:** *"Don't loop twice. Store the past in a Map, query the complement in $O(1)$."*
* **3-Line Skeleton:**
  ```javascript
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(target - nums[i])) return [seen.get(target - nums[i]), i];
    seen.set(nums[i], i);
  }
  ```

---

### 2. Two Pointers (Converging)
* **Trigger:** Sorted array, Pairs, Triplets (3Sum), Palindrome check.
* **Mental Trick:** *"Opposite ends pinching inward. Sum too small? Move left up. Sum too big? Move right down."*
* **3-Line Skeleton:**
  ```javascript
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    sum < target ? left++ : right--;
  }
  ```

---

### 3. Sliding Window (Dynamic Size)
* **Trigger:** Longest / shortest contiguous subarray or substring satisfying condition.
* **Mental Trick:** *"Caterpillar crawls: Head (`right`) expands to eat elements. Tail (`left`) shrinks when stomach is too full (condition violated)."*
* **3-Line Skeleton:**
  ```javascript
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    // 1. Add s[right] to window state
    while (/* window condition is invalid */) {
      // 2. Remove s[left], left++
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  ```

---

### 4. Fast & Slow Pointers (Tortoise & Hare)
* **Trigger:** Detect cycle in Linked List, Find middle of Linked List in 1 pass, Happy Number.
* **Mental Trick:** *"Runner A does 1 step, Runner B does 2 steps. If there's a track loop, Runner B will lap and hit Runner A."*
* **3-Line Skeleton:**
  ```javascript
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // Cycle!
  }
  ```

---

### 5. Monotonic Stack
* **Trigger:** Next Greater Element, Next Smaller Element, Daily Temperatures, Stock Span.
* **Mental Trick:** *"Line of people in front of a cinema screen. If a taller person arrives, they block (pop) all shorter people behind them."*
* **3-Line Skeleton:**
  ```javascript
  const stack = []; // stores indices
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i]; // found next greater!
    }
    stack.push(i);
  }
  ```

---

### 6. Binary Search (Standard & Rotated)
* **Trigger:** Sorted array, $O(\log N)$ requirement, Search in rotated sorted array, Search answer space.
* **Mental Trick:** *"Always discard half. In rotated array, at least ONE half is always normally sorted. Check if target lies within the sorted half."*
* **3-Line Skeleton:**
  ```javascript
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (nums[mid] === target) return mid;
    nums[mid] < target ? l = mid + 1 : r = mid - 1;
  }
  ```

---

### 7. Tree & Graph DFS
* **Trigger:** Max Depth, Path Sum, BST Validation, Connected islands in 2D grid.
* **Mental Trick:** *"Dive all the way down to the bottom leaf before coming back up. In a grid, sink visited land (`grid[r][c] = '0'`)."*
* **3-Line Skeleton:**
  ```javascript
  function dfs(node) {
    if (!node) return 0;
    return 1 + Math.max(dfs(node.left), dfs(node.right));
  }
  ```

---

### 8. Tree & Graph BFS
* **Trigger:** Level Order Traversal, Right Side View, Shortest path in unweighted grid (Rotting Oranges).
* **Mental Trick:** *"Water ripple spreading outwards. Freeze `levelSize = queue.length` so you only process one ring at a time."*
* **3-Line Skeleton:**
  ```javascript
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length; // Snapshot level count!
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  ```

---

### 9. Backtracking
* **Trigger:** Subsets, Permutations, Combination Sum, Word Search, N-Queens.
* **Mental Trick:** *"The 3-Step Dance: 1. Choose (`push`), 2. Explore (`recurse`), 3. Unchoose (`pop`). Always push a copy `[...path]` to results!"*
* **3-Line Skeleton:**
  ```javascript
  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);        // Choose
      backtrack(i + 1, path);    // Explore
      path.pop();                // Unchoose
    }
  }
  ```

---

### 10. Topological Sort (Kahn's Algorithm)
* **Trigger:** Course prerequisites, Task build order, Alien dictionary.
* **Mental Trick:** *"Count incoming arrows (in-degree). Queue the ones with 0 arrows. When you take a course, remove its outgoing arrows."*
* **3-Line Skeleton:**
  ```javascript
  const queue = []; // push all nodes with inDegree[i] === 0
  while (queue.length > 0) {
    const curr = queue.shift();
    count++;
    for (const neighbor of adj[curr]) {
      if (--inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }
  return count === numCourses;
  ```

---

### 11. Dynamic Programming (1-D & 2-D)
* **Trigger:** "Count ways", "Min/Max cost/coins", "Is it possible to reach...".
* **Mental Trick:** *"Past results solve future states. Identify: 1. What does `dp[i]` mean? 2. Base case (`dp[0]`). 3. State transition (`dp[i] = dp[i-1] + dp[i-2]`)."*
* **3-Line Skeleton (House Robber / Decision):**
  ```javascript
  let rob1 = 0, rob2 = 0;
  for (const n of nums) {
    const current = Math.max(n + rob1, rob2);
    rob1 = rob2;
    rob2 = current;
  }
  ```

---

### 12. Kadane's Algorithm
* **Trigger:** Maximum contiguous subarray sum.
* **Mental Trick:** *"Should I carry baggage from the past (`cur + x`), or start fresh with myself (`x`)? Take `Math.max(x, cur + x)`."*
* **3-Line Skeleton:**
  ```javascript
  let cur = nums[0], max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(max, cur);
  }
  ```

---

### 13. Intervals & Overlaps
* **Trigger:** Meeting rooms, Calendar conflicts, Merge overlapping time segments.
* **Mental Trick:** *"ALWAYS sort by start time first (`a[0] - b[0]`). Overlap exists if next start $\le$ previous end (`curr[0] <= prev[1]`)."*
* **3-Line Skeleton:**
  ```javascript
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    if (intervals[i][0] <= prev[1]) prev[1] = Math.max(prev[1], intervals[i][1]);
    else merged.push(intervals[i]);
  }
  ```

---

### 14. Union-Find / DSU
* **Trigger:** Connected components, Cycle detection in undirected graphs, Valid tree.
* **Mental Trick:** *"Find root with path compression. Union joins smaller tree to bigger tree. If `find(u) === find(v)` before union, there is a cycle!"*
* **3-Line Skeleton:**
  ```javascript
  find(i) {
    if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
    return this.parent[i];
  }
  union(i, j) {
    const r1 = this.find(i), r2 = this.find(j);
    if (r1 === r2) return false; // Cycle!
    this.parent[r1] = r2; return true;
  }
  ```

---

### 15. Bit Manipulation Magic Tricks
* **Trigger:** Single number among pairs, Check power of 2, Count 1 bits.
* **Mental Trick:**
  - `a ^ a = 0` and `a ^ 0 = a` $\implies$ Duplicates vanish!
  - `n & (n - 1)` $\implies$ Clears the lowest set `1` bit (Kernighan's trick).
  - `n > 0 && (n & (n - 1)) === 0` $\implies$ Power of 2!
* **3-Line Skeleton (Single Number):**
  ```javascript
  let res = 0;
  for (const n of nums) res ^= n;
  return res;
  ```

---

## ⏱️ 60-Second Interview Checklist
Before you begin writing code in an interview:
1. **Clarify Constraints:** Ask *"What is the max value of N?"*
2. **Clarify Edge Cases:** Empty array? All negative numbers? Single element? Duplicates allowed?
3. **State the Brute Force first:** *"The brute force is $O(N^2)$ by checking all pairs..."*
4. **Name the Pattern:** *"We can optimize this to $O(N)$ using [Pattern Name] because..."*
5. **Trace 1 Example:** Manually walk through pointers or window state before coding.
