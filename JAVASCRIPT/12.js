// how to clone Array

// how to concatenate two array 

let array1=["item1", "item2"];
// let array2=["item1", "item2"];
// let array2=array1.slice(0).concat(["item3", "item4"]);
// let array2=[].concat(array1);

// spread operator
let array2=[...array1];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);