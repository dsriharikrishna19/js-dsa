// DSA #4: Longest Subarray With Sum <= K
// Pattern: Variable-Size Sliding Window
// Question:
// Given an array of positive integers nums and an integer k,
// find the length of the longest contiguous subarray
// whose sum is less than or equal to k.
//
// Example:
// nums = [2, 1, 5, 1, 3, 2]
// k = 7
//
// Output: 3
//
// Valid subarrays:
// [2, 1]       => 3
// [2, 1, 5]    => 8 ❌
// [1, 5, 1]    => 7 ✅ length 3
// [1, 3, 2]    => 6 ✅ length 3

// 1. Brute Force Approach
// Time: O(n²)
// Space: O(1)

const longestSubarrayBruteForce = (nums, k) => {
    // TODO: Implement
    let maxLength = 0;
    const n = nums.length;

    for (let i = 0; i < n - k; i++) {
        let csum = 0;
        for (let j = 0; j < n + k; j++) {
            csum += nums[j];
        }
        if(csum <= k){
            let length = i-j+1;
            maxLength = Math.max(maxLength,length)
        }
    }
    return maxLength;

};

// 2. Sliding Window Approach
// Time: O(n)
// Space: O(1)
const longestSubarraySlidingWindow = (nums, k) => {

    let l = 0;
    let csum = 0;
    let maxLength = 0;

    for (let r = 0; r < nums.length; r++) {

        // Add incoming element
        csum += nums[r];

        // Shrink window if sum exceeds k
        while (csum > k) {
            csum -= nums[l];
            l++;
        }

        // Current window length
        const length = r - l + 1;
        maxLength = Math.max(maxLength, length);
    }

    return maxLength;
};

// Test Cases
console.log(
    longestSubarrayBruteForce([2, 1, 5, 1, 3, 2], 7)
);
// Expected: 3

console.log(
    longestSubarraySlidingWindow([2, 1, 5, 1, 3, 2], 7)
);
// Expected: 3


console.log(
    longestSubarrayBruteForce([1, 2, 1, 0, 1], 4)
);
// Expected: 4

console.log(
    longestSubarraySlidingWindow([1, 2, 1, 0, 1], 4)
);
// Expected: 4



