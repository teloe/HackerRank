/**
 * Given a 6 x 6 2d array, arr: calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass
 * sum.
 */

let arr = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ]
];

const hourglassSum = arr => {
  let sum = []
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++){
      sum.push(
        (arr[i][j]+arr[i][j+1]+arr[i][j+2]) + 
        (arr[i+1][j+1]) + 
        (arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2])
      )
    }
  }
  console.log(Math.max.apply(null, sum));
}

hourglassSum(arr);
