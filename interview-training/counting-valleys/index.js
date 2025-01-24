function countingValleys(pathLength, path) {
  let valleysCount = 0;
  let steps = 0;

  path.split("").forEach((pathLetter) => {
    const previousLevel = steps;

    const isUpHill = pathLetter === "U";
    if (isUpHill) {
      steps++;
    } else {
      steps--;
    }

    const currentLevel = steps;

    const valleyFound = previousLevel < 0 && currentLevel === 0;
    if (valleyFound) {
      valleysCount++;
    }
  });

  return valleysCount;
}

function main() {
  console.log(countingValleys(8, "UDDDUDUU"));
}

main();
