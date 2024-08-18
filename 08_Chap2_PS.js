//Use logical operatotrs to find if the age is between 10 and 20
const readlineSync = require("readline-sync");

let age = readlineSync.question("What is your age? ");
age = parseInt(age);

console.log(
  "Your age ",
  age > 10 && age < 20
    ? "lieaas between 10 and 20"
    : "does not lie between 10 and 20"
);

//Demonstrate the use of switch case statements in JS
let age1 = readlineSync.question("WHat is your age? ");
age1 = parseInt(age1);
switch (age1) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");
}
