class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const akash = new User("akash")
// console.log(akash.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iph@phone.com")
// console.log(iphone.logMe())
iphone.logMe();

console.log('5' + 3)
console.log('5' - 3)

console.log(5 == '5');
console.log(5 === '5');