'use strict';

/**
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array
 * of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 *
 * For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd
 * socks left, one of each color. The number of pairs is .
 */

function sockMerchant(n, ar) {
  ar.sort((a, b) => a - b);
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])); // 2
