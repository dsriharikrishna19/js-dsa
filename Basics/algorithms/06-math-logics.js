// =============================================================================
// FREQUENTLY ASKED DSA MATH LOGICS & FORMULAS IN JAVASCRIPT
// =============================================================================

// -----------------------------------------------------------------------------
// 1. PRIME NUMBERS: Sieve of Eratosthenes - O(n log log n)
// Find all prime numbers up to n efficiently.
// -----------------------------------------------------------------------------
function sieveOfEratosthenes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= n; i += p) {
                isPrime[i] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }
    return primes;
}

console.log("Primes up to 30:", sieveOfEratosthenes(30));
// [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]


// -----------------------------------------------------------------------------
// 2. GCD & LCM: Euclidean Algorithm - O(log(min(a, b)))
// Greatest Common Divisor & Least Common Multiple. Formula: (a * b) = GCD(a, b) * LCM(a, b)
// -----------------------------------------------------------------------------
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

console.log("GCD(48, 18):", gcd(48, 18)); // 6
console.log("LCM(12, 18):", lcm(12, 18)); // 36


// -----------------------------------------------------------------------------
// 3. FAST POWER (MODULAR EXPONENTIATION) - O(log n)
// Compute (x^n) % mod in O(log n) instead of O(n) using Binary Exponentiation.
// -----------------------------------------------------------------------------
function fastPower(base, exp, mod = 1e9 + 7) {
    let result = 1n;
    let b = BigInt(base);
    let e = BigInt(exp);
    const m = BigInt(mod);

    while (e > 0n) {
        if (e % 2n === 1n) {
            result = (result * b) % m;
        }
        b = (b * b) % m;
        e = e / 2n;
    }

    return Number(result);
}

console.log("Fast power 2^10:", fastPower(2, 10)); // 1024


// -----------------------------------------------------------------------------
// 4. GAUSS SUMMATION: 1 to n Sum & Missing Number - O(1)
// Formula: Sum = n * (n + 1) / 2
// -----------------------------------------------------------------------------
function sumOneToN(n) {
    return (n * (n + 1)) / 2;
}

console.log("Sum 1 to 100:", sumOneToN(100)); // 5050


// -----------------------------------------------------------------------------
// 5. DIGIT MANIPULATION: Reverse Integer, Palindrome Number, Armstrong Check
// -----------------------------------------------------------------------------
function reverseNumber(num) {
    let rev = 0;
    let n = Math.abs(num);
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return num < 0 ? -rev : rev;
}

function isArmstrong(num) {
    const digits = String(num).split('').map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
    return sum === num;
}

console.log("Reverse 12345:", reverseNumber(12345)); // 54321
console.log("Is 153 Armstrong? (1³ + 5³ + 3³ = 153):", isArmstrong(153)); // true
console.log("Is 370 Armstrong? (3³ + 7³ + 0³ = 370):", isArmstrong(370)); // true


// -----------------------------------------------------------------------------
// 6. COMBINATORICS: Combinations nCr - O(r)
// Formula: nCr = n! / (r! * (n - r)!)
// -----------------------------------------------------------------------------
function nCr(n, r) {
    if (r < 0 || r > n) return 0;
    if (r === 0 || r === n) return 1;
    if (r > n / 2) r = n - r; // nCr == nC(n-r) symmetry

    let res = 1;
    for (let i = 1; i <= r; i++) {
        res = (res * (n - i + 1)) / i;
    }
    return res;
}

console.log("5C2 (Combinations of 5 choose 2):", nCr(5, 2)); // 10
