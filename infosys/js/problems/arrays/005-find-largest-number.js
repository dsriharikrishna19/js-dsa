// 5. Find the largest number in an array. Returns undefined for an empty array.

// 1. Using reduce
function findLargest(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    return numbers.reduce((largest, value) => value > largest ? value : largest);
}


// 2. Using a loop
function findLargest2(nums){
  if(nums.length === 0){
    return;
  }
  let max = nums[0];
  for(const num of nums){
    if(num > max){
      max = num
    }
  }
  return max;
}

console.log(findLargest([4, 9, 2, 7]));
console.log(findLargest2([4, 9, 2, 7]));