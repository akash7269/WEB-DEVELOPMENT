
class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const print = new user("akash", "aka@gmail.com", "1234")

console.log(print.encryptPassword());
console.log(print.changeUsername());