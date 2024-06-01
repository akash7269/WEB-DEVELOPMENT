// map methods
// const numbers = [3,4,5,7,2];

// const square = number => {
//     return number*number;
// }

// const squarenumber = numbers.map(function(number, index){
//     return `index:  ${index} = ${number*number}`;
// });
// console.log(squarenumber);

const users = [
    {firstName: "akash", age: 23},
    {firstName: "rohit", age: 24},
    {firstName: "rahul", age: 26},
    {firstName: "sachin", age: 25},
]

const userName=users.map(user =>{
    return user.firstName;
});
console.log(userName);