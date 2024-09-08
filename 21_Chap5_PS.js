//Create an array of numbers and take input from the user to add or remove new numbers
const readlineSync = require("readline-sync");

let array = [];
let number = readlineSync.question(
  "How many numbers do you want to add to the array? "
);

for (let i = 0; i < number; i++) {
  let value = readlineSync.question("Enter a number to add to the array: ");
  value = Number.parseInt(value);
  array.push(value);
}
console.log(array);

//Filter the numbers that are divisible by 10 in an array.
const filterValue = (element) => {
  return element % 10 == 0;
};

let array2 = [12, 1, 10, 15, 20, 100, 98, 90, 56, -10];
let filterArray = array2.filter(filterValue);
console.log(filterArray);

//Create ab array of square of given numbers.
let x = array.map((element) => {
  return element * element;
});

console.log(x);

// Return the factoreal of an array values
let y = array.reduce((g, h) => {
  return g * h;
});
console.log(y);
