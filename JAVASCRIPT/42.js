// clone using Object.assign 

// memory

const obj1 = {
    key1: "value1",
    key2: "value2",
}
// const obj2 = obj1;
// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1);
obj1.key3 = "value3"
console.log(obj1);
console.log(obj2);