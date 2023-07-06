const person = {
    name: "Abhinav",
    age: 23,
    sayHi(){
        return `Hello my name is ${this.name}`;
    }
}

console.log(person.sayHi());