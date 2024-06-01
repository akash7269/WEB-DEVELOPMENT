// closures
// closure : 30-40%
// analyse : 70-80%
// real example : 100%

// function can return function

// function outerFunction(){
//     function innerFuncton(){
//         console.log("hello word");
//     }
//     return innerFuncton;
// }

// const ans = outerFunction();
// console.log(ans);
// ans();

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("akash", "dinda");
// console.log(ans);
ans();