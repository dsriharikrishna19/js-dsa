// DSA #5: Remove Duplicates from Sorted Array
// Pattern: Two Pointers
// Question:
// Given a sorted integer array nums, remove duplicates
// so that each unique element appears only once.
//
// Return the number of unique elements.
//
// Example:
// nums = [1, 1, 2, 2, 3]
//
// Output:
// 3
//
// First 3 elements:
// [1, 2, 3]

// 1. Brute Force Approach
// Time: O(n²)
// Space: O(n)
const removeDuplicatesBruteForce = (nums) => {

    const result = [];

    for (let i = 0; i < nums.length; i++) {

        let isDuplicate = false;

        for (let j = 0; j < result.length; j++) {

            if (nums[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            result.push(nums[i]);
        }
    }

    return result;
};

// 2. Better Approach
// Pattern: HashSet
// Time: O(n)
// Space: O(n)
const removeDuplicatesBetter = (nums) => {

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    return [...set];
};

// 3. Optimal Approach
// Pattern: Two Pointers
// Time: O(n)
// Space: O(1)
const removeDuplicatesOptimal = (nums) => {

    if (nums.length === 0) {
        return 0;
    }

    let j = 0;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== nums[j]) {

            j++;

            nums[j] = nums[i];
        }
    }

    return j + 1;
};

// Test Cases
const nums1 = [1, 1, 2, 2, 3];

console.log(
    "Brute Force:",
    removeDuplicatesBruteForce(nums1)
);
// Expected: [1, 2, 3]


const nums2 = [1, 1, 2, 2, 3];

console.log(
    "Better:",
    removeDuplicatesBetter(nums2)
);
// Expected: [1, 2, 3]


const nums3 = [1, 1, 2, 2, 3];

const uniqueCount = removeDuplicatesOptimal(nums3);

console.log(
    "Optimal Count:",
    uniqueCount
);
// Expected: 3

console.log(
    "Optimal Array:",
    nums3.slice(0, uniqueCount)
);
// Expected: [1, 2, 3]


const nums4 = [1, 1, 1, 1];

const count4 = removeDuplicatesOptimal(nums4);

console.log(
    "Optimal Count:",
    count4
);
// Expected: 1

console.log(
    "Optimal Array:",
    nums4.slice(0, count4)
);
// Expected: [1]


const nums5 = [1, 2, 3, 4];

const count5 = removeDuplicatesOptimal(nums5);

console.log(
    "Optimal Count:",
    count5
);
// Expected: 4

console.log(
    "Optimal Array:",
    nums5.slice(0, count5)
);
// Expected: [1, 2, 3, 4]