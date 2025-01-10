function matchingStrings(stringList, queries) {
  const result = [];

  queries.forEach((query, index) => {
    result[index] = 0;

    stringList.forEach((str) => {
      const match = str === query;
      if (match) {
        result[index]++;
      }
    });
  });

  return result;
}

function main() {
  console.log(matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]));
}

main();
