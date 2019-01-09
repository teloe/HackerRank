'use strict';

/**
 * HackerRank - Super Reduced String
 * https://www.hackerrank.com/challenges/reduced-string/problem
 *
 * Complete the superReducedString function in the editor below. It should return the super reduced string or 
 * Empty String if the final string is empty.
 */

function superReducedString(s) {
  let a = s.split('');
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      a.splice(i, 2);
      i = -1;
    }
  }
  let newS = a.join('');
  return (newS !== '') ? newS : 'Empty String';
}

console.log(superReducedString('aaabccddd')); // 'abd'
console.log(superReducedString('aa')); // 'Empty String'
console.log(superReducedString('baab')); // 'Empty String'