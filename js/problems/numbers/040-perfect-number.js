// 40. Check whether a positive integer equals the sum of its proper divisors.
function isPerfectNumber1(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    let divisorSum = 1;
    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            divisorSum += divisor;
            const pairedDivisor = number / divisor;
            if (pairedDivisor !== divisor) {
                divisorSum += pairedDivisor;
            }
        }
    }

    return divisorSum === number;
}


function isPerfectNumber2(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    let sum = 1;

    for (let i = 2; i < number; i++) {       
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

console.log(isPerfectNumber1(28)); // true ✅
console.log(isPerfectNumber1(12)); // false ✅
console.log(isPerfectNumber1(6));  // true ✅


console.log(isPerfectNumber2(28)); // true
console.log(isPerfectNumber2(12)); // false