# Complete Infosys JS DSA Revision Guide

> [!TIP]
> This guide contains all problems found in your infosys directory, formatted for your interview tomorrow.

## 005-find-largest-number
**Problem**: Find the largest number in an array. Returns undefined for an empty array.

**Code Snippets**:
```javascript
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
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 006-find-smallest-number
**Problem**: Find the smallest number in an array. Returns undefined for an empty array.

**Code Snippets**:
```javascript
function findSmallest(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    return numbers.reduce((smallest, value) => value < smallest ? value : smallest);
}

console.log(findSmallest([4, 9, 2, 7])); // 2

function findSmallest2(nums){
  if(nums.length === 0){
    return;
  }
  let min = nums[0];
  for(const num of nums){
    if(num < min){
      min = num
    }
  }
  return min;
}

console.log(findSmallest([4, 9, 2, 7]));
console.log(findSmallest2([4, 9, 2, 7]));
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 007-find-second-largest
**Problem**: Find the second-largest distinct number. Returns undefined if it does not exist.

**Code Snippets**:
```javascript
function findSecondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const value of numbers) {
        if (value > largest) {
            secondLargest = largest;
            largest = value;
        } else if (value < largest && value > secondLargest) {
            secondLargest = value;
        }
    }

    return secondLargest === -Infinity ? undefined : secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 10])); // 8
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 010-find-missing-number
**Problem**: Find the missing number from the range 0 through n (one number is missing).

**Code Snippets**:
```javascript
function findMissingNumber(numbers) {
    const expectedSum = numbers.length * (numbers.length + 1) / 2;
    const actualSum = numbers.reduce((sum, value) => sum + value, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1])); // 2
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 011-sum-array-elements
**Problem**: Return the sum of all array elements.

**Code Snippets**:
```javascript
// 1. Using reduce
function sumArray(numbers) {
    return numbers.reduce((sum, value) => sum + value, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10

// 2. Using a loop
function sumArray2(numbers) {
  let sum = 0;
    for (const value of numbers) {
        sum += value;
    }
    return sum;
}

console.log(sumArray2([1, 2, 3, 4])); // 10
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 012-find-even-odd-numbers
**Problem**: Split an array of integers into even and odd numbers.

**Code Snippets**:
```javascript
// 1. Using filter
function splitEvenAndOdd(numbers) {
    return {
        even: numbers.filter(value => value % 2 === 0),
        odd: numbers.filter(value => value % 2 !== 0)
    };
}

console.log(splitEvenAndOdd([1, 2, 3, 4, 5])); // { even: [2, 4], odd: [1, 3, 5] }


// 2. Using a loop
function splitEvenAndOdd2(numbers) {
    const result = { even: [], odd: [] };

    for (const value of numbers) {
        if (value % 2 === 0) {
            result.even.push(value);
        } else {
            result.odd.push(value);
        }
    }

    return result;
}

console.log(splitEvenAndOdd2([1, 2, 3, 4, 5])); // { even: [2, 4], odd: [1, 3, 5] }
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 019-merge-two-arrays
**Problem**: Merge two arrays into a new array.

**Code Snippets**:
```javascript
// 1. Using spread operator
function mergeArrays1(first, second) {
    return [...first, ...second];
}
// 2. Using a loop
function mergeArrays2(first, second) {
  const result = [];

  for(const num of first){
    result.push(num)
  }

  for(const num of second){
        result.push(num)
  }

  return result;
}

console.log(mergeArrays1([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeArrays2([1, 2], [3, 4])); // [1, 2, 3, 4]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 020-sort-array
**Problem**: Return a numerically sorted copy without changing the input array.

**Code Snippets**:
```javascript
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
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 021-reverse-array
**Problem**: Return a reversed copy without changing the input array.

