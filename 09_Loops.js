//For loops
const readlineSync = require("readline-sync");

let num = readlineSync.question("Enter a number: ");
num = Number.parseInt(num);

let sum = 0;
for (let i = 0; i < num; i++) {
  sum += i + 1;
}

console.log(sum);


//Forin loops
let obj = {
  Karthik: "100",
  Hasna: "98",
  Pavana: "99",
  Kritthika: "96",
  Sadhvi: "94",
};
for (let a in obj) {
  console.log(a);
  console.log("Marks of ", a, " is", obj[a]);
}
