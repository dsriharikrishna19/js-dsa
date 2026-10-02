// 2. Check whether a string is a palindrome, ignoring case and punctuation.
// 1.using built-in methods
function isPalindrome1(value) {
    const normalized = value.toLowerCase().replace(/[^a-z0-9]/g, "");
    return normalized === Array.from(normalized).reverse().join("");
}


// 2.without using built-in methods
function reverse(value) {
  let str = "";

  for (let i = value.length - 1; i >= 0; i--) {
    str += value[i];
  }

  return str;
}

function isPalindrome2(value) {
  const original = value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const ispalindrome =
    reverse(original) === original ? "Palindrome" : "Not a Palindrome";

  return ispalindrome;
}

console.log(isPalindrome1("A man, a plan, a canal: Panama"));
console.log(isPalindrome1("race a car"));
console.log(isPalindrome2("A man, a plan, a canal: Panama"));
console.log(isPalindrome2("race a car"));

// "Palindrome"