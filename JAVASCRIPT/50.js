const obj1 = {
    key1: "value1",
    key2: "value",
}

const obj2 = Object.create(obj1);
// there is one more way to create empty object
obj2.key3 = "value3";
console.log(obj2);

// this is happening
console.log(obj2.__proto__);