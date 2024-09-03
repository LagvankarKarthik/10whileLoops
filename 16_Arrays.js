const readlineSync = require("readline-sync");

let marks = [100, 99, 98, false, "Karthik", null, 94, undefined, 12.4];

console.log(marks);
console.log('The length of the array "marks" is', marks.length);

console.log(marks[9]);

marks[9] = "I am a good boy!"; //Adding a new value to the array
console.log(marks);

marks[2] = 10; //Changing the value in an array
console.log(marks);

//Printing an array with frloop
let a = readlineSync.question("Enter the lengt of the array: ");
a = Number.parseInt(a); //Asking the user for the length of the array that needs to be printed.
for (let i = 0; i < a; i++) {
  console.log(marks[i]);
}
// i is initialized. Then the ith value in the array is printed as long as the i < a. i value increments when the for loop runs each time.