**Code Snippets**:
```javascript
// 1. Using reverse
function reverseArray1(values) {
    return [...values].reverse();
}

// 2. Using a loop + two pointers
function reverseArray2(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--
    }

    return nums;
}

//for loop
function reverseArray3(nums) {
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        result.push(nums[i]);
    }

    return result;
}

console.log(reverseArray1([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray2([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray3([1, 2, 3])); // [3, 2, 1]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 024-maximum-consecutive-ones
**Problem**: Find the longest run of consecutive 1 values in a binary array.

**Code Snippets**:
```javascript
function maximumConsecutiveOnes(numbers) {
    let longest = 0;
    let current = 0;

    for (const value of numbers) {
        if (value === 1) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 0;
        }
    }

    return longest;
}

console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 025-move-zeros-to-end
**Problem**: Move numeric zeroes to the end while keeping other values in order.

**Code Snippets**:
```javascript
// 1. Using filter and fill
function moveZerosToEnd(values) {
  const nonZeroValues = values.filter(value => value !== 0);
  return [
    ...nonZeroValues,
    ...Array(values.length - nonZeroValues.length).fill(0)
  ];
}

// 2. Using a loop
function moveZerosToEnd2(nums) {
  const result = [];

  for (const num of nums) {
    if (num !== 0) {
      result.push(num);
    }
  }

  for (let i = 0; i <= nums.length - result.length; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZerosToEnd2([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]


// 3. Using a loop with two pointers
function moveZerosToEnd(nums) {
  let insert = 0;

  // Move all non-zero values to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insert++] = nums[i];
    }
  }

  // Fill the rest with zeros
  while (insert < nums.length) {
    nums[insert++] = 0;
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]


// 4. Using a loop with swapping
function moveZerosToEnd(nums) {
  let insert = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insert], nums[i]] = [nums[i], nums[insert]];
      insert++;
    }
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 027-flatten-array
**Problem**: Flatten nested arrays to any depth without modifying the input.

**Code Snippets**:
```javascript
// 1. Using built-in methods
function flattenArray(values) {
    return values.flat(Infinity);
}



// 2. Using recursion
function flattenArray(values) {
    const flattened = [];

    if(Array.isArray(values)){
      for(const value of values){
         flattened.push(...flattenArray(value))
      }
    } else {
        flattened.push(values)
    }
    
    return flattened;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 028-chunk-array
**Problem**: Split an array into consecutive chunks of size chunkSize.

**Code Snippets**:
```javascript
function chunkArray(values, chunkSize) {
    if(chunkSize<=0){
      return [];
    }

    const chunks = []

    for(let i=0;i<values.length;i+=chunkSize){
      chunks.push(values.slice(i,i+chunkSize))
    }
  
    return chunks;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 029-remove-falsy-values
**Problem**: Return a copy of the array with all falsy values removed.

**Code Snippets**:
```javascript
function removeFalsyValues(values) {
    return values.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); // [1, 2, 3]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 004-character-frequency
**Problem**: Return the frequency of each character in a string.

**Code Snippets**:
```javascript
// 1. Using Map
function characterFrequency1(value) {
  const freq = new Map();

  for(let i=0;i<value.length;i++){
    freq.set(value[i], (freq.get(value[i]) || 0) + 1);

  }

  return freq;
}

// 2. Using an object   
function characterFrequency2(val) {
  const freq = {};
  for (let i = 0; i < val.length; i++) {
    freq[val[i]] = (freq[val[i]] || 0) + 1;
  }
  return freq;
}

console.log([...characterFrequency1("hello")]);
console.log(Object.entries(characterFrequency2("hello")));

// [["h", 1], ["e", 1], ["l", 2], ["o", 1]]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 008-remove-duplicates
**Problem**: Remove duplicates while preserving the original order.

**Code Snippets**:
```javascript
// 1. Using Set
function removeDuplicates(values) {
    return [...new Set(values)];
}

// 2. Using a loop
function removeDuplicates1(values) {
  const result = [];

  for (const num of values) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));  // [1, 2, 3]
