const miniMaxSum = (arr) => {
  // first find the min and max values in arr
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // next find the total sum
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }
  let minSum = sum - max;
  let maxSum = sum - min;
  console.log(minSum, maxSum);
} 

let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr); // 10 14
