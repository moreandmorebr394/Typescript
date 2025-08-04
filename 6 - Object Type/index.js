"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto ${product.name} está disponível`);
    }
}
const Shirt = {
    name: "Camisa",
    price: 29.99,
    isAvailable: true
};
showProductDetails(Shirt);
showProductDetails({ name: "Calça", price: 49.99, isAvailable: true });
function showDetails(user) {
    console.log(`O email do usuário é ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = { email: "matheus@gmail.com", role: "Admin" };
const u2 = { email: "joao@gmail.com" };
showDetails(u1);
showDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 20;
console.log(coords);
const matheus = {
    name: "Matheus",
    age: 25
};
console.log(matheus);
const superman = {
    name: "Clark Kent",
    age: 30,
    superPower: ["Super Força", "Voo"]
};
console.log(superman);
console.log(superman.superPower[1]);
const arnold = {
    name: "Arnold",
    type: "Rifle",
    caliber: 7.62
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["apple", "banana", "orange"];
myArray[3] = "grapefruit";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5,]
console.log(myNumberArray);
const anotherUser = ["Alice", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Bob";
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([10, 20]);
