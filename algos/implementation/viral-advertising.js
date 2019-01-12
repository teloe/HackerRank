'use strict';

/**
 * HackerRank - Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 * 
 * Complete the viralAdvertising function in the editor below. 
 * It should return the cumulative number of people who have liked the ad at a given time.
 */


function viralAdvertising(n) {
  let likes = 2,
      shared = 2;
  for (let i = 1; i < n; i++) {
    likes += Math.floor((shared * 3) / 2);
    shared = Math.floor((shared * 3) / 2);
  }
  return likes;
}

console.log(viralAdvertising(3)); // 9