// filter methods

const numbers = [1,2,3,4,5,6,8];

// const isEven = function(number){
//     return number%2==0;
// }
// const evenNumber = numbers.filter(isEven);
const evenNumber = numbers.filter(number =>{
    return number%2===0;
});
console.log(evenNumber);