// methods
// function inside object 

// const person = {
//     firstName : "akash",
//     age : 8,
//     about: function(){
        // console.log("person name is harshit and person age is 8");
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }
// person.about();

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
}

const person1 ={
    firstName: "akash",
    age: 22,
    about: personInfo
}
const person2 ={
    firstName: "rohit",
    age: 20,
    about: personInfo
}
const person3 ={
    firstName: "rahul",
    age: 24,
    about: personInfo
}

person1.about();
person2.about();
person3.about();