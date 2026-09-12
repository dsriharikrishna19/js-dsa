// DSA #5: Move Zeroes
// Pattern: Two Pointers / In-Place Array Manipulation
// Question:
// Given an integer array nums, move all 0s to the end
// while maintaining the relative order of non-zero elements.
//
// Modify the array in-place.
//
// Example:
// nums = [0, 1, 0, 3, 12]
//
// Output:
// [1, 3, 12, 0, 0]

// 1. Brute Force Approach
// Time: O(n)
// Space: O(n)
const moveZeroesBruteForce = (nums) => {

    const zeros = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            zeros.push(nums[i]);
        } else {
            result.push(nums[i]);
        }
    }

    result.push(...zeros);

    return result;
};

// 2. Better Approach
// Time: O(n)
// Space: O(n)
const moveZeroesBetter = (nums) => {
    // TODO: Implement
      const result = new Array(nums.length);
    let index = 0;

    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== 0){
            result[index] = nums[i];
            index++;
        }
    }

    while (index <nums.length){
        result[index] = 0;
        index++
    }

    return result;

};

// 3. Optimal Approach
// Pattern: Two Pointers
// Time: O(n)
// Space: O(1)
const moveZeroesOptimal = (nums) => {
    // TODO: Implement

    let j = 0;

    for (let i = 0; i <  nums.length; i++) {
        if(nums[i] !== 0){
            [nums[i],nums[j]] = [nums[j],nums[i]]
            j++;
        }
     } 

     return nums;
  
};

// Test Cases
const nums1 = [0, 1, 0, 3, 12];

console.log(
    "Brute Force:",
    moveZeroesBruteForce(nums1)
);
// Expected: [1, 3, 12, 0, 0]


const nums2 = [0, 1, 0, 3, 12];

console.log(
    "Better:",
    moveZeroesBetter(nums2)
);
// Expected: [1, 3, 12, 0, 0]


const nums3 = [0, 1, 0, 3, 12];

console.log(
    "Optimal:",
    moveZeroesOptimal(nums3)
);
// Expected: [1, 3, 12, 0, 0]


const nums4 = [0, 0, 1];

console.log(
    "Optimal:",
    moveZeroesOptimal(nums4)
); 
// Expected: [1, 0, 0]