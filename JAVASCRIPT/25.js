// default parameter

// function addTwo(a,b){
//     // if(typeof b===undefined){
//     //     b=0;
//     // }
//     // return a+b;
// }

// function addTwo(a,b=0){
//     return a+b;
// }
// const ans=addTwo(44,6);
// console.log(ans);


// rest parameter

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
// myFunc(2,3,4,5,6,7,8)

function addAll(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
const ans=addAll(1,2,3,4,5);
console.log(ans);