console.log(removeDuplicates1([1, 2, 2, 3, 1])); // [1, 2, 3]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 009-find-duplicate-elements
**Problem**: Return each duplicated value once, in order of its second occurrence.

**Code Snippets**:
```javascript
// 1. Using Set
function findDuplicates(values) {
    const seen = new Set();
    const duplicates = new Set();

    for (const value of values) {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 1, 1])); // [2, 1]

// 2. Using a loop
function findDuplicates(values){
  const seen = [];
  const duplicates = []

  for(const num of values){
    if(seen.includes(num)){
      if(!duplicates.includes(num)){
        duplicates.push(num)
      }
    }else {
      seen.push(num)
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 1])); // [2, 1]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 017-count-occurrences
**Problem**: Count strict-equality matches for a target value.

**Code Snippets**:
```javascript
// 1. Using a Map
function countOccurrences1(values) {
  const map = new Map();

  for(let i=0;i<values.length;i++){
    map.set(values[i],(map.get(values[i]) || 0)+1)
  }
  return [...map] 
}


// 2. Using an object
function countOccurrences2(values) {
  const map = new Map();

  for (const value of values) {
    map.set(value, (map.get(value) || 0) + 1);
  }

  return Object.fromEntries(map);
}


// 3. Using an loop and nested loop
function countOccurrences(values) {
  const result = {};

  for (let i = 0; i < values.length; i++) {
    let count = 0;

    for (let j = 0; j < values.length; j++) {
      if (values[i] === values[j]) {
        count++;
      }
    }

    result[values[i]] = count;
  }

  return result;
}

console.log(countOccurrences1([1, 2, 2, 3, 2])); // 3
console.log(countOccurrences2([1, 2, 2, 3, 1, 2, 4])); // { 1: 2, 2: 3, 3: 1, 4: 1 }
console.log(countOccurrences([1, 2, 2, 3, 1, 2, 4]));
// { 1: 2, 2: 3, 3: 1, 4: 1 }
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 018-find-common-elements
**Problem**: Return unique values present in both arrays, preserving the first array's order.

**Code Snippets**:
```javascript
// 1. Using Set + filter
function findCommonElements1(first, second) {
    const result = new Set(second);
    return [...new Set(first)].filter(value => result.has(value));
}

// 2. Using a loop
function findCommonElements2(first, second) {
  const result = [];

  for(let i=0;i<first.length;i++){
    for(let j=0;j<second.length;j++){
      if(first[i] === second[j]){
        if(!result.includes(first[i])){
          result.push(first[i]);
        }
      }
    }
  }
  return result;
}

console.log(findCommonElements1([1, 2, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommonElements2([1, 2, 2, 3], [2, 3, 4])); // [2, 3]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 023-first-non-repeating-character
**Problem**: Return the first character that occurs once, or null if none exists.

**Code Snippets**:
```javascript
function firstNonRepeatingCharacter(value) {
    const counts = new Map();

    for(const char of value){
      counts.set(char,(counts.get(char) || 0)+1);
    }

    for(const char of value){
      if(counts.get(char) === 1){
        return char;
      }
    }
    
    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // "w"
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 026-two-sum
**Problem**: Return indices of two values that sum to target, or [] if no pair exists.

**Code Snippets**:
```javascript
function twoSum(numbers, target) {
    const result = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (result.has(complement)) {
            return [result.get(complement), i]
        }

        result.set(numbers[i], i)
    }

    return [];
}

function twoSumBruteForce(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 013-fizzbuzz
**Problem**: Return FizzBuzz values from 1 through n.

**Code Snippets**:
```javascript
function fizzBuzz(n) {
    const result = [];

    for (let value = 1; value <= n; value++) {
        if (value % 15 === 0) {
            result.push("FizzBuzz");
        } else if (value % 3 === 0) {
            result.push("Fizz");
        } else if (value % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(value);
        }
    }

    return result;
}

console.log(fizzBuzz(15));
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 014-factorial
**Problem**: Problem statement not found.

**Code Snippets**:
```javascript
function factorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}


function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // 120
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 015-fibonacci-series
**Problem**: Return the first n Fibonacci numbers, starting with 0, 1.

**Code Snippets**:
```javascript
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
function fibonacciSeries(n) {
   if(n === 0){
    return [];
  }
  
  const result = [];

  let a = 0;
  let b = 1;

  for(let i=0;i<n;i++){
    result.push(a);
    [a,b] = [b,a+b];
  }

  return result;
}
// checking the function with fibonacci function:
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);

  return result;
}

