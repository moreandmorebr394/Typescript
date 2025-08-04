// 1 - tipo de objeto para função com interface

interface Product {
        name: string
        price: number
        isAvailable: boolean
}

function showProductDetails(product: Product) {
        console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
        if(product.isAvailable) {
                console.log(`O produto ${product.name} está disponível`)
        }
}

const Shirt: Product = {
        name: "Camisa",
        price: 29.99,
        isAvailable: true
}

showProductDetails(Shirt)
showProductDetails({name: "Calça", price: 49.99, isAvailable: true})


// 2 - propriedades opcional em interface
interface User {
        email: string,
        role?: string
}

function showDetails(user: User) {
        console.log (`O email do usuário é ${user.email}`)
        if(user.role) {
                console.log(`A função do usuário é ${user.role}`)
        }
}

const u1: User = {email: "matheus@gmail.com", role: "Admin"}
const u2: User = {email: "joao@gmail.com"}

showDetails(u1)
showDetails(u2)

// 3 - readonly 
interface Car {
        brand: string
        readonly wheels: number 
}

const fusca: Car = {
        brand: "VW",
        wheels: 4
}

console.log(fusca)

// 4 - index signature
interface CoordObject {
        [index: string]: number
}
let coords: CoordObject = {
        x: 10
}
coords.y = 20
console.log(coords)


// 5 - extending interfaces 
interface Human {
        name: string
        age: number
}

interface SuperHuman extends Human {
        superPower: string[]
}

const matheus: Human = {
        name: "Matheus",
        age: 25
}

console.log(matheus)

const superman: SuperHuman = {
        name: "Clark Kent",
        age: 30,
        superPower: ["Super Força", "Voo"]
}

console.log(superman)
console.log(superman.superPower[1])

// 6 - intersection types

interface Character {
        name: string
}

interface Gun {
        type: string
        caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
        name: "Arnold",
        type: "Rifle",
        caliber: 7.62
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array

let myArray = ["apple", "banana", "orange"] 
myArray[3] = "grapefruit"
console.log(myArray)
myArray.forEach((item) => {
        console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
        return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number];
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
//const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5,]

console.log(myNumberArray)

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ["Alice", 30]
console.log(anotherUser[0])
anotherUser[0] = "Bob"
console.log(anotherUser[0])

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
        console.log(numbers[0])
        console.log(numbers[1])
}

showNumbers([10, 20])