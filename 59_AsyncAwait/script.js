async function weatherFunction() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("30 degree");
    }, 1000);
  });

  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("20 degree");
    }, 2500);
  });

  console.log("Fetching delhi weather!");
  let delhiW = await delhiWeather;
  console.log("Delhi weather fetched!", delhiW);

  console.log("Fetching Bangalore weather");
  let bangaloreW = await bangaloreWeather;
  console.log("Bangalore weather fetched!", bangaloreW);

  return [delhiW, bangaloreW];
}

const bakwas = async () => {
  setTimeout(() => {
    console.log("bakwas function!");
  });
};

let a = weatherFunction();
let b = bakwas();
console.log(a);
console.log(b, "Bakwas fuction running!");

a.then((value) => {
  console.log(value);
});
b.then((value) => {
  console.log(value);
});

//Error handlling:
try {
  console.log(mandeMari);
} catch (error) {
  console.log(error);
}

//Custom errors and error objects
try {
  chownSync.log(p);
  // throw new ReferenceError("Why?");
} catch (err) {
  console.log(err.name, "This is the error name");
  console.log(err.message, "This is the error message");
  console.log(err.stack, "This is the error stack");
}

try {
  throw new Error("Modi is not competent");
} catch (err) {
  console.log(err.name, "Error name");
  console.log(err.message, "Error message");
  console.log(err.stack, "Error stack");
}

//Finally clause
