'use strict';

/**
 * HackerRank - Find Digits
 * https://www.hackerrank.com/challenges/find-digits/problem
 *
 * Complete the findDigits function in the editor below. It should return an
 * integer representing the number of digits of d that are divisors of d.
 */

function findDigits(n) {
  let d = 0,
    i,
    arr = n.toString().split('');
  for (i of arr) {
    if (n % i === 0) {
      d++;
    }
  }
  return d;
}

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); // 3
