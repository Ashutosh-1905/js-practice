console.log("Hello");

let arr = [1, 2, 3, 4, 5];

let sqrArr = arr.map((num) => num * num);
console.log("Squre Number ->", sqrArr);

let arr1 = [12, 5, 8, 130, 44];
let newArr1 = arr1.filter((num) => {
    return num > 10;
});

console.log(newArr1);

let products = [
    { name: "Apple", price: 50 },
    { name: "Banana", price: 70 },
    { name: "Mango", price: 100 }

];
const totalPrice =products.reduce((acc, product) => {
    return acc + product.price;
}, 0);

console.log(prices);


let fruits = ["apple", "banana", "chery"];

const newFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(newFruits);

const num = [1, 2, 3, 4, 5, 6];
const newNum = num.map((n) => n * 2);
console.log(newNum);

let users = [
    { name: "Ashu", age: 21 },
    { name: "Dev", age: 25 },
    { name: "Kapil", age: 24 },
];

const names = users.map((user) => user.name);
console.log(names);
//console.dir(Object.keys(users[0]));


let users = [
    { name: "Ashu", age: 21 },
    { name: "Dev", age: 15 },
    { name: "Kapil", age: 24 },
    {name : "aman", age: 17}
];

const newUsers = users.filter((user) => user.age > 18);
console.log(newUsers);
console.log(users);

const student = [
    { name: "A", marks: 80 },
    { name: "B", marks: 60 },
    { name: "C", marks: 90 },
];


const totalMarks = student.reduce((acc, std) => {
    return acc + std.marks
}, 0);

console.log(totalMarks);

