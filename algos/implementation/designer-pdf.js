'use strict';

/**
 * HackerRank - Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 * 
 * Complete the designerPdfViewer function in the editor below. 
 * It should return an integer representing the size of the highlighted area.
 */

function designerPdfViewer(h, word) {
  const charToIndex = c => c.charCodeAt(0) - 97;

  const max = word.split('')
    .map(c => h[charToIndex(c)])
    .reduce((a, b) => a > b ? a : b);
  return max * word.length;
}

console.log(designerPdfViewer('1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5', 'abc')); // 9