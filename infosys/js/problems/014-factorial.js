function factorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}


function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // 120