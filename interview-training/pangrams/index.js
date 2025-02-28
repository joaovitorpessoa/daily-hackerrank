function pangrams(s) {
  s = s.toLowerCase();
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const isPangram = ALPHABET.split("").every(letter => s.includes(letter));
  return isPangram ? "pangram" : "not pangram";
}

function main() {
  console.log(pangrams("the quick brown fox jumps over the lazy dog"));
};

main();
