// https://www.hackerrank.com/challenges/two-characters/problem

'use strict';

function alternate(s) {
  let t = 0;
  let set = new Set(s);
  set = Array.from(set);
  // console.log(set);
  for (let i = 0; i < set.length; i++) {
    for (let j = i+1; j < set.length; j++) {
      var count = 0;
      var check = 0;
      var a = set[i];
      var b = set[j];
      for(let l = 0; l < s.length; l++){
        if(s[l] === a){
          if(check === true){
            count = 0;
            break;
          }
          check = true;
          count ++;
        }
        if(s[l] === b){
          if(check === false){
            count = 0;
            break;
          }
          check = false;
          count ++;
        }       
      }
      t = Math.max(t, count);
    }
  }
  return t;
}

console.log(alternate('beabeefeab')); // 5
