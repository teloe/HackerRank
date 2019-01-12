'use strict';

/**
 * You have been asked to help study the population of birds migrating across the continent. 
 * Each type of bird you are interested in will be identified by an integer value. 
 * Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. 
 * You would like to be able to find out which type of bird is most common given a list of sightings. 
 * Your task is to print the type number of that bird and if two or more types of birds are equally common, 
 * choose the type with the smallest ID number.
 */

function migratoryBirds(ar) {
  let maxFreq = 0;
  let minId = 6;
  let hash = ar.reduce((acc,curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {})

  for(let key in hash){
    if(hash[key] >= maxFreq){
      if(maxFreq === hash[key]){
        minId = Math.min(minId, parseInt(key));
      } else {
        minId = parseInt(key); 
      }
      maxFreq = hash[key];
    }
  }
  return minId;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3

