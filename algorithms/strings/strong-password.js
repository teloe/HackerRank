'use strict';

/**
 * HackerRank - Strong Password
 * https://www.hackerrank.com/challenges/strong-password/problem
 *
 * Print a single line containing a single integer denoting the answer to the problem.
 */

function minimumNumber(n, p) {
  const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+"]/]
            .map(r => !r.test(p))
            .filter(Boolean).length;
  return Math.max(c, 6 - n);
}

console.log(minimumNumber(3, 'Ab1')); // 3
console.log(minimumNumber(11, '#HackerRank')); // 1