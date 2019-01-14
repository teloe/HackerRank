// https://www.hackerrank.com/challenges/library-fine/problem

/**
 * 1. If the book is returned on or before the expected return date, no fine will be charged 
 * 2. If the book is returned after the expected return day but still within the same calendar month and year as the
 * expected return date, fine = 15 * (num days late)
 * 3. If the book is returned after the expected return month but still within the same calendar year as the expected
 * return date, fine = 500 * (num days late)
 * 4. If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000
 */

'use strict';

function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine;
    if (d1 === d2 && m1 === m2 && y1 === y2) {
        return 0;
    }
    if (d1 > d2 && m1 === m2 && y1 === y2) {
        fine = 15;
        return fine * (d1 - d2);
    }
    if (m1 > m2 && y1 === y2) {
        fine = 500;
        return fine * (m1 - m2);
    }
    if (y1 > y2) {
        return 10000;
    }
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); // 45
