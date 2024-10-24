let google;
let script;

function loadSite(href) {
  google = document.createElement("button"); // Use <a> tag instead of <button>
  google.href = href;
  google.innerHTML = "Google";

  google.onclick = function () {
    window.open(href, "_blank"); //This is for opening the web page in a new tab.
  };
  document.body.appendChild(google);
}

function loadScript(src, callback) {
  script = document.createElement("script");
  script.src = src;
  script.onload = function (src) {
    console.log("Loaded script with src: " + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error while running the script src: " + src);
    callback(new Error("Error with the src"));
  };
  document.body.appendChild(script);
}

function logging(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(
    'The "loadScript" function has now loaded. This is the src: ' + src
  );
}

loadSite("https://google.com");
loadScript(
  "https://cdn.jsdelizzzzzzzzzzvr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  logging
);
