// Q9. Two Sum

// Input:  nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(1)

function twoSumBruteForce(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }

  return [];
}


// 2. Better Approach
// Time: O(n)
// Space: O(n)

function twoSumBetter(nums, target) {
  const map = new Map();

  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];

    if(map.has(complement)){
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}


// 3. Optimal Approach
// Time: O(n log n)
// Space: O(n)

function twoSumOptimal(nums, target) {

  const arr = [];

  // Store value + original index
  for(let i = 0; i < nums.length; i++){
    arr.push([nums[i], i]);
  }

  // Sort based on value
  arr.sort((a, b) => a[0] - b[0]);

  let l = 0;
  let r = arr.length - 1;

  while(l < r){

    const sum = arr[l][0] + arr[r][0];

    if(sum === target){
      return [arr[l][1], arr[r][1]];
    }

    if(sum < target){
      l++;
    } else {
      r--;
    }
  }

  return [];
}


// Test cases

console.log(twoSumBruteForce([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSumBetter([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSumOptimal([2, 7, 11, 15], 9));
// [0, 1]


console.log(twoSumOptimal([3, 2, 4], 6));
// [1, 2]

console.log(twoSumOptimal([3, 3], 6));
// [0, 1]

console.log(twoSumOptimal([1, 5, 8, 10], 15));
// [1, 3]