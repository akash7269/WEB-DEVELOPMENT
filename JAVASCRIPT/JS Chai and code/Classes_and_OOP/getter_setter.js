class User {
    constructor(username, password){
        this.username = username
        this.password = password
    }

    get username(){
        return this._username.toUpperCase()
    }

    set username(value){
        this._username = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `b${this._password}efghi`
    }

    set password(value){
        this._password = value
    }
}

const akash = new User("ak@gmail.com", "abcd")
console.log(akash.password);
console.log(akash.username);