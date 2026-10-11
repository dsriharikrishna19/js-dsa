// Q12. Find Intersection of Two Arrays

// Input:
// nums1 = [1, 2, 2, 3, 4]
// nums2 = [2, 2, 4, 6]

// Output:
// [2, 4]


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(n)

function intersectionBruteForce(nums1, nums2) {

  const result = [];

  for (let i = 0; i < nums1.length; i++) {

    for (let j = 0; j < nums2.length; j++) {

      if (nums1[i] === nums2[j]) {

        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }

      }
    }
  }

  return result;
}


// 2. Optimal Approach — Sorting + Two Pointers
// Time: O(n log n)
// Space: O(n)

function intersectionOptimal(nums1, nums2) {

  const result = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {

    if (nums1[i] === nums2[j]) {

      // Avoid duplicate values
      if (
        result.length === 0 ||
        result[result.length - 1] !== nums1[i]
      ) {
        result.push(nums1[i]);
      }

      i++;
      j++;

    } else if (nums1[i] < nums2[j]) {

      i++;

    } else {

      j++;
    }
  }

  return result;
}


// Test cases

console.log(
  intersectionBruteForce([1, 2, 2, 3, 4], [2, 2, 4, 6])
);
// [2, 4]

console.log(
  intersectionOptimal([1, 2, 2, 3, 4], [2, 2, 4, 6])
);
// [2, 4]


console.log(
  intersectionOptimal([1, 2, 3], [4, 5, 6])
);
// []


console.log(
  intersectionOptimal([1, 2, 3], [2, 3, 4])
);
// [2, 3]


console.log(
  intersectionOptimal([1, 1, 2, 2, 3], [1, 1, 2, 4])
);
// [1, 2]