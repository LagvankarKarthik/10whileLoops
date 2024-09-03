let num = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120];
let a = num.toString(); //Converts an array to strng
console.log(num, typeof a);

let b = num.join("+12 = ");
console.log(b, typeof b); //Joins the charecters in an array with an operator

let c = num.pop();
console.log(num, c, typeof c); //Removes the last value in an array

let d = num.push(120);
console.log(d, num, typeof d); //Adds a value at the end of an array.

let e = num.shift();
console.log(e, typeof e, num); //Removes a value at the beginning of an array

let f = num.unshift(12);
console.log(f, typeof f, num); //Adds a value at the beginning of the array.
