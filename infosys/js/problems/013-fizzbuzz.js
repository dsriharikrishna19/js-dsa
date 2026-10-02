// 13. Return FizzBuzz values from 1 through n.
function fizzBuzz(n) {
    const result = [];

    for (let value = 1; value <= n; value++) {
        if (value % 15 === 0) {
            result.push("FizzBuzz");
        } else if (value % 3 === 0) {
            result.push("Fizz");
        } else if (value % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(value);
        }
    }

    return result;
}

console.log(fizzBuzz(15));