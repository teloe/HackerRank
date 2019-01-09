'use strict';

/**
 * HackerRank - Mars Exploration
 * https://www.hackerrank.com/challenges/mars-exploration/problem
 * 
 * Complete the marsExploration function in the editor below. 
 * It should return an integer representing the number of letters changed during transmission.
 */

function marsExploration(s) {
  let n = 0;
  for (let i = 0; i < s.length; i+=3) {
    if (s[i] !== 'S') {
      n++;
    }
    if (s[i+1] !== 'O') {
      n++;
    }
    if (s[i+2] !== 'S') {
      n++;
    }
  }
  return n;
}

console.log(marsExploration('SOSSPSSQSSOR')); // 3
console.log(marsExploration('SOSSOT')); // 1
console.log(marsExploration('SOSSOSSOS')); // 0