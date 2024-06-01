// how to iterate Object

const person={
    name: "Akash",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "cricket"]
}

// for in loop
// object.keys

for(let key in person){
    // console.log(key)
    // console.log(person[key])
    // console.log(`${key} : ${person[key]}`)
    console.log(key,":",person[key])
}