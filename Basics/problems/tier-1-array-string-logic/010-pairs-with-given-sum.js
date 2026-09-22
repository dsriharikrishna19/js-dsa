// Q10. Pairs With Given Sum

// Input:  nums = [1, 5, 7, -1, 5], target = 6
// Output: [[1, 5], [1, 5], [7, -1]]


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(1)

function pairsWithGivenSumBruteForce(nums, target) {

  const result = [];

  // Write your logic here
  for (let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] + nums[j] === target){
        result.push([nums[i],nums[j]])
      }
    }
  }

  return result;
}


// 2. Better Approach
// Time: O(n)
// Space: O(n)

function pairsWithGivenSumBetter(nums, target) {

  const result = [];
  const map = new Map();
  // Write your logic here
  for(let i=0;i<nums.length;i++){
    const complement = target - nums[i];
    if(map.has(complement)){
      result.push([complement, nums[i]])
    }
    map.set(nums[i],i)

  }


  return result;
}


// 3. Optimal Approach
// Time: O(n log n)
// Space: O(n)
function pairsWithGivenSumOptimal(nums, target) {

  const result = [];
  let l = 0;
  let r = nums.length - 1;

  nums.sort((a, b) => a - b);

  while (l < r) {

    const sum = nums[l] + nums[r];

    if (sum === target) {
      result.push([nums[l], nums[r]]);
      l++;
      r--;
    }

    else if (sum < target) {
      l++;
    }

    else {
      r--;
    }
  }

  return result;
}


// Test cases

console.log(
  pairsWithGivenSumBruteForce([1, 5, 7, -1, 5], 6)
);
// [[1, 5], [1, 5], [7, -1]]

console.log(
  pairsWithGivenSumBetter([1, 5, 7, -1, 5], 6)
);
// [[1, 5], [1, 5], [7, -1]]

console.log(
  pairsWithGivenSumOptimal([1, 5, 7, -1, 5], 6)
);
// [[1, 5], [1, 5], [7, -1]]


console.log(
  pairsWithGivenSumOptimal([2, 4, 3, 5, 7, 8, 9], 7)
);
// [[2, 5], [4, 3]]


console.log(
  pairsWithGivenSumOptimal([3, 3], 6)
);
// [[3, 3]]