function onePlusAvg(x, y) {
  console.log("Done");
  return (1 + (x + y)) / 2;
}

const hello = (a, b, c) => {
  return (sum = a + b + c);
};

let a = 1;
let b = 2;
let c = 3;

console.log("One plus avg of a and b is: ", onePlusAvg(a, b));
console.log("One plus avg of b and c is: ", onePlusAvg(c, b));
console.log("One plus avg of c and a is: ", onePlusAvg(a, c));

let x = hello();
console.log("Hi sum ", hello(a, b, c), "!");
