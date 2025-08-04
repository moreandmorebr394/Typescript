// 1 - type guard
function sum(a: number | string, b:number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
} else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
} else {
        console.log("Impossivel fazer essa soma")
}    
sum("4", "59")
sum(12, 42.3)
sum("5", 6)

// - 2 - checando se valor existe
function operations(arr: number[], operation: string | undefined) {
        if(operation ==="sum") {
                const sum = arr.reduce((i, total) => i + total)
        } else if(operation === "multiply") {
                const multiply = arr.reduce((i, total) => i * total)
                console.log(multiply)
        } else {
                console.log("Por favor, defina uma operação")
        }
}

}

operations([1, 2, 3],)
operations([1, 2, 3], "sum")
operations([1, 2, 3], "multiply")


// 3 - insrance of

class User {
        name

        constructor(name: string) {
                this.name = name
        }
}

class SuperUser extends User {
        constructor(name: string) {
                super(name)
        }
}

const jhnon = new User ("Jhon")
const Paul = new SuperUser ("Paul")

console.log(jhnon)
console.log(Paul)

function userGreeting(user: object) {
        if(user instanceof SuperUser) {
                console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
        } else if (user instanceof User) {
                console.log(`Olá ${user.name}`)
        }

}

userGreeting(jhnon)
userGreeting(Paul)

// 4 - operador "in"

class Dog {
        name: string
        breed!: string

        constructor(name: string, breed?: string) {
                this.name = name
                if(breed) {
                        this.breed = breed
                }
        }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Poodle")

function showDogDetails(dog: Dog) {
        if("breed" in dog) {
                console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`)
        } else {
                console.log(`O cachorro não tem raça definida`)
        }
}

showDogDetails(turca)
showDogDetails(bob)

function operations(arg0: number[], p0: string) {
        throw new Error("Function not implemented.")
}
