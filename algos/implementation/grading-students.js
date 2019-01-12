/**
 * Grades 0 <= 100
 * Grades < 40 is fail
 * Return an array consisting of rounded grades
 *
 */

const gradingStudents = grades => {
  let finalGrades = [];
  let i = 0;
  let newGrade = grades[i];
  let up = Math.ceil(grades[i]/5) * 5;
  while (i < grades.length) {
    if (grades[i] < 38 && grades[i] % 5 === 0 && up - grades[i] > 3) {
      newGrade = grades[i];
      finalGrades.push(newGrade);
    } else {
      newGrade = up;
      finalGrades.push(newGrade);
    }
    i++;
  }
  console.log(finalGrades);
}

let grades = [73, 67, 38, 33];

gradingStudents(grades);
