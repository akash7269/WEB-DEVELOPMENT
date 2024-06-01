// Sets (it is iterable)
// store data (data ko store krta hai)
// sets also have its own methods 
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3,4]);
// console.log(numbers);

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(['item1', 'item2']);
// numbers.add(['item1', 'item2']);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }
// console.log(numbers);

const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(items);

// for(let number of numbers){
//     console.log(number);
// }

const myArray = [2,4,4,6,5,6,7]
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray.length)