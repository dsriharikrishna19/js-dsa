// 21. Return a reversed copy without changing the input array.
function reverseArray(values) {
    return [...values].reverse();
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]