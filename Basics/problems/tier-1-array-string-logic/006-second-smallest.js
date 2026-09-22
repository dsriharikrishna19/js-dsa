// Find the second smallest element in an array
// Input:  [10, 5, 20, 8, 15]
// Output: 8
// 1. Brute Force Approach
// Sort + find second distinct smallest 
// Time: O(n log n)
// Space: O(1) auxiliary* 
function findSecondSmallestBruteForce(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[0]) {
      return nums[i];
    }
  }

  return undefined;
}

// 2. Better Approach
// Two passes
// Time: O(n)
// Space: O(1)
function findSecondSmallestBetter(nums) {
  let m1 = nums[0];

  // Find smallest
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < m1) {
      m1 = nums[i];
    }
  }

  let m2 = undefined;

  // Find second smallest distinct
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== m1 && (m2 === undefined || nums[i] < m2)) {
      m2 = nums[i];
    }
  }

  return m2;
}

// 3. Optimal Approach
// One pass
// Time: O(n)
// Space: O(1)
function findSecondSmallestOptimal(nums) {
  let m1 = Infinity;
  let m2 = Infinity;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] < m1) {
      m2 = m1;
      m1 = nums[i];

    } else if (nums[i] < m2 && nums[i] !== m1) {
      m2 = nums[i];
    }
  }

  return m2 === Infinity ? undefined : m2;
}

// Normal Test
const arr = [10, 5, 20, 8, 15];

console.log("Input:", arr);

console.log(
  "Brute Force:",
  findSecondSmallestBruteForce([...arr])
);

console.log(
  "Better Approach:",
  findSecondSmallestBetter([...arr])
);

console.log(
  "Optimal Approach:",
  findSecondSmallestOptimal([...arr])
);

// Edge Cases
// 1. Duplicate largest
console.log(
  "Duplicate Largest:",
  findSecondSmallestOptimal([10, 20, 20, 15])
);

// 2. Negative numbers
console.log(
  "Negative Numbers:",
  findSecondSmallestOptimal([-10, -5, -20])
);

// 3. All elements same
console.log(
  "All Same:",
  findSecondSmallestOptimal([5, 5, 5])
);

// 4. Only two elements
console.log(
  "Two Elements:",
  findSecondSmallestOptimal([20, 10])
);

// 5. Two equal elements
console.log(
  "Two Equal:",
  findSecondSmallestOptimal([20, 20])
);

// 6. Ascending order
console.log(
  "Ascending:",
  findSecondSmallestOptimal([1, 2, 3, 4, 5])
);

// 7. Descending order
console.log(
  "Descending:",
  findSecondSmallestOptimal([5, 4, 3, 2, 1])
);

// 8. Negative + positive
console.log(
  "Negative + Positive:",
  findSecondSmallestOptimal([-5, -2, 0, -10, 10])
);

// 9. Largest repeated multiple times
console.log(
  "Repeated Largest:",
  findSecondSmallestOptimal([8, 3, 8, 5, 8, 7])
);