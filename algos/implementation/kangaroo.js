/**
 * You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line
 * ready to jump in the positive direction (i.e, toward positive infinity).
 *
 * The first kangaroo starts at location  and moves at a rate of  meters per jump.
 * The second kangaroo starts at location  and moves at a rate of  meters per jump.
 * You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it
 * is possible, return YES, otherwise return NO.
 */

const kangaroo = (x1, v1, x2, v2) => {
  if (x1 == x2 && v1 == v2) {
    console.log("YES");
  } else if (x1 < x2 && v1 < v2) {
    console.log("NO");
  } else {
    if (x1 == x2 && v1 < v2 || v1 > v2) {
      console.log("NO");
    } else if(x1 > x2 || x1 < x2 && v1 == v2) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
}

let x1 = 1,
    v1 = 2,
    x2 = 0,
    v2 = 2;

kangaroo(x1, v1, x2, v2); // NO
