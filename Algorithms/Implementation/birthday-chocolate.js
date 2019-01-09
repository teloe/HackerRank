/**
 * Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer
 * on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches
 * Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how
 * many ways she can divide the chocolate.
 */

'use strict';

function birthday(s, d, m) {
  let combos = 0;
  for (let i = 0; i < s.length; i++) {
    let total = 0;
    for (let j = i; j < i + m; j++) {
      total += s[j];
    }
    if (total === d) {
      combos++;
    }
  }
  console.log(combos); 
}

let s = [1, 2, 1, 3, 2], 
    d = 3,
    m = 2;

birthday(s, d, m); // 2