console.log(fibonacci(7)); // 13

console.log(fibonacciSeries(7)); // [0, 1, 1, 2, 3, 5, 8]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 016-prime-number-check
**Problem**: Check whether an integer is prime.

**Code Snippets**:
```javascript
function isPrime(number) {
    if (!Number.isInteger(number) || number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17)); // true
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 031-count-digits
**Problem**: Count the digits in an integer; zero contains one digit.

**Code Snippets**:
```javascript
// using string conversion and length property:
function countDigits1(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    return String(Math.abs(number)).length;
}

// checking the function with countDigits function:
function countDigits2(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    if (number === 0) {
        return 1;
    }

    number = Math.abs(number);

    let c = 0;

    while (number > 0) {
        let n = number % 10;
        c++;
        number = Math.floor(number / 10);
    }

    return c;
}

console.log(countDigits2(12345)); // 5
console.log(countDigits2(5263));     // 1
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 032-sum-of-digits
**Problem**: Extract and sum the digits of an integer.

**Code Snippets**:
```javascript
function sumOfDigits(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    let remaining = Math.abs(number);
    let sum = 0;

    while (remaining > 0) {
        sum += remaining % 10;
        remaining = Math.floor(remaining / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(-508)); // 13
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 033-reverse-number
**Problem**: Extract digits and build the reversed integer while preserving its sign

**Code Snippets**:
```javascript
function reverseNumber(number) {
    if (!Number.isInteger(number)) {
        return null;
    }
    const sign = Math.sign(number);
    number = Math.abs(number);

    let rev = 0;

    while (number > 0) {
        let n = number % 10;
        rev = rev * 10 + n;
        number = Math.floor(number / 10)
    }
    return rev;
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(-120)); // -21
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 034-palindrome-number
**Problem**: Reverse a non-negative integer and compare it with the original.

**Code Snippets**:
```javascript
function isPalindromeNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    let original = number;
    let rev = 0;

    while(number > 0){
      let n = number%10;
      rev = rev*10+n;
      number= Math.floor(number/10)
    }

    return rev === original
}

console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(-121)); // false
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 035-armstrong-number
**Problem**: Extract digits and check whether their powered sum equals the number.

**Code Snippets**:
```javascript
function power(n, c) {
    let product = 1;

    for (let i = 1; i < c; i++) {
        product *= n;
    }

    return product * n;
}

function isArmstrongNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    let original = number;
    let temp = number;
    let c = 0;
    let sum = 0;

    // Count digits
    while (temp > 0) {
        c++;
        temp = Math.floor(temp / 10);
    }

    // Extract digits and calculate powered sum
    while (number > 0) {
        let n = number % 10;
        sum += power(n, c);
        number = Math.floor(number / 10);
    }

    return sum === original;
}

console.log(isArmstrongNumber(153));  // true
console.log(isArmstrongNumber(123));  // false
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 036-positive-negative-zero
**Problem**: Classify a number using positive, negative, and zero conditions.

**Code Snippets**:
```javascript
function classifyNumber(number) {
    if (number > 0) {
        return "positive";
    }
    if (number < 0) {
        return "negative";
    }
    return number === 0 ? "zero" : null;
}

console.log(classifyNumber(7)); // "positive"
console.log(classifyNumber(-3)); // "negative"
console.log(classifyNumber(0)); // "zero"
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 037-power-of-number
**Problem**: Raise a number to an integer power using repeated multiplication.

**Code Snippets**:
```javascript
function power(base, exponent) {
    if (!Number.isInteger(exponent)) {
        return null;
    }

    let product = 1;
    let exp = Math.abs(exponent);

    for (let i = 1; i <= exp; i++) {
        product *= base;
    }

    return exponent < 0 ? 1 / product : product;
}

