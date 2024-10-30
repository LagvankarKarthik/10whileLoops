let p1 = fetch("https://jsonplaceholder.typicode.com/posts");

p1.then((value1) => {
  console.log(value1.status, value1.ok);
  return value1.json(); //This is for getting the response as a json format
}).then((value) => {
  console.log(value);
});

//POST API
const createTodo = async (todoObject) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todoObject),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json(); //This parses the response body to json data and stores in response
  return response; //This returns response as value
};

const getTodo = async (userId) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + userId
  );
  let r = await response.json();
  return r;
};

const todoFunction = async () => {
  let todoObject = {
    title: "foo",
    body: "bar",
    userId: 1001,
  };
  let todo = await createTodo(todoObject);
  console.log(todo);
  console.log(await getTodo(101));
};

todoFunction();

//Cookie
document.cookie = "name1=KarthikPLagvankar";
document.cookie = "name2=Angela";

let key = prompt("Enter your key: ");
let value = prompt("Enter your value: ");

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);

//I can also create an object in todoFunction constining title, body and userId, Then pass that as arg to todo function in line 29, and also pass todo as an arg to createTodo function andreplace everything insde body: JSON.stringify() with "todo".
