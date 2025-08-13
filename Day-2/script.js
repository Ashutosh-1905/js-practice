const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  h1.textContent = "Jai Shree Mahakal";
});

const input = document.querySelector("input");
const div = document.querySelector("div");

input.addEventListener("input", (e) => {
  div.textContent = e.target.value;
});

const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");

const body = document.querySelector("body");

red.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});

let items = [
    "Apple", "Banana", "Orange", "Mango", "Grapes",
    "Pineapple", "Strawberry", "Watermelon", "Peach", "Cherry",
    "Lemon", "Kiwi", "Blueberry", "Papaya", "Guava"
];

const search = document.querySelector("#search");
const ul = document.querySelector("ul");

const displayItem = (list) => {
    ul.innerHTML = "";

    list.forEach((item) => {

        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

};

displayItem(items);
search.addEventListener("input", (e) => {
    
    const searchVal = e.target.value.toLowerCase();
    const filteredItems = items.filter((item) => item.toLowerCase().includes(searchVal));
    displayItem(filteredItems);
});
