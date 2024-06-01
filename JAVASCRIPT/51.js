// const userMethods={
//     about: function(){
//         return `${this.firstName} is ${this.age} years old` 
//     },
//     is18: function(){
//         return this.age >=18;
//     },
//     sing: function(){
//         return 'lal naa yo yo mo'
//     }
// }
function createUser(firstName, lastName, email, age, address){
    const user = Object(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};
createUser.prototype.is18 = function(){
    return this.age>=18;
}
createUser.prototype.sing = function(){
    return "lal laal laala"
}

const user1 = createUser("akash", "dinda", "akashdinda@gmail.com", 21, "myaddress");
const user2 = createUser("rohit", "dinda", "akash@gmail.com", 12, "onlyaddress");
const user3 = createUser("rahul", "dinda", "adinda@gmail.com", 24, "youraddress");

console.log(user1);
console.log(user1.about());