console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);

let a = document.body.childNodes[3];
console.log(a.parentElement); //This return parent element
console.log(a.parentNode); //This return parent Node

let b = document.body;

console.log(b.children[0]); //This returns only element children unlike node which returns even text and comment ndoes.
