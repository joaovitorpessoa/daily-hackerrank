function diagonalDifference(arr) {
  const diagonalSum1 = arr.reduce((acc, matrixLine, index) => {
    acc += matrixLine[index];
    return acc;
  }, 0);
  const diagonalSum2 = arr.reduce((acc, matrixLine, index) => {
    acc += matrixLine[matrixLine.length - 1 - index];
    return acc;
  }, 0);

  return Math.abs(diagonalSum1 - diagonalSum2);
}

function main() {
  console.log(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]),
  );
}

main();
