//Show different alerts when you click different buttos
//This is handled in html as the problem is really simple

//Creating the buttons that take us to te website we want with the help of event listneres.
let a = document.getElementsByClassName("bookmarks")[0];
let b = document.getElementsByClassName("bookmarks")[1];
let c = document.getElementsByClassName("bookmarks")[2];

console.log(a, b, c);

a.addEventListener("click", function () {
  window.location = "https://google.com";
  window.focus();
});
b.addEventListener("click", function () {
  window.location = "https://facebook.com";
  window.focus();
});
c.addEventListener("click", function () {
  window.location = "https://motorola.com";
  window.focus();
});

//Create a glowing bulb effect usining toggle classList in javascript.
let bulbEffect = document.body.getElementsByClassName("buttons")[0];
console.log(bulbEffect);
setInterval(function () {
  bulbEffect.classList.toggle("buttons2");
}, 800);
