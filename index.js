const readlineSync = require('readline-sync');
let a = readlineSync.question('Enter a number: ');
a = Number.parseInt(a);

let i = 0;
while (i<a) {
  console.log('Haha', i);
  i++;
}
console.log('Hello world');