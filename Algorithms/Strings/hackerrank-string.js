'use strict';

/**
 * HackerRank - HackerRank in a string
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 * 
 * Complete the hackerrankInString function in the editor below. It must return YES or NO.
 * hackerrankInString has the following parameter(s): s: a string
 */

function hackerrankInString(s) {
  return s.match(/.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/) ? 'YES' : 'NO';
}

console.log(hackerrankInString('hereiamstackerrank')); // YES
console.log(hackerrankInString('hackerworld')); // NO
