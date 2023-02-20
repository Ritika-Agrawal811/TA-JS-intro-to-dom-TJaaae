/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label, type = "text") {
  let labelElm = document.createElement("label");
  labelElm.innerText = label + ": ";

  let inputElm = document.createElement("input");
  inputElm.setAttribute("type", type);

  labelElm.append(inputElm);

  return labelElm;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

function createInputElm(label, type = "text") {
  return `<label>${label} : <input type="${type}"/></label>`;
}

// Your code goes here

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

function createList(arr) {
  let list = document.createElement("ul");
  for (let value of arr) {
    let li = document.createElement("li");
    li.innerText = value;
    list.append(li);
  }

  return list;
}

// TEST
createList(["ALABAMA", "ALASKA", "HAWAII", "KENTUCKY"]);
createList(["Afghanistan", "Antarctica", "Congo", "Estonia"]);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(arr) {
  for (let value of arr) {
    let toDo = document.createElement("ul");
    toDo.innerHTML = `
    <li>
      <p>${value.name}</p>
      <input type="checkbox" checked name="" id="">
      <span>X</span>
    </li>`;

    document.body.append(toDo);
  }
}

// TEST
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn JS", isDone: true },
]);
createTodoList([
  { name: "Learn DOM", isDone: false },
  { name: "Learn React", isDone: true },
  { name: "Learn JS", isDone: true },
]);
