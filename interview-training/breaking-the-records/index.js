function breakingRecords(scores) {
  const records = {
    min: 0,
    max: 0,
  };
  const recordsBreakedQuantity = {
    min: 0,
    max: 0,
  };

  scores.forEach((score, gameNo) => {
    if (gameNo === 0) {
      records.min = score;
      records.max = score;
    } else {
      if (score > records.max) {
        records.max = score;
        recordsBreakedQuantity.max++;
      }
      if (score < records.min) {
        records.min = score;
        recordsBreakedQuantity.min++;
      }
    }
  });

  return [recordsBreakedQuantity.max, recordsBreakedQuantity.min];
}

function main() {
  console.log(breakingRecords([12, 24, 10, 24]));
}

main();