console.log(power(2, 5));  // 32
console.log(power(2, -2)); // 0.25
console.log(power(5, 0));  // 1
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 038-gcd-hcf
**Problem**: Find the greatest common divisor (highest common factor) using modulo.

**Code Snippets**:
```javascript
function gcd1(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

   const smallest = Math.min(a,b);

   for(let i=smallest;i>=1;i--){
     if(a%i===0 && b%i===0){
       return i
     }
   }

    return 1;
}

function gcd2(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}


console.log(gcd1(48, 18)); // 6
console.log(gcd2(48, 18)); // 6
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 039-lcm
**Problem**: Find the least common multiple using the GCD relationship.

**Code Snippets**:
```javascript
function lcm1(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return null;
    }

    if (first === 0 || second === 0) {
        return 0;
    }

    let a = Math.abs(first);
    let b = Math.abs(second);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    return Math.abs((first / a) * second);
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm2(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a / gcd(a, b) * b);
}


console.log(lcm1(12, 18)); // 36
console.log(lcm2(12, 18)); // 36
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 040-perfect-number
**Problem**: Check whether a positive integer equals the sum of its proper divisors.

**Code Snippets**:
```javascript
function isPerfectNumber1(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    let divisorSum = 1;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            divisorSum += divisor;
            const pairedDivisor = number / divisor;
            if (pairedDivisor !== divisor) {
                divisorSum += pairedDivisor;
            }
        }
    }

    return divisorSum === number;
}


function isPerfectNumber2(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    let sum = 1;

    for (let i = 2; i < number; i++) {       
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

console.log(isPerfectNumber1(28)); // true ✅
console.log(isPerfectNumber1(12)); // false ✅
console.log(isPerfectNumber1(6));  // true ✅


console.log(isPerfectNumber2(28)); // true
console.log(isPerfectNumber2(12)); // false
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 030-deep-clone-object
**Problem**: Deep-clone objects, arrays, Maps, Sets, Dates, and RegExps, including cycles.

**Code Snippets**:
```javascript
function deepClone(value, seen = new WeakMap()) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (seen.has(value)) {
        return seen.get(value);
    }

    if (value instanceof Date) {
        return new Date(value.getTime());
    }

    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
    }

    if (value instanceof Map) {
        const clone = new Map();
        seen.set(value, clone);
        for (const [key, entryValue] of value) {
            clone.set(deepClone(key, seen), deepClone(entryValue, seen));
        }
        return clone;
    }

    if (value instanceof Set) {
        const clone = new Set();
        seen.set(value, clone);
        for (const entry of value) {
            clone.add(deepClone(entry, seen));
        }
        return clone;
    }

    const clone = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));
    seen.set(value, clone);

    for (const key of Reflect.ownKeys(value)) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if (Object.prototype.hasOwnProperty.call(descriptor, "value")) {
            descriptor.value = deepClone(descriptor.value, seen);
        }
        Object.defineProperty(clone, key, descriptor);
    }

    return clone;
}

const original = { name: "Ada", scores: [10, 20] };
const copy = deepClone(original);
copy.scores.push(30);
console.log(original.scores); // [10, 20]
console.log(copy.scores); // [10, 20, 30]
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 001-reverse-string
**Problem**: Reverse a string.

