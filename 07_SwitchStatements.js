const readlineSync = require("readline-sync");

let a = readlineSync.question("Which day between 1 and 7: ");
a = parseInt(a);

let dayName;

const dayNameFunction = (a) => {
  switch (a) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day";
  }
  return dayName;
};

if (a > 0 && a < 8) {
  console.log("Day name is:", dayNameFunction(a));
} else {
  a = readlineSync.question("Enter a number between 1 and 7: ");
  a = parseInt(a);
  console.log("Day name is:", dayNameFunction(a));
}
