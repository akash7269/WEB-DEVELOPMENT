// intro to arrays
// refrence type
// how to create Array
// ordered collection of items

// let fruits=["apple", "mango", "grapes", "banana" ,1,2,3];
// console.log(fruits);
// console.log(fruits[0]);

let fruits=["apple", "mango", "grapes"];
let obj={};
console.log(fruits);
fruits[1]="banana";
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// Array push pop ################### 
fruits.push("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);

// array shift unshift #################
fruits.unshift("banana");
console.log(fruits);
let removeFruit=fruits.shift();
console.log(fruits);
console.log("remove fruit is ",removeFruit)