'use strict';

/**
 * HackerRank - Beautiful Binary String
 * https://www.hackerrank.com/challenges/beautiful-binary-string/problem
 *
 * Complete the beautifulBinaryString function in the editor below. It should return an integer representing the minimum
 * moves required.
 */

function beautifulBinaryString(b) {
  const patt = /010/g;
  const res = b.match(patt);
  return res ? res.length : 0;
}

console.log(beautifulBinaryString('0101010')); // 2
console.log(beautifulBinaryString('01100')); // 0
console.log(beautifulBinaryString('0100101010')); // 3
