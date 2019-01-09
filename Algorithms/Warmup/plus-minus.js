function plusMinus(arr) {
  var p = 0, z = 0, n = 0, num = arr.length;
  for (var i = 0; i < num; i++) {
    if (arr[i] > 0) {
      // increment p
      p++;
    } else if (arr[i] == 0) {
      // increment z
      z++;
    } else {
      // increment n
      n++;
    }
  }
  console.log(p/num); // 0.5
  console.log(n/num); // 0.33333333
  console.log(z/num); // 0.16666666
}

var arr = [-4, 3, -9, 0, 4, 1], num = 6;
plusMinus(arr);
