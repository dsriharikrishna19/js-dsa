// =============================================================================
// PATTERN 15: GREEDY (KADANE'S & JUMP GAME REACHABILITY)
// =============================================================================
// 🎯 When to use:
// - Making globally optimal choice by picking local optimum at each step.
// - Maximum Subarray (Kadane's Algorithm).
// - Jump Game (Reachable index tracker).
// =============================================================================

// 1. Maximum Subarray (Kadane's Algorithm) - Time: O(n), Space: O(1)
function maxSubArray(nums) {
    let cur = nums[0], max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(nums[i], cur + nums[i]);
        max = Math.max(max, cur);
    }
    return max;
}

// 2. Jump Game (Max Reach Tracker) - Time: O(n), Space: O(1)
function canJump(nums) {
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) goal = i;
    }
    return goal === 0;
}

console.log("Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log("Can Jump [2,3,1,1,4]?", canJump([2, 3, 1, 1, 4])); // true
console.log("Can Jump [3,2,1,0,4]?", canJump([3, 2, 1, 0, 4])); // false
