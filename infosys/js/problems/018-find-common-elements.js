// 18. Return unique values present in both arrays, preserving the first array's order.
function findCommonElements(first, second) {
    const secondValues = new Set(second);
    return [...new Set(first)].filter(value => secondValues.has(value));
}

console.log(findCommonElements([1, 2, 2, 3], [2, 3, 4])); // [2, 3]