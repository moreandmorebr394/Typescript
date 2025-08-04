//1 - Generics

function showData<T>(arg: T): string {
        return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["teste", "teste2"]))
// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T): string {
        return `O nome do produto é: ${obj.name}`
}
const myObj = {name: "Porta", cor: "Branca"}
const otherProdutc = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProdutc))

// 3 - generics com interface
interface MyObject<T, U> {
        name: string
        wheels: T
        engine: U
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean,boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen: Pen = {name: "Caneta", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters 

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
        return `A chave ${key} está presente e tem o valor: ${obj[key]}`
}
const server = {
        hd: "2TB",
        ram: "32GB",
}

console.log(getSomeKey(server, 'ram'))

// 5 - keyof type operator
type character = {name: StaticRange, number: number, hasDriveLicense: boolean}

type C = keyof Character
function showCharName(obj: Character, name: C): string {
        return `${obj[name]}`
}

const myChar: Character = {
        name: "Mario",
        age: 30,
        hasDriveLicense: true,
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))

// 6 - typeof type operator 
const userName: string = "Matheus"

const userName2: typeof userName = "João"

type x = typeof userName
const userName4: x = "Joaquim"

// 7 - indexed access types
type Truck = {km: number, kg: number, description: string}
type Km = Truck['km']

const newTruck: Truck = {
        km: 10000,
        kg: 5000,
        description: "Caminhão grande",
}

function showKm(km: Km): string {
        console.log(`O caminhão tem ${km} km rodados.`)
}

showKm(newTruck.km);

// 8 - conditional types
interface A {}

interface B {} extends A {}

type myType = B extends A ? number : String

type myTypeB = Teste extends{showNumber(): number } ? string : boolean;

// 9 - template literals type 

type TestA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`    