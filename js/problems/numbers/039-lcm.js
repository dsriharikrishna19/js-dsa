// 39. Find the least common multiple using the GCD relationship.
function lcm1(first, second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)) {
        return null;
    }

    if (first === 0 || second === 0) {
        return 0;
    }

    let a = Math.abs(first);
    let b = Math.abs(second);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }

    return Math.abs((first / a) * second);
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm2(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a / gcd(a, b) * b);
}


console.log(lcm1(12, 18)); // 36
console.log(lcm2(12, 18)); // 36