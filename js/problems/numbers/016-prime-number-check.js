// 16. Check whether an integer is prime.
function isPrime(number) {
    if (!Number.isInteger(number) || number < 2) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(17)); // true