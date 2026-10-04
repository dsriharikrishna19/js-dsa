// 20. Return a numerically sorted copy without changing the input array.
// 1. Using sort
function sortArray(numbers) {
    return [...numbers].sort((left, right) => left - right);
}

// 2. Using a loop
function sortArrays(nums){
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i]>nums[j]){
        [nums[i],nums[j]] = [nums[j],nums[i]]
      }
    }
  }

  return nums;
}

console.log(sortArray([10, 2, 5, 1])); // [1, 2, 5, 10]
console.log(sortArrays([10, 2, 5, 1])); // [1, 2, 5, 10]