'use strict';

/**
 * HackerRank - Pangrams
 * https://www.hackerrank.com/challenges/pangrams/problem
 * 
 * Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. 
 * Otherwise, it should return not pangram.
 */

function pangrams(s) {
  let result = /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(s);
  return result ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize')); // 'pangram'
console.log(pangrams('We promptly judged antique ivory buckles for the prize')); // 'not pangram'