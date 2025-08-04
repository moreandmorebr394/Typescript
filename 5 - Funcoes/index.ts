// 1 - void
function withoutReturn():void {
    console.log("Esta função não tem retorno")
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string):string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName:string) {
    console.log("Preparando a função")

    const greet = f(userName)

    console.log
}

preGreeting(greeting, "Jhon")
preGreeting(greeting, "Paul")

// 3 - generic function 

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T>(obj1: U, obj2: T){
    return { ...obj1, ...obj2 }
}

const newObject = mergeObjects({ name: "Jhon" }, { age: 30, job: "Developer" })
console.log(newObject)

// 4 - constrains

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest
    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }
    
    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("20", "10"))
//console.log(biggestNumber("30", 15))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]))

// 6- parâmetros opcionais

function modernGreeting(name: string, greet?: string): string {

    return `Olá ${greet} ${name}, tudo bem?`
}

console.log(modernGreeting("Jhon"))

// 7 - parâmetros default
function somaDefault(n: number, m = 10) {
    return n + m

}

console.log(somaDefault(10))
console.log(somaDefault(10, 20))

// 8 - unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number") {
        console.log("Esse é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

// 10 - rest operator
function sumAll(...n: number[]) {
    return n.reduce((sum, number) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(10, 20, 30))


// 11 - destructuring como parametro
function showProductDetails({ name, place}: {name: string, place: number}): string {
    return `O produto ${name} está localizado no corredor ${place}`
}

const shirt = {name: "camisa", price: 49.99, place: 5}

console.log(showProductDetails(shirt))

