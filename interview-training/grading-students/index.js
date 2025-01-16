function gradingStudents(grades) {
  const roundedGrades = grades.map((grade) => {
    const gradeCanBeRound = grade >= 38;

    if (gradeCanBeRound) {
      const nextFiveMultiple = grade + (5 - (grade % 5));
      const shouldRound = nextFiveMultiple - grade < 3;

      if (shouldRound) {
        return nextFiveMultiple;
      } else {
        return grade;
      }
    }

    return grade;
  });

  return roundedGrades;
}

function main() {
  console.log(gradingStudents([84, 29, 57, 73, 67, 38, 33]));
}

main();
