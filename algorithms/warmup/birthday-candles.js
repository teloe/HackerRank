function birthdayCakeCandles(n, ar) {
  let num = 0;
  let largest = 0;
  for (let i = 0; i < n; i++) {
    if (ar[i] > num) {
      num = ar[i];
      largest = 1;
    } else if (ar[i] == num) {
      largest++;
    }
  }
  console.log(largest);

}

let ar = [3, 2, 1, 3], n = 4;
birthdayCakeCandles(n, ar); // 2
