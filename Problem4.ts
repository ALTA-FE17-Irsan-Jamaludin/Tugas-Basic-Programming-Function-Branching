// Problem 4 - Palindrome
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
//  Contoh, 'katak' dibalik tetaplah 'katak'. Buatlah sebuah program untuk mendeteksi
//  sebuah string merupakan palindrom atau tidak!

// Sample Test Cases
// Input: katak
// Output: true

// Input: kupu-kupu
// Output: false

const palindrome = (input: string): string | boolean => {
  const reverseString = input.split("").reverse().join("");
  if (reverseString === input) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false
