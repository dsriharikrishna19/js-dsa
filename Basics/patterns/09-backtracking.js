// =============================================================================
// PATTERN 09: BACKTRACKING (CHOOSE -> EXPLORE -> UNCHOOSE)
// =============================================================================
// 🎯 When to use:
// - Finding all combinations (Combination Sum).
// - Generating all permutations, subsets.
// - Grid word search, N-Queens, Sudoku.
// =============================================================================

// 1. Combination Sum - Time: O(2^(target/min)), Space: O(target/min)
function combinationSum(candidates, target) {
    const res = [];
    function backtrack(start, path, sum) {
        if (sum === target) { res.push([...path]); return; }
        if (sum > target) return;
        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]); // Choose
            backtrack(i, path, sum + candidates[i]); // Explore (can reuse candidate)
            path.pop(); // Unchoose (Backtrack!)
        }
    }
    backtrack(0, [], 0);
    return res;
}

// 2. Subsets (Power Set) - Time: O(2^n), Space: O(n)
function subsets(nums) {
    const res = [];
    function backtrack(start, path) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return res;
}

console.log("Combination Sum ([2,3,6,7], target 7):", combinationSum([2, 3, 6, 7], 7)); // [[2,2,3], [7]]
console.log("Subsets of [1,2]:", subsets([1, 2])); // [[], [1], [1,2], [2]]
