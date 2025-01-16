function lonelyinteger(arr) {
  const arrElementsFrequency = {};

  arr.forEach((element) => {
    if (arrElementsFrequency[element] >= 0) {
      arrElementsFrequency[element]++;
    } else {
      arrElementsFrequency[element] = 1;
    }
  });

  for (const [key, value] of Object.entries(arrElementsFrequency)) {
    if (value === 1) return key;
  }
}

function main() {
  console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
}

main();
