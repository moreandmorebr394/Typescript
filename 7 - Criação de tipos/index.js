"use strict";
//1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(showData(["teste", "teste2"]));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProdutc = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProdutc));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters 
function getSomeKey(obj, key) {
    return `A chave ${key} está presente e tem o valor: ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Mario",
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 6 - typeof type operator 
const userName = "Matheus";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão grande",
};
function showKm(km) {
    console.log(`O caminhão tem ${km} km rodados.`);
}
showKm(newTruck.km);
A;
{ }
const testing = "some text";
