// Q13. Find Union of Two Arrays

// Input:
// nums1 = [1, 2, 2]
// nums2 = [2, 3]

// Output:
// [1, 2, 3]


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(n)

function unionBruteForce(nums1, nums2) {

  const result = [];

   for(let i = 0;i<nums1.length;i++){
     if(!result.includes(nums1[i])){
          result.push(nums1[i])
     }
  }

  for(let j=0;j<nums2.length;j++){
      if(!result.includes(nums2[j])){
          result.push(nums2[j])
     }  
  }
  
  return result;
}


// 2. Optimal Approach — Set
// Time: O(n)
// Space: O(n)

function unionOptimal(nums1, nums2) {

  const set =  new Set()

  for(let i=0;i<nums1.length;i++){
    set.add(nums1[i]);
  }

   for(let i=0;i<nums2.length;i++){
    set.add(nums2[i]);
  }

  // Step 3: Convert Set to array
  // for (const value of set) {
  //   result.push(value);
  // }

  // return result;

  return [...set];
}


// Test cases

console.log(
  unionBruteForce([1, 2, 2], [2, 3])
);
// [1, 2, 3]

console.log(
  unionOptimal([1, 2, 2], [2, 3])
);
// [1, 2, 3]

console.log(
  unionOptimal([1, 2, 3], [4, 5, 6])
);
// [1, 2, 3, 4, 5, 6]

console.log(
  unionOptimal([1, 1, 2, 2], [2, 2, 3, 3])
);
// [1, 2, 3]