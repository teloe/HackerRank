/**
 * Alice and Bob each created one problem for HackerRank. A reviewer rates the
 * two challenges, awarding points on a scale from  to  for three categories:
 * problem clarity, originality, and difficulty.
 *
 * We define the rating for Alice's challenge to be the triplet , and the rating
 * for Bob's challenge to be the triplet .
 *
 * Your task is to find their comparison points by comparing  with ,  with , and
 * with .
 *
 * If , then Alice is awarded  point.
 * If , then Bob is awarded  point.
 * If , then neither person receives a point.
 * Comparison points is the total points a person earned.
 *
 * Given  and , can you compare the two challenges and print their respective
 * comparison points?
 */

function compareTriplets(a, b) {
  let newArr = [];
      aCount = 0;
      bCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aCount++;
    } else if (a[i] < b[i]) {
      bCount++;
    } else {
      pass;
    }
  }
  newArr.push(aCount, bCount);
  return newArr;
}

let a = [17, 28, 30];
    b = [99, 16, 8];
console.log(compareTriplets(a, b)); // [2, 1]
