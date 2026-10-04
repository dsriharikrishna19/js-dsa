// 7. Find the second-largest distinct number. Returns undefined if it does not exist.
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