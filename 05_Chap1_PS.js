//Create a variable of type string and add a number to it.
let a = "String";
let b = a + 12;
console.log(b);
console.log(typeof (a + b));

//Create a js object. Can you chage it to hold a number later?
const item = {
  p: "This is a string ",
  q: true,
  r: BigInt(10021),
  s: false,
};
console.log(item);
item["p"] = 69;
console.log(item["p"]);
console.log(item);

//Try to add a new key to the object item

item["t"] = "Hasna";
console.log(item);

//Word meaning dictionary of 5 words
const dictionary = {
  frantic: "Distraught with feeling of fear, anxiety or other emotions",
  distraught: "Very worried and upset",
  floccinocihilipilification:
    "The habbit of estimating something to be worthless",
  hippopotomonsstrosequipedaliophoebia: "Fear of long words",
  catastrophe: "A sudden, violent event that results in a great loss",
};
console.log(dictionary);
