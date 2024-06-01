// important array methods

// forEach 
// map 
// filter 
// reduce 

// const numbers = [4, 6, 3, 8];

// function multiplyBy2(number, index){
//     console.log("index is ", index);
//     console.log(`${number}*2 = ${number*2}`);
// }

// // multiplyBy2(numbers[0], 0)
// // multiplyBy2(numbers[1], 1)

// for(let i=0;i<numbers.length;i++){
//     multiplyBy2(numbers[i], i);
// }


// forEach methods

const numbers = [4,2,5,8];

// function myFanc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(myFanc);

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number){
//     console.log(number*2);
// })


const users = [
    {firstName: "akash", age: 23},
    {firstName: "rohit", age: 24},
    {firstName: "rahul", age: 26},
    {firstName: "sachin", age: 25},
]

users.forEach(function(user){
    console.log(user.firstName);
})

// same as 

// for(let user of users){
//     console.log(user.firstName);
// }