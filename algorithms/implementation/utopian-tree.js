'use strict';

/**
 * HackerRank - Utopian Tree
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 * 
 * Complete the utopianTree function in the editor below. 
 * It should return the integer height of the tree after the input number of growth cycles.
 */

function utopianTree(n) {
  let currentHeight = 1;
  for (let i = 1; i <= n; i++) {
    currentHeight % 2 !== 0 ? currentHeight *= 2 : currentHeight += 1;
  }
  return currentHeight;
}

console.log(utopianTree(5)); // 14