let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);

delete num[3];
console.log(num.length, num);

delete num[(6, 8)]; //Only one value can be deleted at a time.
console.log(num.length, num);

let arr1 = [12, 3, 8, 89, null, undefined];
let arr2 = [true, "Karthik", BigInt(1200000), "JavaScript"];
let arr3 = [false, true, null, undefined, "AI"];
console.log(arr1.length, arr2.length, arr3.length);
let concatArray = arr1.concat(arr2, arr3);
console.log(concatArray, concatArray.length);

const compare = (a, b) => {
  return a - b;
};

let ex = [20, 109, 9000009, 109845620];
ex.sort(compare);
console.log(ex);

let x = [
  12,
  null,
  undefined,
  90.67,
  888,
  "Dimensity 8020",
  "iPhone 15 Pro Max",
];
console.log(x);
x.splice(2, 5, true, "Snapdragon 7 gen 3", "Motorola Edge 50 Pro", undefined);
console.log(x);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let deletedNumbers = numbers.splice(2, 4, -3, -4, -5, -6);
console.log(deletedNumbers, numbers);
