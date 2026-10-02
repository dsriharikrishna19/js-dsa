// 25. Move numeric zeroes to the end while keeping other values in order.
function moveZerosToEnd(values) {
    const nonZeroValues = values.filter(value => value !== 0);
    return [...nonZeroValues, ...Array(values.length - nonZeroValues.length).fill(0)];
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]