let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.warn('Hey, this is executor code of the promise "p1"');
    resolve(1);
  }, 1500);
});

p1.then((value) => {
  console.log("The promise is now resolved with the value ", value);
});
p1.then(() => {
  console.log("Hurray!");
});
