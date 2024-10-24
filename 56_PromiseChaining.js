let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 1500 ms");
    resolve(true);
  }, 1500);
});

p1.then((value) => {
  console.log(value, " is the value of p1");

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise "p2" is resovled.');
    }, 1000);
  });
  return p2;
})
  .then((value) => {
    console.log("We are done. ", value);
    return value;
  })
  .then((value) => {
    console.log(value);
  });
