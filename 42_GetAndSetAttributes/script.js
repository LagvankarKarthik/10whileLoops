console.log("Get and set attributes");
//get Attribute
console.log(firstId.getAttribute("class"));
//Has attribute
console.log(firstId.hasAttribute("class"));
console.log(firstId.hasAttribute("src"));
//set attribute
//firstId.setAttribute("hidden", true);
let first = document.getElementById("firstId");
console.dir(first);
first.setAttribute("class", "demoFirstClass firstClass demo");
first.removeAttribute("class", "demoFirstClass demo");
first.setAttribute("class", "firstClass");

//elem.Attributes
console.log(first.attributes);
console.dir(first.attributes);

//Custom attributes
console.log(first.dataset.name);
console.log(first.dataset.age);
