const pet = {
    name: "Bob",
    typeOfPet: "dog",
    age: 3,
    colour: "brown",
    eat(){
        return `${this.name} is eating.`;
    },
    drink(){
        return `${this.name} is drinking.`;
    }
}

console.log(pet.eat());

console.log(pet.drink());

