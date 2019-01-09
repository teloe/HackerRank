'use strict';

/**
 * HackerRank - Cut the Sticks
 * https://www.hackerrank.com/challenges/cut-the-sticks/problem
 *
 * Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number
 * of sticks before each cut operation is performed.
 */

function cutTheSticks(arr) {
  let s = arr.sort();
  let c = 1;
  for (let i = 0; i < s.length; i++) {
    console.log(s.length);
    if (s[i] === s[i+1]) {
      c++;
    }
    i = 0;
    s.splice(0, c);
  }
  console.log(1);
}

cutTheSticks([5, 4, 4, 2, 2, 8]); // 6 4 2 1
cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]); // 8 6 4 1 
