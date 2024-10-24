let script;
let javascript = prompt("Enter an src: ");

let heading = document.createElement("h1");
document.body.appendChild(heading);
heading.innerHTML = "Heading";

const loadScript = () => {
  return new Promise((resolve, reject) => {
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = javascript;
    document.body.appendChild(script);
    console.log(javascript);

    script.onload = () => {
      resolve(1);
    };

    script.onerror = () => {
      reject(0);
    };
  });
};

let p1 = loadScript(javascript);
p1.then((value) => {
  console.log(value);
}).catch(() => {
  console.warn("Unable to load the src!");
});
