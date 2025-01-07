function plusMinus(arr) {
  const counter = {
    positive: 0,
    negative: 0,
    zero: 0,
  };

  arr.forEach((element) => {
    if (element === 0) {
      counter.zero++;
    }
    if (element < 0) {
      counter.negative++;
    }
    if (element > 0) {
      counter.positive++;
    }
  });

  console.log((counter.positive/arr.length).toFixed(6));
  console.log((counter.negative/arr.length).toFixed(6));
  console.log((counter.zero/arr.length).toFixed(6));
}

function main() {
  plusMinus([1, 1, 0, -1, -1]);
}

main();
