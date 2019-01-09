'use strict';

/**
 * HackerRank - Love Letter Mystery
 * https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 *
 * Complete the theLoveLetterMystery function in the editor below. It should return the integer representing the
 * minimum number of operations needed to make the string a palindrome.
 */

function theLoveLetterMystery(s) {
  let r = s.split('').reverse().join('');
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += Math.abs(s.charCodeAt(i) - r.charCodeAt(i)) / 2;
  }
  return count;
}

console.log(theLoveLetterMystery('abc')); // 2
console.log(theLoveLetterMystery('abcba')); // 0
console.log(theLoveLetterMystery('abcd')); // 4
console.log(theLoveLetterMystery('cba')); // 2
