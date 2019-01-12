/**
 * You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

 * The elements of the first array are all factors of the integer being considered
 * The integer being considered is a factor of all elements of the second array
 * These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

 * For example, given the arrays  and , there are two numbers between them:  and . , ,  and  for the first value. Similarly, ,  and , .
 */

'use strict';

function getTotalX(a, b) {
  let aMax = Math.max ( ...a );
  let bMin = Math.min ( ...b );
  console.log(aMax);
  console.log(bMin);
  const result = range(aMax, bMin).filter(num => a.every(i => num % i === 0) && b.every(j => j % num === 0));
  console.log(result.length);
}

let a = [2, 3], 
    b = [2, 4]; 
getTotalX(a, b); // 3
