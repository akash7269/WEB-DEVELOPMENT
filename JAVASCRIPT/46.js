// arrow function 

// const user1 = {
//     firstName: "akash",
//     age: 8,
//     about: () => {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about(user1);

const user1 = {
    firstName: "akash",
    age: 8,
    about() {
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);