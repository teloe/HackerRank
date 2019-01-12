'use stict';

/**
 * HackerRank - Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 * 
 * Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.
 */

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      count++;    
    }
  }
  return count >= k ? 'NO' : 'YES';
}

console.log(angryProfessor(3, [-1, -3, 4, 2])); // YES
console.log(angryProfessor(2, [0, -1, 2, 1])); // NO