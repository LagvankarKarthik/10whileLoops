console.log("This is chapter 7 Practice set");
//Create a navbar and change the colour of the first element to red
let a = document.body.getElementsByTagName("ul")[0].firstElementChild;
console.log(a);
a.style.color = "red";

let b = Array.from(document.getElementsByTagName("ul")[0].children);
console.log(b);
b.forEach((elements) => {
  elements.style.color = "red";
});
