// 4. Return the frequency of each character in a string.
// 1. Using Map
function characterFrequency1(value) {
  const freq = new Map();

  for(let i=0;i<value.length;i++){
    freq.set(value[i], (freq.get(value[i]) || 0) + 1);

  }

  return freq;
}

// 2. Using an object   
function characterFrequency2(val) {
  const freq = {};
  for (let i = 0; i < val.length; i++) {
    freq[val[i]] = (freq[val[i]] || 0) + 1;
  }
  return freq;
}

console.log([...characterFrequency1("hello")]);
console.log(Object.entries(characterFrequency2("hello")));

// [["h", 1], ["e", 1], ["l", 2], ["o", 1]]