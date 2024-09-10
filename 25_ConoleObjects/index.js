console.time("a");
console.log(console);

console.assert(125 > 20);
console.assert(20 > 125);
console.error("This is an error message!");
console.warn("This is a warning message!");
console.info("This is an important information!");

let obj = {
  Karthik: "99",
  Vibek: "100",
  Vaishakh: "98",
  Varun: "95",
};

console.table(obj);

console.table(console);
console.timeEnd("a");
