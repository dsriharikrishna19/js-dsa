// 1. Create Map
const basicMap = new Map();

// 2. set() → Add / Update
basicMap.set(key, value);

basicMap.set(10, 0);
basicMap.set(20, 1);

// 3. get() → Get value
basicMap.get(key);

const index = basicMap.get(10);

// 4. has() → Check if key exists
if (basicMap.has(target)) {
    console.log("Found");
}

// 5. delete() → Remove key
basicMap.delete(key);

// 6. size → Number of entries
console.log(basicMap.size);

// 7. Frequency Counter ⭐⭐⭐
const nums = [1, 2, 2, 3, 3, 3, 4];

const freq = new Map();

for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
}

console.log(freq);

// 1 → 1
// 2 → 2
// 3 → 3
// 4 → 1

// 8. Value → Index ⭐⭐⭐
const arr = [10, 20, 30, 40];

const indexMap = new Map();

for (let i = 0; i < arr.length; i++) {
    indexMap.set(arr[i], i);
}

console.log(indexMap);

// 10 → 0
// 20 → 1
// 30 → 2
// 40 → 3

// 9. Two Sum ⭐⭐⭐
const numbers = [2, 7, 11, 15];
const target = 9;

const map = new Map();

for (let i = 0; i < numbers.length; i++) {

    const complement = target - numbers[i];

    if (map.has(complement)) {
        console.log([
            map.get(complement),
            i
        ]);

        break;
    }

    map.set(numbers[i], i);
}

// Output:
// [0, 1]

// 10. Detect Duplicate ⭐⭐⭐
const duplicateNums = [1, 2, 3, 2];

const seen = new Map();

for (const num of duplicateNums) {

    if (seen.has(num)) {
        console.log("Duplicate:", num);
        break;
    }

    seen.set(num, true);
}