'use strict';

/**
 * You are given an array of  integers, , and a positive integer, . 
 * Find and print the number of  pairs where  and  +  is divisible by .
 * For example,  and . Our three pairs meeting the criteria are  and .
 */

let n = 6,
    k = 3,
    ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
  let numPairs = 0;
  for(let i = 0; i < ar.length; i++) {
    for(let j = 0; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        numPairs++;
      }
    }
  }
  return numPairs;
}

console.log(divisibleSumPairs(n, k, ar)); // 5
