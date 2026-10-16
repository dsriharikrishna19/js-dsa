// 35. Extract digits and check whether their powered sum equals the number.

function power(n, c) {
    let product = 1;

    for (let i = 1; i < c; i++) {
        product *= n;
    }

    return product * n;
}

function isArmstrongNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    let original = number;
    let temp = number;
    let c = 0;
    let sum = 0;

    // Count digits
    while (temp > 0) {
        c++;
        temp = Math.floor(temp / 10);
    }

    // Extract digits and calculate powered sum
    while (number > 0) {
        let n = number % 10;
        sum += power(n, c);
        number = Math.floor(number / 10);
    }

    return sum === original;
}

console.log(isArmstrongNumber(153));  // true
console.log(isArmstrongNumber(123));  // false