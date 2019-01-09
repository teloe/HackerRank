'use strict';

/**
 * Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from
 * the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book,
 * page  is always on the right side:
 *
 * When she flips page , she sees pages  and . Each page except the last page will always be printed on both sides. The
 * last page may only be printed on the front, given the length of the book. If the book is  pages long, and she wants
 * to turn to page , what is the minimum number of pages she will turn? She can start at the beginning or the end of the
 * book.
 *
 * Given  and , find and print the minimum number of pages Brie must turn in order to arrive at page p.
 */

function pageCount(n, p) {
  let leftStart = Math.floor(p / 2),
      rightStart = Math.floor(n / 2) - leftStart;
  return leftStart > rightStart ? rightStart : leftStart;    
}

console.log(pageCount(6, 2)); // 1
console.log(pageCount(5, 4)); // 0
console.log(pageCount(18183, 18042)); // 70