'use strict';

/**
 * HackerRank - Funny String
 * https://www.hackerrank.com/challenges/funny-string/problem
 *
 * Complete the funnyString function in the editor below. For each test case, it should return a string, either Funny or
 * Not Funny.
 */

function funnyString(s) {
  let obj = { a:97, b:98, c:99, d:100, e:101, f:102, g:103, h:104, i:105, j:106, k:107, l:108, m:109, n:110, o:111, 
    p:112, q:113, r:114, s:115, t:116, u:117, v:118, w:119, x:120, y:121, z:122 };
  let arr = s.split('');
  let newArr = [], sumsArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(obj[arr[i]]);
  }    
  for (let i = 0; i < newArr.length - 1; i++) {
    sumsArr.push(Math.abs(newArr[i] - newArr[i+1]));
  }
  return sumsArr.join('') === sumsArr.reverse().join('') ? 'Funny' : 'Not Funny';
}

console.log(funnyString('acxz')); // Funny
console.log(funnyString('bcxz')); // Not Funny
