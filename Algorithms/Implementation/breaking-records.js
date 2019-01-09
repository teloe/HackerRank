/**
 * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
 * She tabulates the number of times she breaks her season record for most points and least points in a game. 
 * Points scored in the first game establish her record for the season, and she begins counting from there.

 * For example, assume her scores for the season are represented in the array . Scores are in the same order as the games played. 
 */

'use strict';

function breakingRecords(s) {
  let mostPoints = s[0],
      leastPoints = s[0],
      mostPointsBreak = 0,
      leastPointsBreak = 0;
    for(let i = 1; i < s.length; i++) {
      let points = s[i];
      if(points > mostPoints) {
        mostPoints = points;
        mostPointsBreak++;
      }
      if(points < leastPoints) {
        leastPoints = points;
        leastPointsBreak++;
      }
    }
  console.log(mostPointsBreak + ' ' + leastPointsBreak);
}

let s = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
breakingRecords(s); // 4 0
 
