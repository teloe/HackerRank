'use strict';

function pickingNumbers(a) {
  let counts = {};
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
