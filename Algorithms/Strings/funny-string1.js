// Alternative solution to HackerRank - Funny String

const funnyString = s => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let s1 = s[i].charCodeAt(0);
    let s2 = s[i + 1].charCodeAt(0);
    let r1 = s[s.length - i - 1].charCodeAt(0);
    let r2 = s[s.length - i - 2].charCodeAt(0);
    if (Math.abs(s1 - s2) !== Math.abs(r1 - r2)) return 'Not Funny';
  }
  return 'Funny';
};

console.log(funnyString('acxz')); // Funny 
console.log(funnyString('bcxz')); // Not Funny 
