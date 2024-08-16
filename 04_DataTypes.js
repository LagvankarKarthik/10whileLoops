//nn bb ss u = Numbers null boolean bigint string symbol undefined
let a = 69;
let b = null;
let c = true;
let d = BigInt("46775") + BigInt("1000");
let e = "Hasna";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof e);

const Couple = {
  Karthik: "Hasna",
  Kaka: null,
  Training: 69,
};
console.log(Couple["Karthik"]);
