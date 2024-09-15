console.log(window);

console.log(document);
document.body.style.fontFamily = "georgea";
document.body.style.color = "black";

//Practice sets on chapter 6

//Write a program that takes age using prompt and alert to tell them if the user can drive.
let age;
let b;

do {
  const canDrive = (age) => {
    age = prompt("What is your age? ");
    age = Number.parseInt(age);
    alert(age > 17 ? "You can drive!" : "You cannot drive!");

    b = confirm("Do you want to do this again?");
  };

  canDrive();
} while (b == true);
{
  canDrive();
}

console.log(b, typeof b);

//Program to change the url to google.com if the user enters a number that is greater than 4
let a = prompt("Enter a number: ");
a = Number.parseInt(a);

location.href =
  a > 4
    ? "https://google.com"
    : "http://127.0.0.1:5500/25_ConoleObjects/28_WindowDomBom/index.html";
