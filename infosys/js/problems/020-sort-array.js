// 20. Return a numerically sorted copy without changing the input array.
function sortArray(numbers) {
    return [...numbers].sort((left, right) => left - right);
}

console.log(sortArray([10, 2, 5, 1])); // [1, 2, 5, 10]