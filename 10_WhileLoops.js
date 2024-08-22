//while loop
const readlineSync = require("readline-sync");

let number = readlineSync.question("Enter a number here: "); //Asking for user input
number = Number.parseInt(number); //Converting the value to integer
let i = 0; //Initialising i
while (i < number + 1) {
  console.log("Count: ", i);
  i++; //Incrementing i
}

//do while loop
let number1 = readlineSync.question("Enter a numebr: ");
number1 = Number.parseInt(number1);

let j = 0;
do {
  console.log(j);
  j++;
} while (j < number1);
{
  console.log(j);
}
