//creating arrays in JavaScript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]
const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// Accessing elements in an array
arr1[0] = 10; // Modifying the first element of arr1
console.log("First element of arr1:", arr1[0]); // Output: 10
console.log("Length of arr1:", arr1.length); // Output: 5
const lastElement = arr1[arr1.length - 1]; // Accessing the last element
console.log("Last element of arr1:", lastElement); // Output: 5


// add/remove elements in an array
arr1.push(6);
console.log("After push:", arr1); // Output: [10, 2, 3, 4, 5, 6]

arr1.pop();
console.log("After pop:", arr1); // Output: [10, 2, 3, 4, 5]

arr1.unshift(0);
console.log("After unshift:", arr1); // Output: [0, 10, 2, 3, 4, 5]

arr1.shift();
console.log("After shift:", arr1); // Output: [10, 2, 3, 4, 5]

arr1.splice(2, 0, 99); // Insert 99 at index 2
console.log("After splice (insert):", arr1); // Output: [10, 2, 99, 3, 4, 5]
arr1.splice(2, 1); // Remove 1 element at index 2
console.log("After splice (remove):", arr1); // Output: [10, 2, 3, 4, 5]

// Search
arr1.indexOf(3); // Returns 2
console.log("Index of 3 in arr1:", arr1.indexOf(3)); // Output: 2

arr1.lastIndexOf(3); // Returns 2
console.log("Last index of 3 in arr1:", arr1.lastIndexOf(3)); // Output: 2

arr1.includes(4); // Returns true
console.log("Does arr1 include 4?", arr1.includes(4)); // Output: true

arr1.find(x => x > 3); // Returns 4
console.log("First element greater than 3 in arr1:", arr1.find(x => x > 3)); // Output: 4

arr1.findIndex(x => x > 3);
console.log("Index of first element greater than 3 in arr1:", arr1.findIndex(x => x > 3)); // Output: 3

// Iteration
arr1.forEach((value, index) => {
    console.log(`Index ${index}: Value ${value}`);
});

const doubleArr = arr1.map(x => x * 2);
console.log("Doubled array:", doubleArr); // Output: [20, 4, 6, 8, 10]

const evens = arr1.filter(x => x % 2 === 0);
console.log("Even numbers in arr1:", evens); // Output: [10, 2, 4]

const sum = arr1.reduce((acc, x) => acc + x, 0);
console.log("Sum of elements in arr1:", sum); // Output: 24

const hasEven = arr1.some(x => x % 2 === 0);
console.log("Does arr1 have any even numbers?", hasEven); // Output: true

const allevens = arr1.every(x => x % 2 === 0);
console.log("Are all elements in arr1 even?", allevens); // Output: false

const allPositive = arr1.every(x => x > 0);
console.log("Are all elements in arr1 positive?", allPositive); // Output: true

// Transformation

const sortedArr = arr1.sort((a, b) => a - b);
console.log("Sorted arr1:", sortedArr); // Output: [2, 3, 4, 5, 10]

const reversedArr = arr1.reverse();
console.log("Reversed arr1:", reversedArr); // Output: [10, 5, 4, 3, 2]

const joinedArr = arr1.join(", ");
console.log("Joined arr1:", joinedArr); // Output: "10, 5, 4, 3, 2"

const slicedArr = arr1.slice(1, 4);
console.log("Sliced arr1 (from index 1 to 4):", slicedArr); // Output: [5, 4, 3]

const concatenatedArr = arr1.concat([6, 7, 8]);
console.log("Concatenated arr1 with [6, 7, 8]:", concatenatedArr); // Output: [10, 5, 4, 3, 2, 6, 7, 8]

const flattenedArr = [[1, 2], [3, 4], [5]].flat();
console.log("Flattened array:", flattenedArr); // Output: [1, 2, 3, 4, 5]


// spread operator
const arr4 = [...arr1, 6, 7, 8];
console.log("Array using spread operator:", arr4); // Output: [10, 5, 4, 3, 2, 6, 7, 8]

// rest operator
const [first, second, ...rest] = arr1;
console.log("First element:", first); // Output: 10
console.log("Second element:", second); // Output: 5
console.log("Rest of the elements:", rest); // Output: [4, 3, 2]
