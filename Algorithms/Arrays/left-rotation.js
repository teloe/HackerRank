const rotLeft = (a, d) => {
  // check if there is something to rotate
  if(a.length < 2) {
    return a.slice(0);
  }

  // get the # of rotations to perform
  let n = d % a.length;

  // check if there's any need to rotate
  if (n === 0) {
    return a.slice(0);
  }

  // slice and concat
  if(n < 0) {
    return a.slice(n).concat(a.slice(0, a.length + n))
  } else {
    return a.slice(n).concat(a.slice(0, n));
  }
}
let a = [1, 2, 3, 4, 5], d = 4;
console.log(rotLeft(a, d)); // [5, 1, 2, 3, 4]
