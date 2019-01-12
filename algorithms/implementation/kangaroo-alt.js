function kangaroo (x1, v1, x2, v2) {
  if (v1 < v2) {
    console.log("No");
  }
  if (x1 < x2 && v1 > v2) 
    var xDiff = Math.abs(x1 - x2);
    var vDiff = Math.abs(v1 - v2);
    if (xDiff % vDiff == 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  
}

var x1 = 0,
    v1 = 3,
    x2 = 4,
    v2 = 2;

kangaroo(x1, v1, x2, v2); // Yes
