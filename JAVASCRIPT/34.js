// find methods 

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string){
//     return string.length===3;
// }

// const ans = myArray.find(isLength3);

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);


const users = [
    {userId: 1, userName: "akash"},
    {userId: 2, userName: "rohit"},
    {userId: 3, userName: "rahul"},
    {userId: 4, userName: "sachin"},
    {userId: 5, userName: "mayank"},
];

const ans = users.find((user)=>user.userId===3)
console.log(ans);