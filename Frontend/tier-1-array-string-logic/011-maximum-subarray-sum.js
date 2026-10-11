// Q11. Maximum Contiguous Subarray Sum

// Input:
// nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output:
// 6

// Explanation:
// [4, -1, 2, 1] = 6


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(1)

function maxSubarraySumBruteForce(nums) {

  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {

    let currentSum = 0;

    for (let j = i; j < nums.length; j++) {

      currentSum += nums[j];

     // if (currentSum > maxSum) {
     //   maxSum = currentSum;
     // }
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}


// 2. Optimal Approach — Kadane's Algorithm
// Time: O(n)
// Space: O(1)

function maxSubarraySumOptimal(nums) {

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {

    // if (nums[i] > currentSum + nums[i]) {
    //   currentSum = nums[i];
    // } else {
    //   currentSum = currentSum + nums[i];
    // }

    // if (currentSum > maxSum) {
    //   maxSum = currentSum;
    // }

    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


// Test cases

console.log(
  maxSubarraySumBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
// 6

console.log(
  maxSubarraySumOptimal([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
// 6

console.log(
  maxSubarraySumOptimal([1])
);
// 1

console.log(
  maxSubarraySumOptimal([-1, -2, -3])
);
// -1

console.log(
  maxSubarraySumOptimal([5, 4, -1, 7, 8])
);
// 23