**Code Snippets**:
```javascript
function reverseString(value) {
    return Array.from(value).reverse().join("");
}

// 2. Reverse a string without using built-in methods.
function reverseString1(value){
  let str = "";
  for(let i=value.length-1;i>=0;i--) {
    str += value[i];
  }
  return str;
}


console.log(reverseString("hello")); // "olleh"
console.log(reverseString1("hello")); // "olleh"
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 002-palindrome-check
**Problem**: Check whether a string is a palindrome, ignoring case and punctuation.

**Code Snippets**:
```javascript
// 1.using built-in methods
function isPalindrome1(value) {
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === Array.from(normalized).reverse().join("");
}


// 2.without using built-in methods
function reverse(value) {
  let str = "";

  for (let i = value.length - 1; i >= 0; i--) {
    str += value[i];
  }

  return str;
}

function isPalindrome2(value) {
  const original = value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const ispalindrome =
    reverse(original) === original ? "Palindrome" : "Not a Palindrome";

  return ispalindrome;
}

console.log(isPalindrome1("A man, a plan, a canal: Panama"));
console.log(isPalindrome1("race a car"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("race a car"));

// "Palindrome"
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 003-count-vowels
**Problem**: Count English vowels in a string.

**Code Snippets**:
```javascript
// 1.built-in methods regex
function countVowels(value) {
    const matches = value.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// 2.without using built-in methods
function countVowels2(val){
  let c = 0;
  for(let i=0;i<val.length;i++){
    let ch = val[i].toLowerCase();
    if(ch === "a"|| ch === "e"|| ch === "i"|| ch === "o"|| ch=== "u" ){
      c++;
    }    
  }
  return c;

}

console.log(countVowels("JavaScript")); // 3
console.log(countVowels2("JavaScript")); // 3
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

## 022-anagram-check
**Problem**: Check whether two strings contain the same letters, ignoring case and spaces/punctuation.

**Code Snippets**:
```javascript
// 1: Sort both strings 
function areAnagrams1(first, second) {
  const normalize = value =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(first) === normalize(second);
}


// 2: Count letters with a Map 
function areAnagrams2(first, second) {
  const clean = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const a = clean(first);
  const b = clean(second);

  if (a.length !== b.length) return false;

  const counts = new Map();
  for (const ch of a) {
    counts.set(ch, (counts.get(ch) || 0) + 1);
  }

  for (const ch of b) {
    const remaining = counts.get(ch);
    if (!remaining) return false;
    counts.set(ch, remaining - 1);
  }

  return true;
}


//3 : Count letters with a plain object 
function areAnagrams3(first, second) {
  const clean = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const a = clean(first);
  const b = clean(second);

  if (a.length !== b.length) return false;

  const counts = {};
  for (const ch of a) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  for (const ch of b) {
    if (!counts[ch]) return false;
    counts[ch]--;
  }

  return true;
}


//  Tests 
console.log(areAnagrams1("listen", "silent"));                       // true
console.log(areAnagrams2("listen", "silent"));                       // true
console.log(areAnagrams3("listen", "silent"));                       // true

console.log(areAnagrams1("Dormitory", "dirty room"));                // true
console.log(areAnagrams2("Dormitory", "dirty room"));                // true
console.log(areAnagrams3("Dormitory", "dirty room"));                // true

console.log(areAnagrams1("The eyes", "They see"));                   // true
console.log(areAnagrams2("The eyes", "They see"));                   // true
console.log(areAnagrams3("The eyes", "They see"));                   // true

console.log(areAnagrams1("hello", "world"));                         // false
console.log(areAnagrams2("hello", "world"));                         // false
console.log(areAnagrams3("hello", "world"));                         // false

console.log(areAnagrams1("aab", "abb"));                             // false
console.log(areAnagrams2("aab", "abb"));                             // false
console.log(areAnagrams3("aab", "abb"));                             // false

console.log(areAnagrams1("abc", "ab"));                              // false
console.log(areAnagrams2("abc", "ab"));                              // false
console.log(areAnagrams3("abc", "ab"));                              // false
```

**Interview Tip**: Walk the interviewer through the time and space complexity of each approach shown above. Start with the most basic loop (Brute Force) before jumping into optimizations.

---

