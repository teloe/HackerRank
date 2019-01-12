'use strict';

/**
 * Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of
 * each. Monica wants to spend as much as possible for the  items, given her budget.
 *
 * Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the
 * amount of money Monica will spend. If she doesn't have enough money to both a keyboard and a USB drive, print
 * -1 instead. She will buy only the two required items.
 *
 *  For example, suppose she has  to spend. Three types of keyboards cost . Two USB drives cost . She could purchase
 *  a , or a . She chooses the latter. She can't buy more than  items so she can't spend exactly .
 */

function getMoneySpent(k, d, b) {
  let maxSum = -1;
  for (let i = 0; i < k.length; i++) {
    for (let j = 0; j < d.length; j++) {
      let temp = 0;
      if (k[i] + d[j] <= b) {
        temp = k[i] + d[j];
        maxSum = temp > maxSum ? temp : maxSum;
      }
    }
  }
  return maxSum;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([5], [4], 5)); // -1