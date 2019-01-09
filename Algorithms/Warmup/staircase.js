function staircase(n) {
  let space, hash, stair;
  for (let i = 0; i < n; i++) {
    space = n - 1 - i;
    hash = i + 1;
    stair = ' '.repeat(space) + '#'.repeat(hash);
    console.log(stair);
  }
}

let n = 6;
staircase(n);
