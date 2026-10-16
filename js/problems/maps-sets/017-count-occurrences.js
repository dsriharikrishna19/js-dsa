// 17. Count strict-equality matches for a target value.
// 1. Using a Map
function countOccurrences1(values) {
  const map = new Map();

  for(let i=0;i<values.length;i++){
    map.set(values[i],(map.get(values[i]) || 0)+1)
  }
  return [...map] 
}


// 2. Using an object
function countOccurrences2(values) {
  const map = new Map();

  for (const value of values) {
    map.set(value, (map.get(value) || 0) + 1);
  }

  return Object.fromEntries(map);
}


// 3. Using an loop and nested loop
function countOccurrences(values) {
  const result = {};

  for (let i = 0; i < values.length; i++) {
    let count = 0;

    for (let j = 0; j < values.length; j++) {
      if (values[i] === values[j]) {
        count++;
      }
    }

    result[values[i]] = count;
  }

  return result;
}

console.log(countOccurrences1([1, 2, 2, 3, 2])); // 3
console.log(countOccurrences2([1, 2, 2, 3, 1, 2, 4])); // { 1: 2, 2: 3, 3: 1, 4: 1 }
console.log(countOccurrences([1, 2, 2, 3, 1, 2, 4]));
// { 1: 2, 2: 3, 3: 1, 4: 1 }