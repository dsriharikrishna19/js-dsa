// 31. Count the digits in an integer; zero contains one digit.
// using string conversion and length property:
function countDigits1(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    return String(Math.abs(number)).length;
}

// checking the function with countDigits function:
function countDigits2(number) {
    if (!Number.isInteger(number)) {
        return null;
    }

    if (number === 0) {
        return 1;
    }

    number = Math.abs(number);

    let c = 0;

    while (number > 0) {
        let n = number % 10;
        c++;
        number = Math.floor(number / 10);
    }

    return c;
}

console.log(countDigits2(12345)); // 5
console.log(countDigits2(5263));     // 1