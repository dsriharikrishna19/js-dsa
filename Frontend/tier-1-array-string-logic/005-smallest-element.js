// Find the smallest element in an array
// Input:  [10, 5, 20, 8, 15]
// Output: 5
// 1. Brute Force / Linear Scan
// Time: O(n)
// Space: O(1)
function findSmallestBruteForce(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
}

// 2. Better Approach — Math.max()
// Time: O(n)
// Space: O(1)
function findSmallestBetter(nums) {
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(min, nums[i]);
    }

    return min;
}

// 3. Optimal Approach — Math.max(...nums)
// Time: O(n)
// Space: O(n)*
function findSmallestOptimal(nums) {
    return Math.min(...nums);
}

// Test
const arr = [10, 5, 20, 8, 15];

console.log("Input:", arr);

console.log(
    "Brute Force:",
    findSmallestBruteForce(arr)
);

console.log(
    "Better Approach:",
    findSmallestBetter(arr)
);

console.log(
    "Optimal Approach:",
    findSmallestOptimal(arr)
);

// Edge Case Tests
console.log(
    "Negative Numbers:",
    findSmallestBruteForce([-10, -5, -20])
);

console.log(
    "Single Element:",
    findSmallestBruteForce([5])
);