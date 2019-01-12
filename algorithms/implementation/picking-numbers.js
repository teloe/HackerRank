'use strict';

/**
 * HackerRank - Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 *
 * Complete the pickingNumbers function in the editor below. It should return an integer that 
 * represents the length of the longest array that can be created.
 */

function pickingNumbers(a) {
  let map = new Array(100);
    map.fill(0);

  // Populate map
  for(let i = 0; i < a.length; i++) {
    map[a[i]]++;
  }

  // Find the max sum of two values with keys within one of each other
  let max = 0;
  for(let i = 1; i < map.length; i++) {
    if(map[i] + map[i - 1] > max) {
      max = map[i] + map[i - 1];
    }
  }
  return max;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
