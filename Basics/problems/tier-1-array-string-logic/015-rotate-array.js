// ============================================================
// Q15. Rotate an Array
// ============================================================

// Input:
// nums = [1, 2, 3, 4, 5, 6, 7]
// k = 3

// Output:
// [5, 6, 7, 1, 2, 3, 4]


// ============================================================
// 1. Brute Force Approach
// Rotate one position at a time
// Time: O(n * k)
// Space: O(1)
// ============================================================

function rotateArrayBruteForce(nums, k) {

  for (let r = 0; r < k; r++) {

    let last = nums[nums.length - 1];

    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }

    nums[0] = last;
  }

  return nums;
}


// ============================================================
// 2. Better Approach
// Use an extra array
// Time: O(n)
// Space: O(n)
// ============================================================

function rotateArrayBetter(nums, k) {

  const result = [];

  for (let i = 0; i < nums.length; i++) {

    let index = (i + k) % nums.length;

    result[index] = nums[i];
  }

  return result;
}


// ============================================================
// 3. Optimal Approach — Reverse
// Time: O(n)
// Space: O(1)
// ============================================================

function rotateArrayOptimal(nums, k) {

  // Handle empty array
  if (nums.length === 0) {
    return [];
  }

  // Handle k greater than array length
  k = k % nums.length;


  // Helper function
  function reverse(nums, left, right) {

    while (left < right) {

      let temp = nums[left];

      nums[left] = nums[right];
      nums[right] = temp;

      left++;
      right--;
    }
  }


  // 1. Reverse entire array
  reverse(nums, 0, nums.length - 1);


  // 2. Reverse first k elements
  reverse(nums, 0, k - 1);


  // 3. Reverse remaining elements
  reverse(nums, k, nums.length - 1);


  return nums;
}


// ============================================================
// Test Cases
// ============================================================

console.log(
  rotateArrayBruteForce([1, 2, 3, 4, 5, 6, 7], 3)
);
// [5, 6, 7, 1, 2, 3, 4]


console.log(
  rotateArrayBetter([1, 2, 3, 4, 5, 6, 7], 3)
);
// [5, 6, 7, 1, 2, 3, 4]


console.log(
  rotateArrayOptimal([1, 2, 3, 4, 5, 6, 7], 3)
);
// [5, 6, 7, 1, 2, 3, 4]


console.log(
  rotateArrayOptimal([1, 2, 3, 4, 5], 2)
);
// [4, 5, 1, 2, 3]


console.log(
  rotateArrayOptimal([1, 2, 3], 5)
);
// [2, 3, 1]


console.log(
  rotateArrayOptimal([], 3)
);
// []