let p1 = new Promise(function (resolve, reject) {
  resolve(true);
  console.log('I am promise "p1" \nI am resolved');
});

let p2 = new Promise(function (resolve, reject) {
  console.log('Promsie "p2" is rejected...');
  reject(new Error("The promise is rejected \nthis is the error message."));
});

//.then
p1.then((value) => {
  console.log(value, "This is the value of p1");
});
//This is one method of catchig error using .then
p2.then(
  (value) => {
    console.warn('The promise "p2" is rejected.');
  },
  (error) => {
    console.info(error);
  }
);
//This is another way of catching error using .catch method
p2.catch((error) => {
  console.warn(error);
});
