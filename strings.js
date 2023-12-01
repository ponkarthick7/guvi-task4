const strings = ["level", "hello", "radar", "world", "deified"];

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

function getPalindromes(array) {
  return array.filter(string => isPalindrome(string));
}

const palindromeStrings = getPalindromes(strings);

console.log("Palindromes:", palindromeStrings);
