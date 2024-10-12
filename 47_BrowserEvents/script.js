let a = document.getElementsByTagName("button")[0];
console.log(a);

a.onclick = () => {
  let b = document.body.getElementsByTagName("button")[0];
  b.innerHTML = "The button is clicked";

  document.getElementsByTagName("h1")[0].innerHTML =
    "<h1>Click kyu kiya be button? <h1>";
};

//AddEventListener

let secondBtn = document.getElementsByTagName("button")[1];

let firstAlert = function (e) {
  alert("This is alert 1.");
  console.log(e, e.target, e.type);
  console.log(event.clientX, event.clientY);
};

let secondAlert = function (e) {
  alert("This is alert 2.");
  console.log(e.target);
};

secondBtn.addEventListener("click", firstAlert);
secondBtn.addEventListener("click", secondAlert);

let quest = prompt("Which alert do you want to see, 1 or 2?");
quest = Number.parseInt(quest);
if (quest === 2) {
  secondBtn.removeEventListener("click", firstAlert);
} else if (quest === 1) {
  secondBtn.removeEventListener("click", secondAlert);
} else {
  alert(
    "Since you did not choose between alert 1 and alert 2, you will see both the alerts when you click the blue button."
  );
}
