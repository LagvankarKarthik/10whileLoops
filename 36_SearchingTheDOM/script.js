let cTitle = document.getElementsByClassName("card-title")[0];
//Changing the colour of the card title to Blue
cTitle.style.color = "blue";
console.log(cTitle);
//Change the second card title to red
let cTitleTwo = document.getElementById("secondCard");
cTitleTwo.style.color = "red";

document.getElementsByClassName("card")[0].style.margin = "10px";
document.getElementsByClassName("card")[1].style.margin = "10px";

//querySelectorAll
let cardBodies = document.querySelectorAll(".card-body");
console.log("This is the list of card body elemetns", cardBodies);

//To get all the elements with a particular tag name.
let tagNameElements = document.getElementsByTagName("div");
console.log(
  "This is the collection of the elements with the tag div: ",
  tagNameElements
);
//I can also directly search the elements in the body by typing, document.body("...")
