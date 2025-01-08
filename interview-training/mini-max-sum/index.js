function miniMaxSum(arr) {
  const sortedArr = arr.sort((a,b) => a - b);

  const max = sortedArr.reduce((acc, element, index) => {
    if (index === 0) return acc;
    return acc + element;
  }, 0);

  const min = sortedArr.reduce((acc, element, index) => {
    if (index === (sortedArr.length - 1)) return acc;
    return acc + element;
  }, 0);

  console.log(min, max);
}

function main() {
  miniMaxSum([1,2,3,4,5]);
}

main();
