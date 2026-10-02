// 12. Split an array of integers into even and odd numbers.
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