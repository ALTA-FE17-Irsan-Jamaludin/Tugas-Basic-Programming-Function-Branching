// // Problem 3 - Bilangan Prima
// // Dalam matematika, bilangan prima adalah bilangan asli yang lebih besar dari angka 1,
// // yang faktor pembaginya adalah 1 dan bilangan itu sendiri. 2 dan 3 adalah bilangan prima.
// // 4 bukan bilangan prima karena 4 bisa dibagi 2.
// // Kamu diminta untuk membuat fungsi untuk menentukan bahwa sebuah bilangan termasuk bilangan prima atau tidak.

const primeNumber = (angka: number): boolean | number => {
  if (angka === 1) {
    return false;
  } else if (angka === 2 || angka === 5) {
    return true;
  } else {
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0 || angka % 5 === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  return angka;
};

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
