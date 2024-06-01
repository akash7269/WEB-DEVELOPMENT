// arrow function....

// const singhHappyBirthday=function(){
//     console.log("happy birthday to you...");
// }
// singhHappyBirthday();

const singhHappyBirthday=() => {
    console.log("happy birthday to you...");
}
singhHappyBirthday();


const sumThreeNumber=(a, b, c) => {
    return a+b+c;
}
const ans=sumThreeNumber(2,3,4);
console.log(ans);

// const isEven=number => {
//     return number % 2===0;
// }
const isEven=number => number%2===0;
console.log(isEven(4))