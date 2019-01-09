'use strict';

/**
 * HackerRank - Alternating Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 * 
 * Complete the alternatingCharacters function in the editor below. 
 * It must return an integer representing the minimum number of deletions to make the alternating string.
 */

function alternatingCharacters(s) {
  let deletion = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i+1]) {
      deletion++;
    }
  }
  return deletion;
}

console.log(alternatingCharacters('AAAA')); // 3
console.log(alternatingCharacters('BBBBB')); // 4
console.log(alternatingCharacters('ABABABAB')); // 0