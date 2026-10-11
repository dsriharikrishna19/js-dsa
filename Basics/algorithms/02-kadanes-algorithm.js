// =============================================================================
// KADANE'S ALGORITHM (MAXIMUM SUBARRAY SUM)
// =============================================================================
//
// 🎯 Problem:
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
//
// 💡 Intuition:
// At any index `i`, we make a local greedy choice:
// Do we EXTEND the existing subarray sum (`currentSum + nums[i]`)?
// Or do we START A FRESH subarray from `nums[i]`?
//
// Recurrence: `currentSum = Math.max(nums[i], currentSum + nums[i])`
// Time Complexity: O(n) | Space Complexity: O(1)
// =============================================================================

// 1. Kadane's Algorithm (Max Sum Only)
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// 2. Kadane's Algorithm with Subarray Indices (Find the exact range [start, end])
function maxSubArrayWithIndices(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i; // Reset start of subarray
        } else {
            currentSum += nums[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum,
        subarray: nums.slice(start, end + 1),
        indices: [start, end]
    };
}

// Tests
const testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Subarray Sum:", maxSubArray(testArray)); // 6 (Subarray [4, -1, 2, 1])
console.log("Details with indices:", maxSubArrayWithIndices(testArray));
