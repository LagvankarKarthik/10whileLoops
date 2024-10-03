console.log("Hello!");

let first = document.getElementsByClassName("first")[0];
console.log(first);

first.insertAdjacentHTML("beforebegin", "<h4>This is before begin </h4>");
first.insertAdjacentHTML("beforeend", "<h4>This is before end </h4>");
first.insertAdjacentHTML("afterbegin", "<h4>This is after begin </h4>");
first.insertAdjacentHTML("afterend", "<h4>This is after end </h4>");

//Changing HTML classes using javascript.
first.className = "blue";
first.className = "yellow";
first.className = "yellow text-dark";

let classList = first.classList;
console.dir(classList);

first.classList.remove("text-dark");

first.classList.add("blue");

//Set timeout andd set interval
let quest = prompt(
  "Do you want to cange the background color to Yellow-Green? If you click yes, it will change the background color in 2400 ms"
);
let timeOut;

if (quest === "Yes" || quest === "yes" || quest === "y" || quest === "Y") {
  timeOut = setTimeout(function () {
    first.className = "yellow";
  }, 2400);

  console.log(timeOut);
} else if (quest === "No" || quest === "no" || quest === "N" || quest === "n") {
  clearTimeout(timeOut);
} else {
  alert("Fuck yourself!");
}

//setTieout that takes args and time and returns with deay:
let a = 12,
  b = 13;

const sum = (a, b) => {
  return a + b;
};

console.log("I am running");
timeout = setTimeout(function () {
  let result = sum(12, 13);
  console.log("The sum is: ", result);
}, 2000);

const addition = (x, y, z) => {
  console.log(x + y + z);
};

let timerId = setTimeout(addition, 1500, 1, 2, 3);
console.log(timerId);

//SetInterval
setInterval(function () {
  console.log(12 * 15);
}, 1800);
