// 33. Extract digits and build the reversed integer while preserving its sign
function reverseNumber(number) {
    if (!Number.isInteger(number)) {
        return null;
    }
    const sign = Math.sign(number);
    number = Math.abs(number);

    let rev = 0;

    while (number > 0) {
        let n = number % 10;
        rev = rev * 10 + n;
        number = Math.floor(number / 10)
    }
    return rev;
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(-120)); // -21