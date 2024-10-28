//Q1 Program to load a script using promise and .ten to alert the user that the script is succefully loaded.
let javascript;
let p1;

const loadScript = (javascript) => {
  return new Promise((resolve, reject) => {
    script = document.createElement("script");
    script.type = "text/javascript";
    javascript = prompt("Enter the src here: ");
    script.src = javascript;
    document.body.appendChild(script);

    console.log(javascript);

    script.onload = () => {
      resolve("The script is succefully loaded!");
    };

    script.onerror = () => {
      reject(0);
    };
  });
};

p1 = loadScript(javascript);
p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.warn(
    "Error loading the script. Please check the script again.",
    error
  );
});

// Q2 Using async awat
// const main1 = async () => {
//   try {
//     p1 = await loadScript(javascript);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// main1();

//Q4 Write a program to await 3 promises inside an async/await. Compare it's result with the program where we await 3 promises separately.

const demo = async () => {
  let prom1 = new Promise((resolve, reect) => {
    setTimeout(() => {
      resolve(99);
    }, 1000);
  });
  let prom2 = new Promise((resolve, reect) => {
    setTimeout(() => {
      resolve(34);
    }, 2000);
  });
  let prom3 = new Promise((resolve, reect) => {
    setTimeout(() => {
      resolve(88);
    }, 3000);
  });
  console.time("a");
  let awaitFunction1 = await prom1;
  let awaitFunction2 = await prom2;
  let awaitFunction3 = await prom3;
  console.timeEnd("a");

  return [awaitFunction1, awaitFunction2, awaitFunction3];
};

let demoFunction = demo();
demoFunction.then((value) => {
  console.log(value);
});
//In this I have run all promises in a single async function. To compare, I have to make 3 async promises
/* let promise 1 = async() => {
    returb new Promise ((resolve, reject) => {
        resolve(value);
      })
  }
  */

const prom4 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
const prom5 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
const prom6 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

let runAll = async () => {
  // console.time("run");
  // let pr1 = await prom4();
  // let pr2 = await prom5();
  // let pr3 = await prom6();
  // console.timeEnd("run");

  // console.log([pr1, pr2, pr3]);
  console.time("run");
  let a1 = prom4();
  let a2 = prom5();
  let a3 = prom6();

  let a1a2a3 = await Promise.all([a1, a2, a3]);
  console.log(a1a2a3);
  console.timeEnd("run");
};
runAll();
