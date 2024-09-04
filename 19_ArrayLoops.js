let num = [12, 93, 884, 365, 69, 555, 902, 888];

num.forEach((value) => {
  console.log(value * value);
});

let name = "Karthik";
let arr = Array.from(name);
console.log(arr, typeof arr);

//For of loop for arrays
for (let i of num) {
  console.log(i);
}
//For in loop for arrays
for (let i in num) {
  console.log(i);
}
//In ths the output is the keys of the array. The keys in the aray are the index values of the elements in the array.

for (let j = 0; j < num.length; j++) {
  console.log(j);
}
//This is the same as running a for in loop
