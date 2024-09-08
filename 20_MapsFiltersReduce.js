let array1 = [12, 99, 108, 69, 58, 79];
//console.log(array1);

let a = array1.map((value, index, array) => {
  console.log(value, value + 1, index, array); //This performs the function on the array and return the new array with new value
  return value + 100; //This returns the value of the new array + 100 added t each of the elements in the array.
});

console.log(a);

let a2 = array1.filter((element) => {
  return element > 50;
});

console.log(a2);

let a3 = array1.reduce((h1, h2) => {
  return h1 % h2;
});

console.log(a3);
