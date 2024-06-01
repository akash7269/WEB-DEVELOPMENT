// Map 
// map is an iterable

// store data in ordered fashion
// duplicate key are not allowed like objcets

// different between map and objects

// objects can only have string or symbol 
// as key 

// key may be string or symbol 

// in maps you can use anything as key
// like array, number, string

// key value pair store kerega
// const person = new Map();
// person.set('firstName', 'Akash');
// person.set('age', 7);
// person.set(1, 'one')
// console.log(person);
// console.log(person.get('firstName'));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     console.log(key, value);
// }

const person = new Map([['firstName', 'Akash'], ['age', 7]]);
console.log(person);