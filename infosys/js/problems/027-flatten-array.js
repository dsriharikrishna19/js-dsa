// 27. Flatten nested arrays to any depth without modifying the input.
function flattenArray(values) {
    const flattened = [];

    for (const value of values) {
        if (Array.isArray(value)) {
            flattened.push(...flattenArray(value));
        } else {
            flattened.push(value);
        }
    }

    return flattened;
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]