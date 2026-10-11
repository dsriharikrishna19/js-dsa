// Find the largest element in an array
// Input:  [10, 5, 20, 8, 15]
// Output: 20
// 1. Brute Force / Linear Scan
// Time: O(n)
// Space: O(1)
function findLargestBruteForce(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

// 2. Better Approach — Math.max()
// Time: O(n)
// Space: O(1)
function findLargestBetter(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    return max;
}

// 3. Optimal Approach — Math.max(...nums)
// Time: O(n)
// Space: O(n)*
function findLargestOptimal(nums) {
    return Math.max(...nums);
}

// Test
const arr = [10, 5, 20, 8, 15];

console.log("Input:", arr);

console.log(
    "Brute Force:",
    findLargestBruteForce(arr)
);

console.log(
    "Better Approach:",
    findLargestBetter(arr)
);

console.log(
    "Optimal Approach:",
    findLargestOptimal(arr)
);

// Edge Case Tests
console.log(
    "Negative Numbers:",
    findLargestBruteForce([-10, -5, -20])
);

console.log(
    "Single Element:",
    findLargestBruteForce([5])
);