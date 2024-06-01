function User(email, password){
    this._email = email;
    this._password = password
}

Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})

const akash = new User("din@gmail.com", "4532")
console.log(akash.email);