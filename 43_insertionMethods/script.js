let a = document.getElementsByTagName("div")[0];
a.innerHTML = "<h1><b>I am Mr. Lagvankar</b></h1>" + a.innerHTML;

let div = document.createElement("div");
div.innerHTML = "<b>This is an example element</b>";
a.appendChild(div);

let h3 = document.createElement("h3");
h3.innerHTML = "<h3>I am an h3 element </h3>";
document.body.append(h3);

let h4 = document.createElement("h4");
h4.innerHTML = "<h4>This is the replacement h4 element. </h4>";

let b = document.getElementsByClassName("replaceExample")[0];
console.log(b);
b.replaceWith(h4);
