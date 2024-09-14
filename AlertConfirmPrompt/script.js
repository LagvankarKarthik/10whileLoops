alert("Hey! your script works!");

let a = prompt('Enter the value of "a" here: ', "Please enter the value here");
console.log(a);

let b = confirm("Do you want the message to be prnted on the page?");

console.log(b, typeof b);

document.write(
  b == true //Double equa sign because single equal sign would be assigning 'true' value to b. Double equal sign is checking if the value returned is true.
    ? a
    : "Please refresh the page and click on OK to allow the value to be written on the page."
);
