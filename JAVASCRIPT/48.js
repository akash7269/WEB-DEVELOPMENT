const userMethods={
    about: function(){
        return `${this.firstName} is ${this.age} years old` 
    },
    is18: function(){
        return this.age >=18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("akash", "dinda", "akashdinda@gmail.com", 21, "myaddress");
const user2 = createUser("rohit", "dinda", "akash@gmail.com", 12, "onlyaddress");
const user3 = createUser("rahul", "dinda", "adinda@gmail.com", 24, "youraddress");

console.log(user1);
const about=user2.about();
console.log(about)
const is18 = user2.is18();
console.log(is18);