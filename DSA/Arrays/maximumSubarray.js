// DSA: Maximum Sum Subarray of Size K
// Pattern: Sliding Window
// Problem:
// Given an array of integers and an integer k,
// find the maximum sum of any contiguous subarray of size k.
//
// Example:
// nums = [2, 1, 5, 1, 3, 2]
// k = 3
// Output: 9
//
// [2, 1, 5] => 8
// [1, 5, 1] => 7
// [5, 1, 3] => 9  <-- Maximum
// [1, 3, 2] => 6

// 1. Brute Force Approach
// Time: O(n * k)
// Space: O(1)
const maxSumBruteForce = (nums, k) => {
    // TODO: Implement
    const n = nums.length;
    let maxSum = 0;

    for(let i=0;i<=n-k;i++){
        let csum = 0;
        for(let j=i;j<i+k;j++){
            csum += nums[j];
        }
        maxSum = Math.max(maxSum,csum)
    }
    return maxSum;
};

// 2. Sliding Window Approach
// Time: O(n)
// Space: O(1)
const maxSumSlidingWindow = (nums, k) => {

    console.log("Array:", nums);
    console.log("Window Size:", k);

    // --------------------------------------------------------
    // Step 1: Calculate the first window
    // --------------------------------------------------------

    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum = windowSum;

    console.log("\nInitial Window:", nums.slice(0, k));
    console.log("Initial Sum:", windowSum);
    console.log("Max Sum:", maxSum);

    console.log("--------------------");

    // --------------------------------------------------------
    // Step 2: Slide the window
    // --------------------------------------------------------

    for (let i = k; i < nums.length; i++) {

        const outgoing = nums[i - k];
        const incoming = nums[i];

        console.log("\nBefore Slide:");
        console.log("Current Window:", nums.slice(i - k, i));
        console.log("Outgoing:", outgoing);
        console.log("Incoming:", incoming);
        console.log("Previous Sum:", windowSum);

        // Remove outgoing element
        // Add incoming element
        windowSum = windowSum - outgoing + incoming;

        // Update maximum
        maxSum = Math.max(maxSum, windowSum);

        console.log("New Window:", nums.slice(i - k + 1, i + 1));
        console.log("New Sum:", windowSum);
        console.log("Max Sum:", maxSum);

        console.log("--------------------");
    }

    return maxSum;
};
// Test Cases
console.log(
    maxSumBruteForce([2, 1, 5, 1, 3, 2], 3)
);
// Expected: 9

console.log(
    maxSumSlidingWindow([2, 1, 5, 1, 3, 2], 3)
);
// Expected: 9


console.log(
    maxSumBruteForce([1, 2, 3, 4, 5], 2)
);
// Expected: 9

console.log(
    maxSumSlidingWindow([1, 2, 3, 4, 5], 2)
);
// Expected: 9


console.log(
    maxSumBruteForce([-1, -2, -3, -4], 2)
);
// Expected: -3

console.log(
    maxSumSlidingWindow([-1, -2, -3, -4], 2)
);
// Expected: -3