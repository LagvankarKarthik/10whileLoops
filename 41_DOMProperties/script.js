let a = document.getElementsByTagName("span");
console.dir(a);

a[0].style.fontWeight = "bold";

//Text nodes and comment nodes example
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

//Thsi is the example for tag ame
console.log(document.body.firstElementChild.tagName);
console.dir(document.body.firstElementChild.tagName);

//Getting inner HTML of an element.
console.log(document.body.firstElementChild.innerHTML);
console.dir(document.body.firstElementChild.innerHTML);

first.innerHTML = "<i>I want to die<i>";

//Outer HTML
console.log(first.outerHTML);

outer.outerHTML = "<b>I want to die!</b>";

//For text or comment node:
let textNodeValue = document.body.firstChild.nodeValue;
console.log(textNodeValue);
let textNodedata = document.body.firstChild.data;
console.log(textNodedata);
