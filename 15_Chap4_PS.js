//What will the following print in Javascript?
let string = "Karthik \n KAKA THE GREATEST";
console.log(string.length);

//Explore Includes, Starts with and ends with
const sentence = "Karthik drinks beer everyday!";
let word = "drink";
console.log(
  `The word "${word}" ${
    word.includes ? "is" : "is not"
  } in the sentence \n "${sentence}"`
);

//Program to convert the given string to LowerCase
const string1 = "Karthik is a really good boy!";
console.log(string1.toLowerCase());

//Coverting the first letter of every sentence to uppercase.
const sentence1 =
  "asjd askdjhfg. adhgfk akjdhf akjdhfg akjh. adjhfg kajhdgf kajhdgf . magdgfk ahdgf kadfg.";
let result = "";
for (let i = 0; i < sentence1.length; i++) {
  if (i === 0 || (sentence1[i - 2] === "." && sentence1[i - 1] === " ")) {
    result += sentence1[i].toUpperCase();
  } else {
    result += sentence1[i];
  }
}
console.log(result);

//Print the amount in the given string
let str = "Please give Rs 10000";
let amount = str.slice("Please give Rs ".length);
console.log(amount);
console.log(typeof amount);

let name = "Karthik";
name[3] = "c";
console.log(name); //This returns the name with no changes as the string is immutable.
