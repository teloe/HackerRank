/**
 * Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on 
 * Sam's house (i.e., in the inclusive range )?
 *
 */

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let appleCount = apples.filter(val => val + a >= s && val + a <= t).length;
  let orangeCount = oranges.filter(val => val + b >= s && val + b <= t).length; 

  console.log(appleCount);
  console.log(orangeCount);
}

let s = 7, t = 11, a = 5, b = 15, apples = 3, oranges = 2;
countApplesAndOranges(s, t, a, b, apples, oranges);
