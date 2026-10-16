// 9. Return each duplicated value once, in order of its second occurrence.
// 1. Using Set
function findDuplicates(values) {
    const seen = new Set();
    const duplicates = new Set();

    for (const value of values) {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }

    return [...duplicates];
}

console.log(findDuplicates([1, 2, 3, 2, 1, 1])); // [2, 1]

// 2. Using a loop
function findDuplicates(values){
  const seen = [];
  const duplicates = []

  for(const num of values){
    if(seen.includes(num)){
      if(!duplicates.includes(num)){
        duplicates.push(num)
      }
    }else {
      seen.push(num)
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 2, 3, 1])); // [2, 1]