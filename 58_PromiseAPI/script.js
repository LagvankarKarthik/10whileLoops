let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('This is promise "p1"...');
    resolve('The promise "p1" is resolved! ');
  }, 2500);
});
let p2 = new Promise((resolve, reject) => {
  console.log('This is promise "p2"...');
  resolve('The promise "p2" is resolved! ');
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('This is promise "p3"...');
    reject(new Error('The promise "p3" is rejected! '));
  }, 1500);
});

let promiseAll = Promise.all([p1, p2, p3]);

promiseAll.then((value) => {
  console.log(value, promiseAll);
});

let promsieAllSettled = Promise.allSettled([p1, p2, p3]);
promsieAllSettled.then((value) => {
  console.log(value, "promise allSEttled");
});

let promiseRace = Promise.race([p1.p2, p3]);
promiseRace.then((value) => {
  console.log(value, "This is the result of promise race");
});
