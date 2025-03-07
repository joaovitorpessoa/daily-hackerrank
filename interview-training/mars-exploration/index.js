function marsExploration(s) {
  const sosMessages = s.match(/.{3}/g);
  let modifiedLetters = 0;

  sosMessages.forEach((sosMessage) => {
    for (const [index, letter] of Object.entries(sosMessage)) {
      if ((index === '0' || index === '2') && letter !== "S") {
        modifiedLetters++;
      }
      if (index === "1" && letter !== "O") {
        modifiedLetters++;
      }
    }
  });

  return modifiedLetters;
}

function main() {
  console.log(marsExploration("SOSSPSSQSSOR"));
}

main();
