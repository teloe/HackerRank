'use strict';

/**
 * HackerRank - Beautiful Days at the Movies
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 * 
 * Complete the beautifulDays function in the editor below. 
 * It must return the number of beautiful days in the range.
 */

function beautifulDays(input) {
  let setup = input.split(' '),
      i = parseInt(setup[0]),
      j = parseInt(setup[1]),
      k = parseInt(setup[2]),
      beautifulDays = 0;
  for (i; i <= j; i++) {
    let reverse = parseInt(i.toString().split('').reverse().join(''), 10);
    if (Math.abs(i - reverse) % k === 0) {
      beautifulDays++;
    }
  }
  return beautifulDays;
}

console.log(beautifulDays('20 23 6')); // 2
