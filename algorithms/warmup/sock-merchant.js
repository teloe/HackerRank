/**
 * John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of
 * integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 *
 * For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks
 * left, one of each color. The number of pairs is .
 */

function sockMerchant(n, ar) {
  let match = 0;
  for (let i = 0; i < ar.length; i++) {
    // find index of the match for current sock
    let pairIdx = ar.indexOf(ar[i], i + 1);
    // if the match exists
    if (pairIdx > -1) {
      ar.splice(i, 1);
      ar.splice(pairIdx - 1, 1);
      // add 1 to match and reset loop
      match++, i = -1;
    }
  }
  return match;
}

let n = 9, ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    
console.log(sockMerchant(n, ar)); // 3
