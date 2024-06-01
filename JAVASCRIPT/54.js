function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};
CreateUser.prototype.is18 = function(){
    return this.age>=18;
}
CreateUser.prototype.sing = function(){
    return "lal laal laala"
}

const user1 = new CreateUser("akash", "dinda", "akashdinda@gmail.com", 21, "myaddress");
const user2 = new CreateUser("rohit", "dinda", "akash@gmail.com", 12, "onlyaddress");
const user3 = new CreateUser("rahul", "dinda", "adinda@gmail.com", 24, "youraddress");

for(let key in user1){
    // console.log(key)
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}