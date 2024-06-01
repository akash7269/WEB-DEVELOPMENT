// for loop in Array
let fruits=["apple", "grapes", "mango", "banana"];

// console.log(fruits.length);
let fruits2=[];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);


// for of loop in Array

const fruits3=["apple","mango", "grapes", "banana"];
const fruits4=[];
for(let fruit of fruits3){
    console.log(fruit.toUpperCase());
    fruits4.push(fruit.toUpperCase());
}
console.log(fruits4);