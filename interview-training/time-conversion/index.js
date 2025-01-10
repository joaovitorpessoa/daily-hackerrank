function timeConversion(s) {
  const [hours, minutes, seconds] = s
    .replace(/(AM|PM)/, "")
    .split(":")
    .map(Number);
  const isBeforeMidday = s.match(/AM/);

  if (isBeforeMidday) {
    const militaryHours = hours >= 12 ? hours - 12 : hours;
    return `${militaryHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  } else {
    const militaryHours = hours >= 12 ? hours : 12 + hours;
    return `${militaryHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}

function main() {
  console.log(timeConversion("13:45:54PM"));
}

main();
