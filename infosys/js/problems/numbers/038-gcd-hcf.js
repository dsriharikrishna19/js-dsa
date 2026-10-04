// 38. Find the greatest common divisor (highest common factor) using modulo.
function gcd1(a, b) {

    a = Math.abs(a);
    b = Math.abs(b);

   const smallest = Math.min(a,b);

   for(let i=smallest;i>=1;i--){
     if(a%i===0 && b%i===0){
       return i
     }
   }

    return 1;
}

function gcd2(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}


console.log(gcd1(48, 18)); // 6
console.log(gcd2(48, 18)); // 6