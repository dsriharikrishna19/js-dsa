// 32. Extract and sum the digits of an integer.
function sumOfDigits(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    let remaining = Math.abs(number);
    let sum = 0;

    while (remaining > 0) {
        sum += remaining % 10;
        remaining = Math.floor(remaining / 10);
    }

    return sum;
}

console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(-508)); // 13