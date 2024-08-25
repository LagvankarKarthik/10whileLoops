let myName = "Karthik";

console.log(myName.length);
console.log(myName[2]);

//Template literal
let name = "Hasna";
let drink = "water";
console.log(`${name} drinks ${drink}`);

let string1 = "Apple's my favourite fruit! \r";
console.log(string1);
console.log(string1.charCodeAt(3));
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.slice(2, 4));
console.log(string1.replace("Apple's", "Orenge's"));

let naam = "Kaka";
let naam2 = "TheGreat";
console.log(naam.concat("is the ", naam2));

let nameMeena = "     Meena           ";
console.log(nameMeena.trim());

//Printing a string using for loop
let me = "Karthik";
for (let i = 0; i < me.length; i++) {
  console.log(me[i]);
}

let concat = "Karthik" + "Hasna";
console.log(concat);
//Strings are immutable. Only the changed copy of the string is proted when function is appplied on the string. This returns a new string. The original string is not changed.
