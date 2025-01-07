function findMedian(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const median = sortedArr[Math.floor(sortedArr.length / 2)];
  console.log(sortedArr);
  return median;
}

function main() {
  return findMedian([3, 4, 5, -2, -1]);
}

console.log(main());
