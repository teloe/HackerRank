// https://www.hackerrank.com/challenges/append-and-delete/problem

'use strict';

function appendAndDelete(s, t, k) {
    let dCount = 0,
        aCount = 0,
        a = s.split('');

    for (var i = 0, j = 0; i < s.length, j < t.length; i++, j++) {
        if (s[i] !== t[j]) {
            break;
        } 
    }
    dCount = s.length - i;
    a.splice(i);
    aCount = t.length - a.length;
    return dCount + aCount <= k ? 'Yes' : 'No';
}

console.log(appendAndDelete('hackerhappy', 'hackerrank', 9)); // Yes
console.log(appendAndDelete('aba', 'aba', 7)); // Yes
console.log(appendAndDelete('ashley', 'ash', 2)); // No
