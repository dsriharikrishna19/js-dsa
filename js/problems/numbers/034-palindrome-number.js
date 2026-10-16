// 34. Reverse a non-negative integer and compare it with the original.
function isPalindromeNumber(number) {
    if (!Number.isInteger(number) || number < 0) {
        return false;
    }

    let original = number;
    let rev = 0;

    while(number > 0){
      let n = number%10;
      rev = rev*10+n;
      number= Math.floor(number/10)
    }

    return rev === original
}

console.log(isPalindromeNumber(1221)); // true
console.log(isPalindromeNumber(-121)); // false