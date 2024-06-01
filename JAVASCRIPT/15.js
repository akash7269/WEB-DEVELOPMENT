// object referance type 
// array are good but not sufficient for real world data
// object don't have index

// how to create Object

const person={name:"Akash", age:22};
console.log(person)
console.log(person.name);
console.log(person.age);

const persons={
    name: "Akash",
    age: 22,
    hobbies: ["guitar", "sleeping", "cricket"]
}
console.log(persons);


// difference between dot and bracket

const key="email";
const personi={
    name: "Akash",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "cricket"]
}
console.log(person);
person.key="akash@gmail.com";
console.log(person);
person[key]="dinda@gmail.com";
console.log(person)