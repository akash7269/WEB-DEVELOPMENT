// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();


function myFunction(power){
    return function(number){
        return number ** power;
    }
}
const square = myFunction(2);
const ans = square(3);
console.log(ans);