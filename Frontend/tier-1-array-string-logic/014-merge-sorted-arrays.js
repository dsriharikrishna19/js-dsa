// Q14. Merge Two Sorted Arrays

// Input:
// nums1 = [1, 3, 5]
// nums2 = [2, 4, 6]

// Output:
// [1, 2, 3, 4, 5, 6]


// 1. Brute Force Approach
// Time:  O((n + m) log(n + m))
// Space: O(n + m)

function mergeSortedArraysBruteForce(nums1, nums2) {
  return [...nums1,...nums2].sort((a,b)=>a-b);
}


// 2. Optimal Approach — Two Pointers
// Time: O(n + m)
// Space: O(n + m)

function mergeSortedArraysOptimal(nums1, nums2) {

  const result = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {

    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }

  return result;
}


// Test cases

console.log(
  mergeSortedArraysBruteForce([1, 3, 5], [2, 4, 6])
);
// [1, 2, 3, 4, 5, 6]

console.log(
  mergeSortedArraysOptimal([1, 3, 5], [2, 4, 6])
);
// [1, 2, 3, 4, 5, 6]


console.log(
  mergeSortedArraysOptimal([1, 2, 3], [4, 5, 6])
);
// [1, 2, 3, 4, 5, 6]

console.log(
  mergeSortedArraysOptimal([], [1, 2, 3])
);
// [1, 2, 3]