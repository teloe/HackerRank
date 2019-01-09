'use strict';

/**
 * HackerRank - Two Characters
 * https://www.hackerrank.com/challenges/two-characters/problem
 * 
 * Complete the alternate function in the editor below. It should return an integer that 
 * denotes the longest string that can be formed, or 0 if it cannot be done.
 */

function alternate(s) {
  // return string, t
  let t = 0;
  // if the number of different types of chars % !== 0, return 0
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let count = 0;
    if (char === char + 1) {
      count++;
    }
  }
  return t;
}

console.log(alternate('beabeefeab')); // 5