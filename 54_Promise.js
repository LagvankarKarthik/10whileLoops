let promise = new Promise(function (resolve, reject) {
  console.log("This is a promise!");
  resolve(69);
});

console.log("Hello 1");

setTimeout(function () {
  console.log("Hello 2" + " in 1 second.");
}, 1000);

console.log("Hello 3");
console.log(promise);
