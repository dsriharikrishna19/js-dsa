// DSA #2: Two Sum
// Pattern: Hash Map / Two Pointers
// Question:
// Given an array of integers nums and an integer target,
// return the indices of the two numbers such that they add
// up to target.
//
// You may assume that each input has exactly one solution,
// and you may not use the same element twice.
//
// Example:
// nums = [2, 7, 11, 15]
// target = 9
// Output: [0, 1]
//
// Explanation:
// nums[0] + nums[1] = 2 + 7 = 9

// 1. Brute Force Approach
// Pattern: Nested Loops
// Time: O(n²)
// Space: O(1)
const twoSumBruteForceApproach = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] + nums[j] === target) {
                return [i, j];
            }

        }
    }

    return [];
};

// 2. Better Approach
// Pattern: Hash Map - Two Pass
// Time: O(n)
// Space: O(n)
const twoSumBetterApproach = (nums, target) => {

    const map = new Map();

    // Phase 1: Store all numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    // Phase 2: Search for complement
    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (
            map.has(complement) &&
            map.get(complement) !== i
        ) {
            return [i, map.get(complement)];
        }
    }

    return [];
};

// 3. Optimal Approach
// Pattern: Hash Map - One Pass
// Time: O(n)
// Space: O(n)
const twoSumOptimalApproach = (nums, target) => {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
};

// 4. Two Pointer Approach
// Pattern: Two Pointers
// Time: O(n) if already sorted
// Space: O(1)
//
// IMPORTANT:
// This approach requires the array to be sorted.
const twoSumTwoPointersApproach = (nums, target) => {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right];
        }

        if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
};

// Test Cases
console.log(
    twoSumBruteForceApproach([2, 7, 11, 15], 9)
);
// Output: [0, 1]


console.log(
    twoSumBetterApproach([2, 7, 11, 15], 9)
);
// Output: [0, 1]


console.log(
    twoSumOptimalApproach([2, 7, 11, 15], 9)
);
// Output: [0, 1]


console.log(
    twoSumTwoPointersApproach([2, 7, 11, 15], 9)
);
// Output: [0, 1]

// Additional Test Cases
console.log(
    twoSumOptimalApproach([3, 2, 4], 6)
);
// Output: [1, 2]


console.log(
    twoSumOptimalApproach([3, 3], 6)
);
// Output: [0, 1]


console.log(
    twoSumOptimalApproach([-3, 4, 3, 90], 0)
);
// Output: [0, 2]


console.log(
    twoSumOptimalApproach([1, 2, 3], 10)
);
// Output: []