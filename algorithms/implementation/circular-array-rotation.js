'use strict';

/**
 * HackerRank - Circular Array Rotation
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 *
 * Complete the circularArrayRotation function in the editor below. It should return an array of integers representing
 * the values at the specified indices.
 */

function circularArrayRotation(a, k, queries) {
    if (k > a.length) k = k % a.length;
    var aa = a.splice(a.length - k, k + 1);
    a.unshift(...aa);

    return queries.map((x) => {
        return a[x];
    });

}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])); // [2, 3, 1]
