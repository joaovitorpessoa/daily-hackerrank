// A melhor solução seria usando bitwise e fazendo conversão p/ unsigned int32: ~n >>> 0
function flippingBits(n) {
  return parseInt(
    n
      .toString(2)
      .padStart(32, "0")
      .replace(/0/g, "x")
      .replace(/1/g, "0")
      .replace(/x/g, "1"),
    2,
  );
}

function main() {
  console.log(flippingBits());
}

main();
