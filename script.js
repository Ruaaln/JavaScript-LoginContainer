
class Human{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    printInfo(){
        console.log(`Name: ${this.name} age: ${this.age}`)
    }
}

class woman extends Human{
    constructor(name, age, pregrencyStatus){
        super(name, age)
        this.pregrencyStatus = pregrencyStatus
    }

    printInfo(){
        console.log(`Name: ${this.name} age: ${this.age}`)
    }
}


let person = new Human("Rugo", 20)


person.printInfo()
