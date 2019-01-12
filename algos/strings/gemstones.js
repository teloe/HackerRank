'use strict';

/**
 * HackerRank - Gemstones
 * https://www.hackerrank.com/challenges/gem-stones/problem
 *
 * Complete the gemstones function in the editor below. It should return an integer representing the number of gemstones
 * found in the list of rocks.
 */

function gemstones(arr) {
  let n = arr.length;
  let obj = {};
  let count = 0;
  for(let i = 0; i < n; i++){
    for(let j = 0; j < arr[i].length; j++){
      if((!obj[arr[i][j]] && i == 0) | obj[arr[i][j]] == i) {
        obj[arr[i][j]] = i + 1;
        if(obj[arr[i][j]] == n) count++;
      }
    }
  }
  return count;
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg'])); // 2
