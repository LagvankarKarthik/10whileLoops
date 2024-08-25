console.log("Practice set");
//Write a program to print the marks of a student in an objec using for loop
let object1 = {
  Karthik: "100",
  Hasna: "100",
  Gretta: "98",
  Sadhvi: "96",
  Kritthika: "95",
};
for (let a in object1) {
  console.log("Mark of ", a, "is", object1[a]);
  console.log(object1[a]);
}

//Program to prompt "Enter the correct number" until the user enters the correct number
const readlineSync = require("readline-sync");
let correct = 10;
let a;
do {
  console.log("That is not the correct number.");
  a = readlineSync.question("Enter a numebr: ");
} while (a != correct);

console.log("You have entered the correct number!");
