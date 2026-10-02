// 17. Count strict-equality matches for a target value.
function countOccurrences(values, target) {
    return values.reduce((count, value) => count + (value === target ? 1 : 0), 0);
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3