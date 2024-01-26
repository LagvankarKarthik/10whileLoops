const readlineSync = require("readline-sync");
let a = readlineSync.question("Enter a number: ");
a = Number.parseInt(a);

let i = 0;
while (i < a) {
  console.log("Haha", i);
  i++;
}

//Do while loop
let n = readlineSync.question("Enter a number: ");
n = Number.parseInt(n);

let j = 0;
do {
  console.log("Haha", j);
  j++;
} while (j < n);
