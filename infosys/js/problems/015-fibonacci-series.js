// 15. Return the first n Fibonacci numbers, starting with 0, 1.
function fibonacciSeries(n) {
   if(n === 0){
    return [];
  }
  
  const result = [];

  let a = 0;
  let b = 1;

  for(let i=0;i<n;i++){
    result.push(a);
    [a,b] = [b,a+b];
  }

  return result;
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);

  return result;
}

console.log(fibonacci(7)); // 13

console.log(fibonacciSeries(7)); // [0, 1, 1, 2, 3, 5, 8]
