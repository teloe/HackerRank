// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

'use strict';

function caesarCipher(s, k) {
    let a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let c = '';
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            c += a[(char - 65 + k) % 26].toUpperCase();
        } else if (char >= 97 && char <= 122) {
            c += a[(char - 97 + k) % 26];
        } else {
            c += s[i];
        }
    }
    return c;
}

console.log(caesarCipher('middle-Outz', 2)); // okffng-Qwvb 
