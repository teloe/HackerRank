'use strict';

/**
 * HackerRank - Save The Prisoner!
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 * 
 * Complete the saveThePrisoner function in the editor below. 
 * It should return an integer representing the chair number of the prisoner to warn.
 */

function saveThePrisoner(n, m, s) {
  let count = ((m % n) + s) - 1;
  return count;
}

console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
console.log(saveThePrisoner(7, 19, 2)); // 6
