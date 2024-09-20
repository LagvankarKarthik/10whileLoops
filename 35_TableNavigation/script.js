let table = document.body.children[0];

console.log(table, typeof table);
console.log(table.children);

let t = document.firstElementChild.children;
let tableArray = Array.from(t);
console.log(tableArray);
