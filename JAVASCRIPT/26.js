// parameter destructuing
// Object
// react 

const person = {
    firstname: "akash",
    gender: "male",
    age: 22
}

// function printDetails(obj){
//     console.log(obj.firstname);
//     console.log(obj.gender);
// }

function printDetails({firstname, gender, age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}
printDetails(person)