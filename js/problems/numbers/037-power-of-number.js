// 37. Raise a number to an integer power using repeated multiplication.
function power(base, exponent) {
    if (!Number.isInteger(exponent)) {
        return null;
    }

    let product = 1;
    let exp = Math.abs(exponent);

    for (let i = 1; i <= exp; i++) {
        product *= base;
    }

    return exponent < 0 ? 1 / product : product;
}

console.log(power(2, 5));  // 32
console.log(power(2, -2)); // 0.25
console.log(power(5, 0));  // 1
